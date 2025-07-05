import prisma from "~/lib/prisma";
import type { ActionFunctionArgs } from "react-router";
export const action = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  // if (!token) {
  //   return new Response(
  //     JSON.stringify({ message: "Invalid or missing token" }),
  //     { status: 400 }
  //   );
  // }

  const user = await prisma.user.findFirst({
    where: { verifyToken: token },
  });

  if (!user) {
    return new Response(
      JSON.stringify({ message: "Invalid verification token" }),
      { status: 404 }
    );
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      isVerified: true,
      verifyToken: null,
    },
  });

  return new Response(
    JSON.stringify({ message: "Email verified successfully" }),
    { status: 200 }
  );
};
