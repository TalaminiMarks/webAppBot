import { FastifyInstance } from "fastify";
import { prisma } from "../utils/utils";
import z from "zod";
import axios from "axios";

export default function route(fastify: FastifyInstance) {
    fastify.addHook('preHandler', async (req)=>{
        await req.jwtVerify();
    });

    fastify.post("/logout/discord", async (req, res)=>{
        const schema = z.object({
            sub: z.string()
        })

        const jwt = schema.parse(req.user)

        const user = await prisma.user.findUnique({
            where: {
                discordId: jwt.sub
            },
            select: {
                accessToken: true
            }
        })

        if(user){
            const revocationCode = await axios.post("https://discord.com/api/oauth2/token/revoke",
                {
                    client_id: process.env.DISCORD_CLIENT_ID,
                    client_secret: process.env.DISCORD_CLIENT_SECRET,
                    token: user.accessToken,
                    token_type_hint: "access_token"
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            )
            if(revocationCode.status === 200){
                res.send({message: "Usuário desconectado"})
            }
            else {
                res.send({message: "Algo deu errado"})
            }
        }
        else{
            res.send({message: "Usuário não encontrado"})
        }
    });
}