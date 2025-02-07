import { NextRequest, NextResponse } from "next/server";
import { api } from "@/utils/utils";
import { cookies } from "next/headers";

export async function GET(req: NextRequest){
    const url = new URL("/", req.url);

    const token = req.cookies.get("token");
    const response = await api.post("/logout/discord", null, {
        headers: {
            Authorization: `Bearer ${token?.value}`
        },
    })

    if(response.status === 200){
        (await cookies()).delete("token")
        return NextResponse.redirect(url)
    }
    else {
        throw new Error("Algo deu errado ao desconectar")
    }
}