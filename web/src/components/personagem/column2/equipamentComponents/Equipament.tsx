"use client"

import { useRef, useState, useEffect, MouseEvent, KeyboardEvent, FormEvent } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

import { api } from "@/utils/utils";
import { ItensTable, characterItens } from "@/utils/interfaces";
import ItemField from "./ItemField";

interface EquipamentProps {
    characterItens: characterItens[];
    itens: ItensTable[];
}

export default function Equipament({characterItens, itens}: EquipamentProps ){
    const modalRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLSelectElement>(null);

    const [newItem, setNewItem] = useState<characterItens>({
        id: "", 
        itemsId: 0, 
        additionalDescription: "", 
        bonusDamage: "", 
        typeBonusDamage: "",
    });
    const [characterItensList, setCharacterItensList] = useState<characterItens[]>(characterItens);

    useEffect(()=>{
        if(newItem.id !== ""){
            setCharacterItensList(prev => [...prev, newItem]);
        }
    }, [newItem])
    
    function openModal(){
        if (modalRef.current !== null){
            modalRef.current.style.display = "flex";
            firstInputRef.current?.focus();
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

    function handleFormData(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("characterId", "123123");
        const data = Object.fromEntries(formData.entries());
        api.post("adicionar-item", data).then(response => {
            if(response.status === 200){
                alert(response.data.message);
                setNewItem(response.data.item);
                closeModal();
            }
            else{
                alert("Erro ao adicionar item");
            }
        })
    }

    
    return (

        <div className="w-3/4 h-72 p-2 flex flex-col items-center gap-2 bg-slate-400 overflow-auto">
            {
                characterItensList.map(item => {
                    const filter = itens.filter(i => i.id === item.itemsId)
                    return (
                        <ItemField 
                            id={item.id} 
                            key={item.id} 
                            name={filter[0].name} 
                            description={filter[0].description}
                            damage={filter[0].damage}
                            typeDamage={filter[0].typeDamage}
                            additionalDescription={item.additionalDescription}
                            bonusDamage={item.bonusDamage}
                            typeBonusDamage={item.typeBonusDamage}
                        />
                    )
                })
            }
            
            <button className="w-8 shadow rounded-full bg-black text-white hover:bg-white hover:text-black transition" onClick={openModal}>
                <PlusIcon />
            </button>
            <div ref={modalRef} className="fixed top-0 left-0 w-full h-full hidden bg-black bg-opacity-50 justify-center items-center z-50" onClick={handleClickOutside} onKeyDown={handleKeyDown} aria-modal="true">
                <button className="absolute top-1/4 right-1/4 my-2 mx-4 h-10 w-10 bg-black text-white hover:bg-white hover:text-black transition rounded" onClick={closeModal}>X</button>
                <form className="w-1/2 h-1/2 p-4 flex flex-col items-center gap-4 bg-blue-300" onSubmit={handleFormData}>
                    <h2>Adicionar um item no inventário</h2>
                    <select name="itemId" id="itemId" className="w-full rounded p-2" ref={firstInputRef} defaultValue="#">
                        <option disabled value="#">Selecione um item...</option>
                        {
                            itens.map(item => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
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
                            <input type="text" name="bonusTypeDamage" id="bonusTypeDamage" />
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
    )
}