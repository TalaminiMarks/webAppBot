"use client"

import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

export default function HealthBar(){
    const [health, setHealth] = useState(50)

    const maxHealth = 100;
    const currentHealthPercent = (health * 100) / maxHealth

    function addHealth(){
        if(health < maxHealth){
            setHealth(val => val + 1);
        }
    }

    function loseHealth(){
        if(health > 0){
            setHealth(val => val - 1);
        }
    }

    return (
        <div className="py-2 px-4 w-full flex justify-between items-center gap-4 bg-purple-400">
            <button onClick={loseHealth} className="w-10 h-6 rounded-md flex justify-center items-center bg-zinc-300">
                <MinusIcon width={20} height={20} />
            </button>
            <div className="relative bg-white w-full h-6 rounded-md">
                <span className="absolute w-full h-4 text-center z-10 text-black">{health} / {maxHealth}</span>
                <div className="absolute h-6 bg-red-500 rounded-md" style={{width: `${currentHealthPercent}%`}}>
                </div>
            </div>
            <button onClick={addHealth} className="w-10 h-6 rounded-md flex justify-center items-center bg-zinc-300">
                <PlusIcon width={20} height={20} />
            </button>
        </div>
    )
}