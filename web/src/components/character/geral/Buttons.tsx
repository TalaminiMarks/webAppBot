"use client"

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid"
import { MouseEventHandler } from "react"

interface BtnProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    levelUp?: boolean;
}

const animation = "hover:bg-black hover:text-white transition-colors"

export function MinusBtn({ onClick, levelUp }: BtnProps){
    return (
        <button 
            onClick={onClick} 
            disabled={levelUp ? false : true} 
            className={`w-8 h-6 rounded-md flex justify-center items-center bg-zinc-300 ${animation}`}
        >
            <MinusIcon width={20} height={20} />
        </button>
    )
}

export function PlusBtn({ onClick, levelUp }: BtnProps){
    return (
        <button 
            onClick={onClick} 
            disabled={levelUp ? false : true} 
            className={`w-8 h-6 rounded-md flex justify-center items-center bg-zinc-300 ${animation}`}
        >
            <PlusIcon width={20} height={20} />
        </button>
    )
}