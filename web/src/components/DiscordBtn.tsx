"use client"

import Image from "next/image"
import discIcon from "@/public/disc-icon.svg"

export default function DiscordBtn(){
    return (
        <button onClick={()=>{alert("funcionando")}}>
            <Image src={discIcon} alt="Discord Icon"/>
            <span>Logar com o discord</span>
        </button>
    )
}