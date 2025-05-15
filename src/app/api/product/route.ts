import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// _req: NextRequest
export async function GET() {
  
  // get action by prisma
  const result = await prisma.product.findMany({ include: { images: true } });

  return NextResponse.json({
    data: result, 
  });
}
