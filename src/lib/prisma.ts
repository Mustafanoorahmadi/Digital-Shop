import { PrismaClient } from "@prisma/client";
import type * as PrismaType from "@prisma/client"

export const prisma = new PrismaClient();
console.log('prisma' , prisma)
export type {PrismaType}