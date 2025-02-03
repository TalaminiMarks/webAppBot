import { NextResponse } from "next/server"

export async function GET(){

    const url = `https://discord.com/oauth2/authorize?client_id=1291018256571695155&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds+email+guilds.members.read`

    return NextResponse.redirect(url);

}