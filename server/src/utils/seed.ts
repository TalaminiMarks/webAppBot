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
    await Promise.all([attributes(), expertise(), items(), skills(), spells()])
}

 main()