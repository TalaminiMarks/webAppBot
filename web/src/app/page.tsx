import Link from "next/link"

export default async function Home() {
    return (
        <div className="flex gap-2">
            <Link href="/personagem">Personagem</Link>
            <Link href="/api/auth/discord/logout">Logout</Link>
        </div>
    )
}
