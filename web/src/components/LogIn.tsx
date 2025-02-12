import Link from "next/link"

export default function LogIn(){
    return (
        <Link href={"/login"}>
            <div className="px-4 py-2 bg-red-400 rounded-xl">
                <span className="w-full text-center">LogIn</span>
            </div>
        </Link>
    )
}