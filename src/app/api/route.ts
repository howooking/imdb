import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(request.body);
  return NextResponse.json({ good: "dfdf" });
}
