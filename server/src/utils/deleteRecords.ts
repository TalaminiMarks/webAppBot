import { prisma } from "./prisma";

Promise.all([
    prisma.characterAttributes.deleteMany(),
    prisma.characterExpertise.deleteMany(),
    prisma.character.deleteMany(),
    prisma.attributes.deleteMany(),
    prisma.expertise.deleteMany(),
    prisma.items.deleteMany(),
])
.then(console.log)
.catch(console.error)