import { PrismaClient } from "@prisma/client"

// Instancia do prisma
export const prisma = new PrismaClient({
    log: ["error"]
})