"use client"

import { useState, useEffect } from "react";

import { api, getModAttr } from "@/utils/utils";
import { characterAttributes, characterExpertise, Attribute, Expertise } from "@/utils/interfaces";
import AttrField from "./characterStatsComponents/AttrField";
import { MinusBtn, PlusBtn } from "./geral/Buttons";
import ExptField from "./characterStatsComponents/ExptField";

interface originalValues {
    id: number;
    value: number;
}

interface CharacterStatsProps {
    characterAttributes: characterAttributes[];
    characterExpertise: characterExpertise[];
    attributes: Attribute[];
    expertise: Expertise[];
    proficiency: number;
    initiative: number;
    inspiration: number;
    perception: number;
    armor: number;
    originalValues: originalValues[];
}

export default function CharacterStats({ 
    characterAttributes, characterExpertise, attributes, expertise, initiative, inspiration, perception, proficiency, armor, originalValues
}: CharacterStatsProps){

    const [characterAttributesList, setCharacterAttributesList] = useState(characterAttributes);
    const [characterExpertiseList, setCharacterExpertiseList] = useState(characterExpertise);
    const [levelUpData, setLevelUpData] = useState(false);
    
    function checkOriginalValue(target: characterAttributes){
        const originalValue = originalValues.find(v => v.id === target.attributesId);
        if(originalValue?.value === target.value){
            return false
        }
        else{
            return true
        }
    }

    // function updateModAttribute(attribute: characterAttributes){
    //     const expertiseFilter = expertise.filter(i => i.attributesId === attribute.attributesId)
    //     for(let i = 0; i < expertiseFilter.length; i++){
    //         const { id } = expertiseFilter[i]
    //         const target = characterExpertiseList.find(i => i.expertiseId === id);
    //         if (!target) throw new Error("Erro em atualizar o valor da pericia");
    //         target.value = attribute.modValue;
    //         setCharacterExpertiseList(prev => {
    //             const filter = prev.filter(i => i.expertiseId !== id)
    //             return [...filter, target]
    //         })

    //     }
    // }

    function addPoint(key: number){
        const target = characterAttributesList.find(v => v.attributesId === key)
        if(!target){
            throw new Error("Something go wrong")
        }
        if(target.value < 30){
            target.value++
        }
        setCharacterAttributesList(prev => {
            const filter = prev.filter((v)=> v.attributesId !== key)
            return [...filter, target]
        })
    }

    function removePoint(key: number){
        const target = characterAttributesList.find(v => v.attributesId === key)
        if(!target){
            throw new Error("Something go wrong")
        }
        if(checkOriginalValue(target)){
            target.value--
        }
        setCharacterAttributesList(prev => {
            const filter = prev.filter((v)=> v.attributesId !== key)
            return [...filter, target]
        })
    }

    function confirmUpdate(){
        setLevelUpData(true)
    }

    return (
        <div className="w-full h-full px-12 py-8 flex flex-col items-center bg-red-400 gap-10">
            <div className="flex justify-center items-center gap-4">
                <SquareField name="armadura" value={armor}/>
                <SquareField name="iniciativa" value={initiative}/>
                <SquareField name="proficiencia" value={proficiency}/>
                <SquareField name="inspiração" value={inspiration}/>
                <SquareField name="percepção" value={perception}/>
            </div>
            <div className="w-full flex justify-center items-center gap-24">
                <div className="grid grid-cols-2 gap-16">
                    {
                        attributes.map(attr => {
                            const filter = characterAttributesList.find(v => v.attributesId === attr.id);
                            if (!filter) throw new Error("Erro nos attributos");
                            return(
                                <div key={attr.id} className="flex items-center gap-2">
                                    <MinusBtn onClick={() => removePoint(attr.id)} levelUp/>
                                    <AttrField attribute={attr.name} value={filter.value} modValue={filter.modValue}/>
                                    <PlusBtn onClick={() => addPoint(attr.id)} levelUp/>
                                </div>
                            )
                        })
                    }
                    <div className="w-full flex justify-center items-center col-span-2">
                        <button onClick={confirmUpdate} className="px-4 py-2 bg-blue-500">Salvar</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        expertise.map(expertise => {
                            const filter = characterExpertiseList.find(v => v.expertiseId === expertise.id);
                            if(!filter) throw new Error("Erro nas pericias");
                            return (
                                <ExptField key={expertise.id} id={`${expertise.id}`} expertise={expertise.name} value={filter.value}/>
                            )
                        })
                    }
                </div>
            </div>            
        </div>
    )
}

interface SquareFieldProps {
    name: string
    value: number;
}

function SquareField({ name, value }: SquareFieldProps){
    return (
        <div className="flex flex-col justify-center items-center bg-stone-200 p-4">
            <p className="capitalize">{name}:</p>
            <p className="text-xl">{value}</p>
        </div>
    )
}