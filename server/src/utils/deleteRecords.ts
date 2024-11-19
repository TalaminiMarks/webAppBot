import { prisma } from "./prisma";

Promise.all([
    prisma.character.deleteMany()
])