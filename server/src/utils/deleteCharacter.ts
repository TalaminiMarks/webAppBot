import { prisma } from "./prisma";

async function main(){
    Promise.all([
        prisma.characterAttributes.deleteMany(),
        prisma.characterExpertise.deleteMany(),
        prisma.characterItens.deleteMany(),
        prisma.characterSkills.deleteMany(),
        prisma.characterSpells.deleteMany()
    ])

    await prisma.character.deleteMany();
}

try {
    main()
}
catch(e) {
    console.error(e)
}