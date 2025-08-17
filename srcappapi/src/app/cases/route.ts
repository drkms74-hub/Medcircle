import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function GET() {
  const cases = await prisma.case.findMany();
  return NextResponse.json(cases);
}

export async function POST(req: Request) {
  const { title, content, userId } = await req.json();
  const newCase = await prisma.case.create({
    data: { title, content, userId }
  });
  return NextResponse.json(newCase);
}

