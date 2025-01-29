import 'dotenv/config'
import { FastifyInstance } from "fastify";
import z from "zod"
import axios from 'axios';

// Pensar em como fazer um state
const state = "algumacoisasecretaqueeunicopracadasessao"

export default async function route(fastify: FastifyInstance){
    fastify.get("/auth/discord/login", (req, res)=>{
        const url = `https://discord.com/oauth2/authorize?client_id=1291018256571695155&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3333%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds&state=${state}`

        res.redirect(url);
    })

    fastify.get("/auth/discord/callback", async (req, res)=>{
        const schema = z.object({
            code: z.string(),
            state: z.string()
        })

        const { code, state } = schema.parse(req.query)

        if (!code) throw new Error("Codigo não fornecido")
        if (state !== state) throw new Error("Estado invalido")

        if (process.env.DISCORD_CLIENT_ID !== undefined && process.env.DISCORD_CLIENT_SECRET !== undefined && process.env.DIRCORD_REDIRECT_URL !== undefined){
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
    
            const response = await axios.post(
                "https://discord.com/api/oauth2/token", 
                params, 
                {
                    headers
                }
            )

            const userResponse = await axios.get(
                "https://discord.com/api/users/@me",
                {
                    headers: {
                        Authorization: `Bearer ${response.data.access_token}`,
                        ...headers
                    }
                });
            
            res.send(userResponse.data)
        }
        
    })
}