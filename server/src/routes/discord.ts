import 'dotenv/config'
import { FastifyInstance } from "fastify";
import z from "zod"
import axios from 'axios';
import { prisma } from '../utils/prisma';

// Pensar em como fazer um state
const state = "algumacoisasecretaqueeunicopracadasessao"

interface userResponseInfo {
    id: string;
    username: string;
    avatar: string;
    global_name: string;
    email: string;
}

export default async function route(fastify: FastifyInstance){
    fastify.post("/registrar/discord", async (req, res)=>{
        const bodySchema = z.object({
            code: z.string()
        })

        const { code } = bodySchema.parse(req.body)

        if (process.env.DISCORD_CLIENT_ID !== undefined && 
            process.env.DISCORD_CLIENT_SECRET !== undefined && 
            process.env.DIRCORD_REDIRECT_URL !== undefined){
            const params = new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID,
                client_secret: process.env.DISCORD_CLIENT_SECRET,
                grant_type: "authorization_code",
                code,
                redirect_uri: process.env.DIRCORD_REDIRECT_URL
            })

            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
    
            const tokenResponse = await axios.post(
                "https://discord.com/api/oauth2/token", 
                params, 
                {
                    headers
                }
            )

            const {access_token, refresh_token} = tokenResponse.data

            const userResponse = await axios.get(
                "https://discord.com/api/users/@me",
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    }
                });
            
            const { id, username, avatar, global_name, email }: userResponseInfo = userResponse.data

            const userExists = await prisma.user.findUnique({
                where: {
                    discordId: id
                }
            })

            if (!userExists) {
                await prisma.user.create({
                    data: {
                        discordId: id,
                        avatar: avatar,
                        globalName: global_name,
                        username: username,
                        email: email
                    }
                })
            }

            const token = fastify.jwt.sign(
            {
                name: global_name
            }, 
            { 
                sub: id,
                expiresIn: '1h',
            })

            res.send({token});
        }
    })
}