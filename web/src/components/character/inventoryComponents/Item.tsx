"use client"

import { useState, useEffect, MouseEventHandler } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid"

import { api } from "@/utils/utils";
import { ItensTable } from "@/utils/interfaces";

interface ItemProps extends ItensTable {
    bonusDamage?: string;
    typeBonusDamage?: string;
    additionalDescription?: string;
    equipped: boolean;
    handleDeleteRecord: MouseEventHandler<HTMLButtonElement>;
}

export default function Item({
    id, name, description, damage, typeDamage, additionalDescription, bonusDamage, typeBonusDamage, equipped, weight, equippable, handleDeleteRecord, type
}: ItemProps){
    const [isDescriptionVisible, setisDescriptionVisible] = useState(false);
    const [isEquipped, setIsEquipped] = useState(equipped);
    const [isEquippedId, setIsEquippedId] = useState<string | number>();

    function showDescription(){
        setisDescriptionVisible(!isDescriptionVisible)
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
        <div className="w-full px-2 flex flex-col bg-purple-400 border-b border-r border-black">
            <div className="w-full flex justify-between items-center py-4 px-2">
                <button className="w-10 h-6 mr-2 rounded bg-black text-white hover:bg-white hover:text-black transition" onClick={handleDeleteRecord}>
                    <MinusIcon />
                </button>
                <button className="w-full flex items-center justify-start gap-4" onClick={showDescription}>
                    <span>{name}</span>
                    <div className="bg-red-400">
                        {/* <span className={isEquipped ? "block" : "hidden"}>Equipado!</span> */}
                    </div>
                </button>
                <div className="flex items-center gap-4">
                    {
                        equippable ?
                        <button className="bg-blue-400 text-black w-32 h-8 rounded-3xl hover:bg-blue-700 hover:text-white transition-colors" onClick={handleEquipItem}>
                            {isEquipped ? "desequipar" : "equipar"}
                        </button> :
                        null
                    }
                    <button onClick={showDescription} className="px-4">
                        {isDescriptionVisible ? <ChevronLeftIcon width={30} height={30} /> : <ChevronDownIcon width={30} height={30} />}
                    </button>
                </div>
            </div>
            <div className={`${isDescriptionVisible ? "h-full" : "h-0"} w-full overflow-hidden transition-all`}>
                <div className="w-full p-2 border-t border-black">
                    <p>{description}</p>
                    <p className={`${additionalDescription ? "block" : "hidden"} mb-2`}>{additionalDescription}</p>
                    <p>Dano: {damage} - {typeDamage}</p>
                    <p className={`${bonusDamage && typeBonusDamage ? "block" : "hidden"}`}>Dano Bônus: {bonusDamage} - {typeBonusDamage}</p>
                    <p>Peso: {weight}</p>
                    <div className="flex justify-between items-center mb-2">
                        <p>Tipo: {type}</p>
                        <p className="font-bold">{equippable ? "Equipavel" : "Não Equipavel"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}