import Link from "next/link"

export default async function Home() {
    return (
        <div>
            <Link href="/api/auth/discord/logout">Logout</Link>
        </div>
    )
}
