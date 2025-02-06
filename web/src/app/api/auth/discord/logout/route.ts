import { NextRequest, NextResponse } from "next/server";
import { api } from "@/utils/utils";

export async function GET(req: NextRequest){
    const url = new URL("/", req.url);

    const token = req.cookies.get("token");
    const response = await api.post("/logout/discord", {
        "Authorization": `Bearer ${token}`
    })

    alert(response.data.message)
    return NextResponse.redirect(url)

    // if(response.status === 200){
    //     req.cookies.delete("token");
    //     alert(response.data.message)
    //     return NextResponse.redirect(url)
    // }
    // else {
    //     alert(response.data.message)
    // }
}