import Link from "next/link";

export default function LogOut(){
    return (
        <Link href={"/api/auth/discord/logout"}>
            <div className="px-4 py-2 bg-red-400 rounded-xl">
                <span className="w-full text-center">Logout</span>
            </div>
        </Link>
    )
}