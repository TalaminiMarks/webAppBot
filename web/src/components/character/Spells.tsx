"use client"

import { useRef, useState, KeyboardEvent, MouseEvent } from "react"
import { CloseBtn } from "./geral/Buttons";

export default function Spells(){
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
                <div className="relative w-2/3 h-[70%] bg-yellow-200">
                    <CloseBtn onClick={closeModal} />

                </div>
            </div>
        </div>
    )
}