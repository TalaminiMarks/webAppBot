"use client"

import { api } from "@/utils/utils";

import { useRef, MouseEvent, KeyboardEvent, FormEvent } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

interface EquipamentsProps {
    id: number;
    name: string;
    description: string;
}

export default function AddItem({equipaments}: {equipaments: EquipamentsProps[]}){
    const modalRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLSelectElement>(null);
    
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

    async function handleFormData(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("characterId", "123123");
        const data = Object.fromEntries(formData);
        console.log(data);

        try {
            const res = await api.post("/adicionar-item", data);
            if(res.status === 200){
                alert("Item adicionado com sucesso");
                closeModal();
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <>
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
                            equipaments.map(equipament => {
                                return (
                                    <option key={equipament.id} value={equipament.id}>{equipament.name}</option>
                                )
                            })
                        }
                    </select>
                    <div className="w-full flex justify-center items-center gap-4">
                        <div className="w-1/4 flex flex-col">
                            <label htmlFor="damage">Dano da arma:</label>
                            <input type="text" name="damage" id="damage" />
                        </div>
                        <div className="w-1/4 flex flex-col">
                            <label htmlFor="typeDamage">Tipo do dano</label>
                            <input type="text" name="typeDamage" id="typeDamage" />
                        </div>
                        <div className="w-1/4 flex flex-col">
                            <label htmlFor="bonusDamage">Dano bônus?</label>
                            <input type="text" name="bonusDamage" id="bonusDamage" />
                        </div>
                        {/* <div className="w-1/4 flex flex-col">
                            <label htmlFor="damage">Tipo do bônus?</label>
                            <input type="text" name="damage" id="damage" />
                        </div> */}
                    </div>
                    
                    <button type="submit" className="bg-zinc-400 p-4">Adicionar</button>
                </form>
            </div>
        </>
    )
}