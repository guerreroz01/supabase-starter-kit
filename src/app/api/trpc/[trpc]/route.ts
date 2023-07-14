import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handler(req: NextRequest, res: NextResponse) {
  console.log(`Incoming request from ${req.url}`);
  const data = await prisma.user.findMany();

  let json_response = {
    status: "success",
    results: data,
  };
  return NextResponse.json(json_response, { status: 200 });
}

export { handler as GET, handler as POST };
