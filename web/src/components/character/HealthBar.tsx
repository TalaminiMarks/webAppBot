"use client"

import { useState } from "react";
import { MinusBtn, PlusBtn } from "./geral/Buttons";

interface HealthBarProps {
    currentHealth: number;
    maxHealth: number;
}

export default function HealthBar({ currentHealth, maxHealth }: HealthBarProps){
    const [health, setHealth] = useState(currentHealth)

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
            <MinusBtn onClick={loseHealth} levelUp />
            <div className="relative bg-white w-full h-6 rounded-md">
                <span className="absolute w-full h-4 text-center z-10 text-black">{health} / {maxHealth}</span>
                <div className="absolute h-6 bg-red-500 rounded-md" style={{width: `${currentHealthPercent}%`}}></div>
            </div>
            <PlusBtn onClick={addHealth} levelUp />
        </div>
    )
}