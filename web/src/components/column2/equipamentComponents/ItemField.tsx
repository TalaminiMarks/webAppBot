"use client"

import { useRef } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import { api } from "@/utils/utils";

import { ItemFieldProps } from "@/utils/types";

export default function ItemField({id, name, description}: ItemFieldProps){
    const descriptionRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    function handleMouseEnter(){
        if(descriptionRef.current !== null){
            descriptionRef.current.style.display = "block";
        }
    }

    function handleMouseLeave(){
        if(descriptionRef.current !== null){
            descriptionRef.current.style.display = "none";
        }
    }

    async function deleteRecord(){
        if(itemRef.current !== null){
            const { data } = await api.delete(`/deletar-item/${id}`);
            alert(data.message);
            itemRef.current.remove();
        }
    }
    return (
        <div className="w-full flex justify-between items-center p-2 relative" ref={itemRef}>
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{name}</span>
            <button className="w-6 h-6 rounded bg-black text-white hover:bg-white hover:text-black transition" onClick={deleteRecord}>
                <MinusIcon />
            </button>
            <div ref={descriptionRef} className="hidden absolute top-10 left-0 w-full rounded-xl p-2 bg-yellow-200 z-10">
                <span>{description}</span>
            </div>
        </div>
    )
}