import type { ActionFunctionArgs } from "react-router";
import nodemailer from "nodemailer";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import prisma from "~/lib/prisma";

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email already in use" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomBytes(32).toString("hex");

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        verifyToken,
      },
    });

    // 🚀 Send email
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verifyLink = `${process.env.BASE_URL}/verify-email?token=${verifyToken}`;

    await transporter.sendMail({
      from: `"ZAPH TOURS" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email",
      html: `
        <h2>Welcome ${firstName}!</h2>
        <p>Click the link below to verify your email:</p>
        <a href="${verifyLink}">${verifyLink}</a>
      `,
    });

    return new Response(
      JSON.stringify({
        message: "Account created. Check your email to verify.",
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};
