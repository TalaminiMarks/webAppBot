import { api } from "@/utils/utils";
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)

    const code = searchParams.get("code");

    if (!code) throw new Error("Codigo não provido");

    const registerResponse = await api.post("/registrar/discord", {
        code
    })

    return new Response(registerResponse.data)

}