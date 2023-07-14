import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest, res: NextResponse) {
  console.log(`Incoming request from ${req.url}`);

  let json_response = {
    status: "success",
    results: { name: "oliver" },
  };
  return NextResponse.json(json_response, { status: 200 });
}

export { handler as GET, handler as POST };
