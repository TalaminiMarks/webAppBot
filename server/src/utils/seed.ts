import { prisma } from "./prisma";

async function attributes(){
    await prisma.attributes.createMany({
        data: [
            {name: "Força"},
            {name: "Destreza"},
            {name: "Constituição"},
            {name: "Inteligência"},
            {name: "Sabedoria"},
            {name: "Carisma"}
        ]
    })
}

async function expertise(){
    await prisma.expertise.createMany({
        data: [
            {name: "Acrobacia"},
            {name: "Arcanismo"},
            {name: "Atletismo"},
            {name: "Atuação"},
            {name: "Blefar"},
            {name: "Furtividade"},
            {name: "História"},
            {name: "Intimidação"},
            {name: "Intuição"},
            {name: "Investigação"},
            {name: "Lidar com Animais"},
            {name: "Medicina"},
            {name: "Natureza"},
            {name: "Percepção"},
            {name: "Persuasão"},
            {name: "Prestidigitação"},
            {name: "Religião"},
            {name: "Sobrevivência"}
        ]
    })
}

async function items(){
    await prisma.items.createMany({
        data: [
            {name: 'espada larga', description: 'Usada como arma'},
            {name: 'espada longa', description: 'Usada como arma'}
        ]
    })
}

async function skills(){
    await prisma.skills.createMany({
        data: [
            {name: "Estilos de combate", description: "uma skill"},
            {name: "retomar folego", description: "uma skill"}
        ]
    })
}

async function spells(){
    await prisma.spells.createMany({
        data: [
            {name: "missel arcano", description: "uma spell"},
            {name: "armadura arcana", description: "uma spell"}
        ]
    })
}

async function character(){
    const Attributes = await prisma.attributes.findMany();
    const Expertise = await prisma.expertise.findMany();
    const Items = await prisma.items.findMany();
    const Skills = await prisma.skills.findMany();
    const Spells = await prisma.spells.findMany();

    const Character = await prisma.character.create({
        data: {
            id: "123123",
            name: "Tester",
            age: "20",
            race: "humano",
            role: "Guerreiro",
        }
    })

    await prisma.characterAttributes.createMany({
        data: [
            {characterId: Character.id, attributesId: Attributes[0].id, value: 6},
            {characterId: Character.id, attributesId: Attributes[1].id, value: 9},
            {characterId: Character.id, attributesId: Attributes[2].id},
            {characterId: Character.id, attributesId: Attributes[3].id},
            {characterId: Character.id, attributesId: Attributes[4].id, value: 10},
            {characterId: Character.id, attributesId: Attributes[5].id}
        ]
    })
    

    await prisma.characterExpertise.createMany({
        data: [
            {characterId: Character.id, expertiseId: Expertise[0].id, value: 1},
            {characterId: Character.id, expertiseId: Expertise[1].id},
            {characterId: Character.id, expertiseId: Expertise[2].id},
            {characterId: Character.id, expertiseId: Expertise[3].id},
            {characterId: Character.id, expertiseId: Expertise[4].id},
            {characterId: Character.id, expertiseId: Expertise[5].id, value: 2},
            {characterId: Character.id, expertiseId: Expertise[6].id},
            {characterId: Character.id, expertiseId: Expertise[7].id},
            {characterId: Character.id, expertiseId: Expertise[8].id},
            {characterId: Character.id, expertiseId: Expertise[9].id},
            {characterId: Character.id, expertiseId: Expertise[10].id},
            {characterId: Character.id, expertiseId: Expertise[11].id},
            {characterId: Character.id, expertiseId: Expertise[12].id, value: 3},
            {characterId: Character.id, expertiseId: Expertise[13].id},
            {characterId: Character.id, expertiseId: Expertise[14].id},
            {characterId: Character.id, expertiseId: Expertise[15].id, value: 98},
            {characterId: Character.id, expertiseId: Expertise[16].id},
            {characterId: Character.id, expertiseId: Expertise[17].id}
        ]
    })

    await prisma.characterItens.create({
        data: { 
            characterId: Character.id,
            itemsId: Items[0].id,
            value: "1d6"
        }
    })

    await prisma.characterSkills.create({
        data: {
            characterId: Character.id,
            skillsId: Skills[0].id,
            value: "1d6"
        }
    })

    await prisma.characterSpells.create({
        data: {
            characterId: Character.id,
            spellsId: Spells[0].id,
            value: "1d6"
        }
    })
    
}

async function main(){
    await Promise.all([attributes(), expertise(), items(), skills(), spells()])
    await character()
}

 main()