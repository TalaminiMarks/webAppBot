import Link from "next/link"
import { cookies } from "next/headers"

import LogOut from "@/components/LogOut"
import LogIn from "@/components/LogIn";

export default async function Home() {
    const token = (await cookies()).get("token");
    return (
        <div className="flex gap-2">
            <Link href="/personagem">Personagem</Link>
            {token ? <LogOut /> : <LogIn />}
        </div>
    )
}
