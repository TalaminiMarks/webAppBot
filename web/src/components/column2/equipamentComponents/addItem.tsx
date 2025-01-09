"use client"

import { useRef } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddItem(){
    const modalRef = useRef<HTMLDivElement>(null);
    const firstInputRef = useRef<HTMLInputElement>(null);
    
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
                <button className="absolute top-0 right-0 h-10 w-10 m-4 bg-black text-white hover:bg-white hover:text-black transition rounded" onClick={closeModal}>X</button>
                <div className="w-1/2 h-1/2 bg-blue-300">
                    <input type="text" ref={firstInputRef}/>
                </div>
            </div>
        </>
    )
}