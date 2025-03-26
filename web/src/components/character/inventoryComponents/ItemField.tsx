"use client"

import { useState, useEffect, MouseEventHandler } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";

import { api } from "@/utils/utils";
import { ItensTable } from "@/utils/interfaces";

interface ItemFieldProps extends ItensTable {
    bonusDamage?: string;
    typeBonusDamage?: string;
    additionalDescription?: string;
    equipped: boolean;
    handleDeleteRecord: MouseEventHandler<HTMLButtonElement>;
}

export default function ItemField({
    id, name, description, damage, typeDamage, additionalDescription, bonusDamage, typeBonusDamage, equipped, weight, equippable, handleDeleteRecord, type
}: ItemFieldProps){
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [isEquipped, setIsEquipped] = useState(equipped);
    const [isEquippedId, setIsEquippedId] = useState<string | number>();

    function handleMouseEnter(){
        setIsMouseEnter(true)
    }

    function handleMouseLeave(){
        setIsMouseEnter(false)
    }

    function handleEquipItem(){
        setIsEquipped(!isEquipped)
        setIsEquippedId(id)
    }

    useEffect(()=>{
        if(isEquippedId !== undefined){
            const query = new URLSearchParams({
                id: `${isEquippedId}`,
                equipped: `${isEquipped}`
            })
            api.put(`/equipamentos/atualizar?${query}`)
            .then(response => {
                alert(response.data.message)
            })
        }
    }, [isEquipped, isEquippedId])
    
    return (
        <div className="relative w-full p-2 flex justify-between items-center">
            <div className="flex items-center justify-center gap-4">
                <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</span>
                <div className="bg-red-400">
                    <span className={isEquipped ? "block" : "hidden"}>Equipado!</span>
                </div>
            </div>
            <div className="flex items-center gap-10">
                {
                    equippable ?
                    <button className="bg-blue-400 text-black w-32 h-8 rounded-3xl hover:bg-blue-700 hover:text-white transition-colors" onClick={handleEquipItem}>
                        {isEquipped ? "desequipar" : "equipar"}
                    </button> :
                    null
                }
                <button className="w-6 h-6 rounded bg-black text-white hover:bg-white hover:text-black transition" onClick={handleDeleteRecord}>
                    <MinusIcon />
                </button>
            </div>
            <div className={`${isMouseEnter ? "block" : "hidden"} absolute right-1/4 w-[50%] rounded-xl p-2 bg-blue-400 z-10`}>
                <p>{description}</p>
                <p className={`${additionalDescription ? "block" : "hidden"} mb-2`}>{additionalDescription}</p>
                <p>Dano: {damage} - {typeDamage}</p>
                <p className={`${bonusDamage && typeBonusDamage ? "block" : "hidden"}`}>Dano Bônus: {bonusDamage} - {typeBonusDamage}</p>
                <p>Peso: {weight}</p>
                <div className="flex justify-between items-center">
                    <p>Tipo: {type}</p>
                    <p className="font-bold">{equippable ? "Equipavel" : "Não Equipavel"}</p>
                </div>
            </div>
        </div>
    )
}