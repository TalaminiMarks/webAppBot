"use client"

import { useRef, useState } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import { api } from "@/utils/utils";
import { ItensTable } from "@/utils/interfaces";

interface ItemFieldProps extends ItensTable {
    bonusDamage?: string;
    typeBonusDamage?: string;
    additionalDescription?: string;
}

export default function ItemField({
    id, name, description, damage, typeDamage, additionalDescription, bonusDamage, typeBonusDamage
}: ItemFieldProps){
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const itemRef = useRef<HTMLDivElement>(null);

    function handleMouseEnter(){
        setIsMouseEnter(true)
    }


    function handleMouseLeave(){
        setIsMouseEnter(false)
    }

    async function deleteRecord(){
        if(itemRef.current !== null){
            const { data } = await api.delete(`/equipamentos/deletar/${id}`);
            alert(data.message);
            itemRef.current.remove();
        }
    }
    return (
        <div className="relative w-full p-2 flex justify-between items-center" ref={itemRef}>
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</span>
            <button className="w-6 h-6 rounded bg-black text-white hover:bg-white hover:text-black transition" onClick={deleteRecord}>
                <MinusIcon />
            </button>
            <div className={`${isMouseEnter ? "block" : "hidden"} absolute right-1/4 w-[50%] rounded-xl p-2 bg-blue-400 z-10`}>
                <p>{description}</p>
                <p className={`${additionalDescription ? "block" : "hidden"} mb-2`}>{additionalDescription}</p>
                <p>Dano: {damage} - {typeDamage}</p>
                <p className={`${bonusDamage && typeBonusDamage ? "block" : "hidden"}`}>Dano Bônus: {bonusDamage} - {typeBonusDamage}</p>
            </div>
        </div>
    )
}