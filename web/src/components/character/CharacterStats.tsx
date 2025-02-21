"use client"

import { useState, useRef, MouseEvent, KeyboardEvent, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid"

import { api, getModAttr } from "@/utils/utils";
import { characterAttributes, characterExpertise, Attribute, Expertise } from "@/utils/interfaces";
import AttrField from "./characterStatsComponents/AttrField";
import { MinusBtn, PlusBtn } from "./geral/Buttons";
import ExptField from "./characterStatsComponents/ExptField";

interface CharacterStatsProps {
    characterAttributes: characterAttributes[];
    characterExpertise: characterExpertise[];
    attributes: Attribute[];
    expertise: Expertise[];
    proficiency: number;
    initiative: number;
    inspiration: number;
    perception: number;
}

export default function CharacterStats({ 
    characterAttributes, characterExpertise, attributes, expertise, initiative, inspiration, perception, proficiency
}: CharacterStatsProps){
    const modalRef = useRef<HTMLDivElement>(null);
    const focusInputRef = useRef<HTMLInputElement>(null);

    const [originalValue, setOriginalValue] = useState(0);
    const [characterAttributesList, setCharacterAttributesList] = useState(characterAttributes)
    const [characterExpertiseList, setCharacterExpertiseList] = useState(characterExpertise)

    function checkFirstValue(target: characterAttributes, index: number){
        setOriginalValue(characterAttributes[index].value);
        if(target.value === originalValue){
            return false;
        }
        else{
            return true;
        }
    }

    function updateModAttribute(attribute: characterAttributes){
        const expertiseFilter = expertise.filter(i => i.attributesId === attribute.attributesId)
        for(let i = 0; i < expertiseFilter.length; i++){
            const { id } = expertiseFilter[i]
            const target = characterExpertiseList.find(i => i.expertiseId === id);
            if (!target) throw new Error("Erro em atualizar o valor da pericia");
            target.value = attribute.modValue;
            setCharacterExpertiseList(prev => {
                const filter = prev.filter(i => i.expertiseId !== id)
                return [...filter, target]
            })

        }
    }

    function addPoint(key: number){
        for(let i = 0; i < characterAttributesList.length; i++){
            if(characterAttributesList[i].attributesId === key){
                const target = characterAttributesList[i];
                if (target.value < 30){
                    target.value += 1;
                    target.modValue = getModAttr(target.value);
                    setCharacterAttributesList(prev => {
                        const filter = prev.filter(i => i.attributesId !== key)
                        return [...filter, target]
                    });
                    updateModAttribute(target);
                }
            }
        }            
    }

    function removePoint(key: number){
        for(let i = 0; i < characterAttributesList.length; i++){
            if(characterAttributesList[i].attributesId === key){
                const target = characterAttributesList[i];
                if (checkFirstValue(target, i)){
                    target.value += -1;
                    target.modValue = getModAttr(target.value);
                    setCharacterAttributesList(prev => {
                        const filter = prev.filter(i => i.attributesId !== key)
                        return [...filter, target]
                    });
                    updateModAttribute(target);
                }
            }
        }
    }

    function openModal(){
        if(modalRef.current !== null){
            modalRef.current.style.display = "flex";
            focusInputRef.current?.focus();
        }
    }

    function closeModal(){
        if (modalRef.current !== null){
            modalRef.current.style.display = "none";
        }
    }
    
    function handleClickOutside(event: MouseEvent<HTMLDivElement>){
        if (event.target === modalRef.current) {
            closeModal();
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>){
        if (event.key === "Escape"){
            closeModal();
        }
    }
    return (
        <div>
            <button className="px-4 py-2 bg-zinc-400 rounded-lg border-2 border-stone-500" onClick={openModal}>
                Stats
            </button>
            <div ref={modalRef} className="fixed top-0 left-0 w-full h-full hidden bg-black bg-opacity-50 justify-center items-center z-50" onClick={handleClickOutside} onKeyDown={handleKeyDown} aria-modal="true">
                <input type="text" className="sr-only" ref={focusInputRef}/>
                <div className="w-[95%] h-[95%] bg-red-400">
                    <button 
                        onClick={closeModal}
                        className="absolute top-6 right-12 h-10 w-10 flex justify-center items-center rounded bg-black text-white hover:bg-white hover:text-black transition"
                    >
                        <XMarkIcon width={32} height={32}/>
                    </button>
                    <div className="w-full h-full px-12 flex justify-center items-center gap-16 ">
                        <div className="flex flex-col gap-2">
                            {
                                attributes.map(attr => {
                                    const filter = characterAttributesList.find(i => i.attributesId === attr.id);
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
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                expertise.map(expertise => {
                                    const filter = characterExpertiseList.find(i => i.expertiseId === expertise.id);
                                    if(!filter) throw new Error("Erro nas pericias");
                                    return (
                                        <ExptField key={expertise.id} id={`${expertise.id}`} expertise={expertise.name} value={filter.value}/>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p>iniciativa: {initiative}</p>
                            <p>proficiencia bonus: {proficiency}</p>
                            <p>inspiração: {inspiration}</p>
                            <p>percepção: {perception}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}