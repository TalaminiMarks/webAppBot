"use client"

import { useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"

interface SkillsProps {
    id: number | string;
    name: string;
    description: string;
    damage: string;
    typeDamage: string;
    additionalDescription: string;
    additionalDamage: string;
    additionalTypeDamage: string;
}

export default function Skill({ damage, description, id, name, typeDamage, additionalDamage, additionalDescription, additionalTypeDamage}: SkillsProps){
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    
    function descriptionVisible(){
        setIsDescriptionVisible(!isDescriptionVisible)
    }
    
    return (
        <div id={`${id}`} className="flex flex-col px-4 bg-blue-500 border-b border-r border-black">
            <button onClick={descriptionVisible} className="flex justify-between items-center py-2">
                <p>{name}</p>
                <span>{damage} - {typeDamage}</span>
                {isDescriptionVisible ? <ChevronLeftIcon width={30} height={30} /> : <ChevronDownIcon width={30} height={30} />}
            </button>
            <div className={`${isDescriptionVisible ? "h-full" : "h-0"} overflow-hidden transition-[height]`}>
                <div className="py-4 border-t border-black">
                    <p className="mb-2">{description}</p>
                    <div className={`${additionalDamage ? "block" : "hidden"}`}>
                        <p>{additionalDescription}</p>
                        <span>{additionalDamage} - {additionalTypeDamage}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}






    
