import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    const singInURL = "http://localhost:3000/login";

    const token = req.cookies.get("token")?.value

    if(!token) {
        return NextResponse.redirect(singInURL, {
                headers: {
                    "set-cookie": `redirectTo=${req.url}; Path=/; HttpOnly; max-age=60`
                }
            }
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/personagem', '/personagem/:path*']
}