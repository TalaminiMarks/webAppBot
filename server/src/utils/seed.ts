import { prisma } from "./utils";

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
    const attributes = await prisma.attributes.findMany();
    const str = attributes.find(i => i.name === "Força");
    const dex = attributes.find(i => i.name === "Destreza");
    const con = attributes.find(i => i.name === "Constituição");
    const int = attributes.find(i => i.name === "Inteligência");
    const wis = attributes.find(i => i.name === "Sabedoria");
    const char = attributes.find(i => i.name === "Carisma");
    if(!str || !dex || !con || !int || !wis || !char) throw new Error("Algo deu errado");
    await prisma.expertise.createMany({
        data: [
            {name: "Acrobacia", attributesId: dex.id},
            {name: "Arcanismo", attributesId: int.id},
            {name: "Atletismo", attributesId: str.id},
            {name: "Atuação", attributesId: char.id},
            {name: "Enganação", attributesId: char.id},
            {name: "Furtividade", attributesId: dex.id},
            {name: "História", attributesId: int.id},
            {name: "Intimidação", attributesId: char.id},
            {name: "Intuição", attributesId: wis.id},
            {name: "Investigação", attributesId: int.id},
            {name: "Adestrar Animais", attributesId: wis.id},
            {name: "Medicina", attributesId: wis.id},
            {name: "Natureza", attributesId: int.id},
            {name: "Percepção", attributesId: wis.id},
            {name: "Persuasão", attributesId: char.id},
            {name: "Prestidigitação", attributesId: dex.id},
            {name: "Religião", attributesId: int.id},
            {name: "Sobrevivência", attributesId: wis.id}
        ]
    })
}

async function items(){
    await prisma.items.createMany({
        data: [
            {
                name: "Espada Longa", 
                description: "Versátil (1d10)", 
                damage: "1d8", 
                typeDamage: "Cortante"
            },
            {
                name: "Adaga", 
                description: "Acuidade, leve, arremesso (distância 6/18)", 
                damage: "1d4", 
                typeDamage: "Perfurante"
            },
        ]
    })
}

async function skills(){
    await prisma.skills.createMany({
        data: [
            {
                name: "Estilos de combate", 
                description: "Aumenta o dano da arma",
                damage: "1d3",
                typeDamage: "Fisico"
            },
            {
                name: "Retomar folego", 
                description: "Gasta uma rodada para recuperar vida",
                damage: "1d6",
                typeDamage: "Suporte"
            }
        ]
    })
}

async function spells(){
    await prisma.spells.createMany({
        data: [
            {
                name: "Missel Magico", 
                description: "Você cria três dardos brilhantes de energia mística",
                damage: "1d4 + 1",
                typeDamage: "Energia"
            },
            {
                name: "Bola de Fogo", 
                description: "Um veio brilhante lampeja na ponta do seu dedo",
                damage: "8d6",
                typeDamage: "Fogo"
            }
        ]
    })
}

async function main(){
    await Promise.all([attributes(), items(), skills(), spells()])
    await expertise();
}

 main()