"use client"

import { useState, useEffect } from "react";
import { getModAttr } from "@/utils/utils";
import { MinusBtn, PlusBtn } from "../geral/Buttons";

interface AttrFieldProps {
    attribute: string;
    value: number;
    levelUp: boolean;
}

export default function AttrField({ attribute, value, levelUp }: AttrFieldProps){
    const [attr, setAttr] = useState(value);
    const [modAttr, setModAttr] = useState(getModAttr(value))

    useEffect(()=>{
        setModAttr(getModAttr(attr))
    }, [attr])

    function addPoint(){
        if(attr < 30){
            setAttr(val => val + 1)
        }
    }

    function removePoint(){
        if(attr > value){
            setAttr(val => val - 1)
        }
    }

    return (
        <div className="w-44 p-2 flex justify-center items-center flex-col gap-4 bg-white">
            <div className="w-full">
                <p className="text-center text-lg font-bold uppercase">{attribute}</p>
            </div>
            <div className="w-full flex justify-between items-center">
                <MinusBtn onClick={removePoint} levelUp={levelUp} />
                <span className="bg-stone-300 px-4 py-2">{attr}</span>
                <PlusBtn onClick={addPoint} levelUp={levelUp} />
            </div>
            <div className="px-2 rounded-xl border-2 border-slate-400">
                <span>{modAttr > 0 ? "+" + modAttr : modAttr}</span>
            </div>
        </div>
    )
}