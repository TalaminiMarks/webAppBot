import { prisma } from "./prisma";

/**
 * TODO: Criar script pra popular o DB
*/ 

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

async function character(){
    await prisma.character.create({
        data: {
            id: '123123',
            name: 'Mariko',
            age: '20',
            race: 'humano',
        }
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

Promise.all([attributes(), expertise(), character(), items()])
 