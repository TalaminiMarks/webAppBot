import { FastifyInstance } from "fastify";
import { prisma } from "../utils/utils";
import z from "zod";

export default async function route(fastify: FastifyInstance){
    fastify.post("/upar-nivel", (req, res)=>{
        const schema = z.object({
            characterId: z.number(),
            attributes: z.object({
                id: z.number(),
                value: z.number(),
                modValue: z.number(),
            }),
            expertises: z.object({
                id: z.number(),
                value: z.number()
            })
        })

        const data = schema.parse(req.body);

        if(data){
            console.log(data)
            res.send("Requisicao concluida")
        }
        else{
            res.send("Erro na requisição")
        }
    })
}