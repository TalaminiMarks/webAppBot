import 'dotenv/config'
import { FastifyInstance } from "fastify";
import z from "zod"
import axios from 'axios';
import { prisma } from '../utils/prisma';

interface userResponseInfo {
    id: string;
    username: string;
    avatar: string;
    global_name: string;
    email: string;
}

export default async function route(fastify: FastifyInstance){
    fastify.post("/login/discord", async (req, res)=>{
        const bodySchema = z.object({
            code: z.string()
        })

        const { code } = bodySchema.parse(req.body)

        const tokenResponse = await axios.post(
            "https://discord.com/api/oauth2/token", 
            {
                client_id: process.env.DISCORD_CLIENT_ID,
                client_secret: process.env.DISCORD_CLIENT_SECRET,
                grant_type: "authorization_code",
                code,
                redirect_uri: process.env.DIRCORD_REDIRECT_URL
            }, 
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        )

        const { access_token } = tokenResponse.data

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
                    email: email,
                    accessToken: access_token
                }
            })
        }
        else {
            await prisma.user.update({
                where: {
                    discordId: id
                },
                data: {
                    accessToken: access_token,
                    username: username,
                    globalName: global_name,
                    avatar: avatar
                }
            })
        }

        const token = fastify.jwt.sign(
        {
            name: global_name,
            avatar: avatar
        }, 
        { 
            sub: id,
            expiresIn: '7d',
        })

        res.send({ token });
    })
}