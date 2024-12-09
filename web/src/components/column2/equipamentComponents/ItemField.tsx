"use client"

import { useRef } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";

import { ItemFieldProps } from "../types";

export default function ItemField({name, description}: ItemFieldProps){
    const ref = useRef<HTMLDivElement>(null);

    function handleMouseEnter(){
        if(ref.current !== null){
            ref.current.style.display = "block";
        }
    }

    function handleMouseLeave(){
        if(ref.current !== null){
            ref.current.style.display = "none";
        }
    }
    return (
        <div className="w-full flex justify-between items-center p-2 relative">
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</span>
            <button className="w-6 h-6 rounded bg-black text-white hover:bg-white hover:text-black transition">
                <MinusIcon />
            </button>
            <div ref={ref} className="hidden absolute top-10 left-0 w-full rounded-xl p-2 bg-yellow-200 z-10">
                <span>{description}</span>
            </div>
        </div>
    )
}