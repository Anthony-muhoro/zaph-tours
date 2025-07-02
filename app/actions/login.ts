import type { ActionFunctionArgs } from "react-router";
import prisma from "~/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { email, password } = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 404,
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }
    const JWT_SECRET = process.env.JWT_SECRET!;
    const token = jwt.sign({ UserID: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "2m",
    });
    return new Response(
      JSON.stringify({ message: "Login successful", token }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};
