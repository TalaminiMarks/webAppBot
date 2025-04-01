import Image from "next/image"
import discIconWhite from "@/app/login/assets/disc-icon-white.svg"

export default function DiscordBtn(){
    return (
        <a 
            href="http://localhost:3000/api/auth/discord/login"
            className="p-4 flex justify-center items-center gap-4 bg-disc rounded-xl hover:bg-[#414ff0] hover:scale-105 transition-all"
        >
            <Image src={discIconWhite} alt="Discord Icon" width={30} />
            <span className="text-white text-lg">Logar com o discord</span>
        </a>
    )
}