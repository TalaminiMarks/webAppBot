import { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../utils/utils";

export default function route(fastify: FastifyInstance){
    fastify.get("/habilidades", async (req, res)=> {
        const data = await prisma.skills.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                damage: true,
                typeDamage: true
            },
            orderBy: {
                name: "asc"
            }
        })

        res.send(data);
    })

    fastify.get("/habilidades/:id", async (req, res)=>{
        const schema = z.object({
            id: z.string().transform(val => Number(val))
        })

        const { id } = schema.parse(req.params);

        const data = await prisma.skills.findUniqueOrThrow({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true,
                damage: true,
                typeDamage: true
            }
        })

        res.send(data);
    })

    fastify.post("/habilidades/adicionar", async (req, res) =>{
        const schema = z.object({
            characterId: z.string(),
            skillId: z.string().transform(val => Number(val)),
            bonusDamage: z.string(),
            bonusTypeDamage: z.string(),
            additionalDescription: z.string()
        })

        const body = schema.parse(req.body);

        const data = await prisma.characterSkills.create({
            data: {
                characterId: body.characterId,
                skillsId: body.skillId,
                additionalDescription: body.additionalDescription,
                bonusDamage: body.bonusDamage,
                typeBonusDamage: body.bonusTypeDamage
            }
        })

        if(data){
            res.send({
                message: "Adicionado com sucesso",
                spell: data
            })
        }
        else{
            res.send({message: "Erro ao adicionar"})
        }

    })
}