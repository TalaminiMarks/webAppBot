import { prisma } from "./utils";

async function deleteRecords() {
    await Promise.all([
        prisma.characterAttributes.deleteMany(),
        prisma.characterExpertise.deleteMany(),
        prisma.characterSkills.deleteMany(),
        prisma.characterItens.deleteMany(),
        prisma.characterSpells.deleteMany(),
        prisma.characterDeath.deleteMany()
    ])
    .then(console.log)
    .catch(console.error)
    
    await Promise.all([
        prisma.character.deleteMany(),
        prisma.expertise.deleteMany(),
        prisma.items.deleteMany(),
        prisma.skills.deleteMany(),
        prisma.spells.deleteMany(),
    ])
    .then(console.log)
    .catch(console.error)
    
    await Promise.resolve(prisma.attributes.deleteMany())
    .then(console.log)
    .catch(console.error);
}

deleteRecords()