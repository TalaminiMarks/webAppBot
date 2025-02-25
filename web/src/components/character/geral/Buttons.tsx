"use client"

import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/20/solid"
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

export function CloseBtn({ onClick }: BtnProps){
    return (
        <button className="absolute top-0 right-0 h-10 w-10 bg-black text-white hover:bg-white hover:text-black transition rounded" onClick={onClick}>
            <XMarkIcon />
        </button>
    )
}