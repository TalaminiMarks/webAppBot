import { NextRequest, NextResponse } from "next/server";
import { api } from "@/utils/utils";

export async function GET(req: NextRequest){
    const url = new URL("/login", req.url);

    const token = req.cookies.get("token");
    const response = await api.post("/logout/discord", null, {
        headers: {
            Authorization: `Bearer ${token?.value}`
        },
    })

    if(response.status === 200){
        return NextResponse.redirect(url, {
            headers: {
                'set-cookie': 'token=; Path=/; HttpOnly; max-age:0'
            }
        })
    }
    else {
        throw new Error("Algo deu errado ao desconectar")
    }
}