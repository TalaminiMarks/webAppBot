"use client"

import { useRef, useState, KeyboardEvent, MouseEvent } from "react"
import { CloseBtn } from "./geral/Buttons";
import { characterSpells, SpellsTable } from "@/utils/interfaces";
import Spell from "./spellsComponents/Spell";

interface SpellsProps {
    characterSpells: characterSpells[];
    spells: SpellsTable[]
}

export default function Spells({ characterSpells, spells }: SpellsProps){
    const modalRef = useRef<HTMLDivElement>(null)
    const focusInputRef = useRef<HTMLInputElement>(null)

    const [isOpenModal, setIsOpenModal] = useState(false)

    function openModal(){
        setIsOpenModal(true);
    }

    function closeModal(){
        setIsOpenModal(false);
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

    function handleMouseEnter(){
        focusInputRef.current?.focus()
    }

    return(
        <div>
            <button className="rounded bg-zinc-500" onClick={openModal}>Magias</button>
            <div ref={modalRef} 
                className={`${isOpenModal ? "flex" : "hidden"} justify-center items-center fixed top-0 left-0 w-full h-full bg-opacity-70 bg-black z-50`} 
                onClick={handleClickOutside} 
                onKeyDown={handleKeyDown} 
                onMouseEnter={handleMouseEnter}
            >
                <input ref={focusInputRef} className="sr-only" />
                <div className="relative w-1/3 h-[90%] py-12 px-4 bg-yellow-200 overflow-y-auto">
                    <CloseBtn onClick={closeModal} />
                    <div className="w-full h-full flex flex-col flex-wrap gap-2 bg-purple-300">
                        {
                            characterSpells.map(spell => {
                                const filter = spells.filter(i => i.id === spell.spellsId)
                                return (
                                    <Spell 
                                        key={spell.id} 
                                        id={spell.id} 
                                        name={filter[0].name} 
                                        description={filter[0].description} 
                                        damage={filter[0].damage} 
                                        typeDamage={filter[0].typeDamage}
                                        additionalDamage={spell.bonusDamage}
                                        additionalDescription={spell.additionalDescription}
                                        additionalTypeDamage={spell.typeBonusDamage}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}