import { NextResponse } from "next/server";

export async function GET() {
  return (
    NextResponse.json([{msg : "안녕하세요"},{msg : "반갑습니다"},{msg : "수정버전2"}])
  );
}