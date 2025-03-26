"use client"

import { useRef, useState, useEffect, MouseEvent, KeyboardEvent, FormEvent } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"

import { api } from "@/utils/utils";
import { characterSkills, SkillsTable } from "@/utils/interfaces";
import { CloseBtn } from "./geral/Buttons";
import Skill from "./skillsComponents/Skill";

interface SkillsProps {
    characterId: string;
    characterSkills: characterSkills[]
    skills: SkillsTable[];
}

export default function Skills({ characterId, characterSkills, skills }: SkillsProps){
    const modalRef = useRef<HTMLDivElement>(null);
    const focusRef = useRef<HTMLButtonElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpenWindowAddSkill, setIsOpenWindowAddSkill] = useState(false);
    const [characterSkillsList, setCharacterSpellList] = useState(characterSkills);

    
    useEffect(()=>{
        if(isModalOpen){
            focusRef.current?.focus();
        }
    }, [isModalOpen])

    function openModal(){
        setIsModalOpen(true);
    }

    function closeModal(){
        setIsModalOpen(false);
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

    function stateWindowAddItem(){
        setIsOpenWindowAddSkill(!isOpenWindowAddSkill);
    }

    function handleFormData(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("characterId", characterId);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        api.post("/habilidades/adicionar", data).then(response => {
            if(response.status === 200){
                alert(response.data.message);
                setCharacterSpellList(prev => [...prev, response.data.spell])
                setIsOpenWindowAddSkill(false);
            }
            else{
                alert("Erro ao adicionar item");
            }
        })
    }

    return (
        <div>
            <button className="bg-neutral-400 rounded" onClick={openModal}>Habilidades</button>
            <div ref={modalRef} 
                className={`${isModalOpen ? "flex" : "hidden"} fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 justify-center items-center z-50`} 
                onClick={handleClickOutside} 
                onKeyDown={handleKeyDown} 
                aria-modal="true"
            >
                <div className="relative w-1/3 h-[90%] flex flex-col py-12 px-4 bg-yellow-200 overflow-y-auto">
                    <CloseBtn ref={focusRef} onClick={closeModal} />
                    <button className="w-full mb-2 shadow rounded-full bg-black text-white hover:bg-white hover:text-black transition" onClick={stateWindowAddItem}>
                        {
                            isOpenWindowAddSkill ? 
                            <div className="flex items-center justify-center gap-2">
                                <MinusIcon width={35} height={35}/>
                                <span>Fechar janela</span>
                            </div> : 
                            <div className="flex items-center justify-center gap-2">
                                <PlusIcon width={35} height={35}/>
                                <span>Adicionar habilidade</span>
                            </div>
                        }
                    </button>

                    <div className="relative w-full h-full flex flex-col flex-wrap gap-2 bg-purple-200">
                        {
                            characterSkillsList.map(skill => {
                                const filter = skills.filter(i => i.id === skill.skillsId);
                                return (
                                    <Skill 
                                        key={skill.id}
                                        id={skill.id}
                                        name={filter[0].name}
                                        description={filter[0].description}
                                        damage={filter[0].damage}
                                        typeDamage={filter[0].typeDamage}
                                        additionalDamage={skill.bonusDamage}
                                        additionalDescription={skill.additionalDescription}
                                        additionalTypeDamage={skill.typeBonusDamage}
                                    />
                                )
                            })
                        }

                        <div className={`${isOpenWindowAddSkill ? "flex" : "hidden"} flex-col absolute w-full`}>
                            <form className="w-full p-4 flex flex-col items-center gap-4 bg-blue-300" onSubmit={handleFormData}>
                                <h2>Adicionar uma Habilidade</h2>
                                <select name="skillId" id="skillId" className="w-full rounded p-2" defaultValue="#">
                                    <option disabled value="#">Selecione uma habilidade...</option>
                                    {
                                        skills.map(skill => {
                                            return (
                                                <option key={skill.id} value={skill.id}>{skill.name}</option>
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