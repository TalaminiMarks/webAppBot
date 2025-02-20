import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
    log: ["error"]
})

export function getModAttr(value: number){
    return Math.floor((value - 10) / 2);
}