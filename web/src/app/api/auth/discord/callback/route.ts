import { api } from "@/utils/utils";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)

    const code = searchParams.get("code");
    const redirectTo = req.cookies.get("redirectTo")?.value

    if (!code) throw new Error("Codigo não provido");

    const registerResponse = await api.post("/login/discord", {
        code
    })
    const { token } = registerResponse.data
    const tokenExpiresInSeconds = 60 * 60 * 24 * 7

    const redirectURL = redirectTo ?? new URL("/", req.url)

    return NextResponse.redirect(redirectURL, {
        headers: {
            "set-cookie": `token=${token}; Path=/; HttpOnly; max-age=${tokenExpiresInSeconds}`
        }
    })
}
