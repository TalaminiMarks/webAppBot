"use client"

import { useEffect, useRef, useState, KeyboardEvent, MouseEvent, FormEvent } from "react"
import { CloseBtn } from "./geral/Buttons";
import { characterSpells, SpellsTable } from "@/utils/interfaces";
import Spell from "./spellsComponents/Spell";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { api } from "@/utils/utils";

interface SpellsProps {
    characterSpells: characterSpells[];
    spells: SpellsTable[];
    characterId: string;
}

export default function Spells({ characterSpells, spells, characterId }: SpellsProps){
    const modalRef = useRef<HTMLDivElement>(null);
    const focusRef = useRef<HTMLButtonElement>(null);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenAddSpellWindow, setIsOpenAddSpellWindow] = useState(false);
    const [characterSpellList, setCharacterSpellList] = useState(characterSpells);
    const [newSpell, setNewSpell] = useState<characterSpells>()

    useEffect(()=>{
        if(newSpell !== undefined){
            setCharacterSpellList(prev => [...prev, newSpell])
        }
        if(isOpenModal === true){
            focusRef.current?.focus()
        }
    }, [newSpell, isOpenModal])

    function openModal(){
        setIsOpenModal(true);
    }

    function closeModal(){
        setIsOpenModal(false);
    }

    function stateAddSpellWindow(){
        setIsOpenAddSpellWindow(!isOpenAddSpellWindow);
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

    function handleFormData(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("characterId", characterId);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        api.post("/magias/adicionar", data).then(response => {
            if(response.status === 200){
                alert(response.data.message);
                setNewSpell(response.data.spell);
                setIsOpenAddSpellWindow(false);
            }
            else{
                alert("Erro ao adicionar item");
            }
        })
    }

    return(
        <div>
            <button className="rounded bg-zinc-500" onClick={openModal}>Magias</button>
            <div ref={modalRef} 
                className={`${isOpenModal ? "flex" : "hidden"} justify-center items-center fixed top-0 left-0 w-full h-full bg-opacity-70 bg-black z-50`} 
                onClick={handleClickOutside} 
                onKeyDown={handleKeyDown} 
            >
                <div className="relative w-1/3 h-[90%] flex flex-col py-12 px-4 bg-yellow-200 overflow-y-auto">
                    <CloseBtn ref={focusRef} onClick={closeModal} />
                    <button className="relative w-full mb-2 shadow rounded-full bg-black text-white hover:bg-white hover:text-black transition" onClick={stateAddSpellWindow}>
                        {isOpenAddSpellWindow ? 
                        <div className="flex items-center justify-center gap-2">
                            <MinusIcon width={35} height={35}/>
                            <span>Fechar janela</span>
                        </div> : 
                        <div className="flex items-center justify-center gap-2">
                            <PlusIcon width={35} height={35}/>
                            <span>Adicionar magia</span>
                        </div>}
                    </button>

                    

                    <div className="relative w-full h-full flex flex-col flex-wrap gap-2 bg-purple-300">
                        {
                            characterSpellList.map(spell => {
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

                        <div className={`${isOpenAddSpellWindow ? "flex" : "hidden"} flex-col absolute w-full`}>
                            <form className="w-full p-4 flex flex-col items-center gap-4 bg-blue-300" onSubmit={handleFormData}>
                                <h2>Adicionar uma magia ao grimório</h2>
                                <select name="spellId" id="spellId" className="w-full rounded p-2" defaultValue="#">
                                    <option disabled value="#">Selecione uma magia...</option>
                                    {
                                        spells.map(spell => {
                                            return (
                                                <option key={spell.id} value={spell.id}>{spell.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="w-full flex justify-center items-center gap-4">
                                    <div className="w-1/4 flex flex-col">
                                        <label htmlFor="bonusDamage">Dano Bônus?</label>
                                        <input type="text" name="bonusDamage" id="bonusDamage" />
                                    </div>
                                    <div className="w-1/4 flex flex-col">
                                        <label htmlFor="bonusTypeDamage">Tipo do dano Bônus?</label>
                                        <input type="text" name="bonusTypeDamage" id="typeBonusDamage" />
                                    </div>
                                    <div className="w-1/4 flex flex-col">
                                        <label htmlFor="additionalDescription">Complementar descrição?</label>
                                        <input type="text" name="additionalDescription" id="additionalDescription" />
                                    </div>
                                </div>
                                
                                <button type="submit" className="bg-zinc-400 p-4">Adicionar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}