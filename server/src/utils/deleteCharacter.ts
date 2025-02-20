import { prisma } from "./utils";

async function main(){
    Promise.all([
        prisma.characterAttributes.deleteMany(),
        prisma.characterExpertise.deleteMany(),
        prisma.characterItens.deleteMany(),
        prisma.characterSkills.deleteMany(),
        prisma.characterSpells.deleteMany()
    ])
        .then(console.log)
        .catch(console.error);

    await prisma.character.deleteMany()
}

try{
    main()
}
catch(e){
    console.error(e)
}