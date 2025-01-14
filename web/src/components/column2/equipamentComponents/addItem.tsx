"use client"

import { useRef } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";


export default function AddItem({children}: {children: React.ReactNode}){
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

    function handleClickOutside(event: React.MouseEvent<HTMLDivElement>){
        if (event.target === modalRef.current) {
            closeModal();
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>){
        if (event.key === "Escape"){
            closeModal();
        }
    }
    
    return (
        <>
            <button className="w-8 shadow rounded-full bg-black text-white hover:bg-white hover:text-black transition" onClick={openModal}>
                <PlusIcon />
            </button>
            <div ref={modalRef} className="fixed top-0 left-0 w-full h-full hidden bg-black bg-opacity-50 justify-center items-center z-50" onClick={handleClickOutside} onKeyDown={handleKeyDown} aria-modal="true">
                <button className="absolute top-1/4 right-1/4 my-2 mx-4 h-10 w-10 bg-black text-white hover:bg-white hover:text-black transition rounded" onClick={closeModal}>X</button>
                <form className="w-1/2 h-1/2 p-4 flex flex-col items-center gap-4 bg-blue-300">
                    <h2>Adicionar um item no inventário</h2>
                    <select name="itens" id="itens" className="w-full rounded p-2" ref={firstInputRef} defaultValue="#">
                        <option disabled value="#">Selecione um item</option>
                        {children}
                    </select>
                    <div className="flex flex-col">
                        <label htmlFor="damage">Dano da arma</label>
                        <input type="text" name="damage" id="damage" />
                    </div>
                </form>
            </div>
        </>
    )
}