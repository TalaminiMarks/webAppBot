"use client"

import { useRef, useState, useEffect, MouseEvent, KeyboardEvent, FormEvent, ChangeEvent } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"


import { api } from "@/utils/utils";
import { ItensTable, characterItens } from "@/utils/interfaces";
import Item from "./inventoryComponents/Item";
import { CloseBtn } from "./geral/Buttons";

interface BackpackProps {
    characterId: string;
    characterItens: characterItens[];
    itens: ItensTable[];
    money: {
        gold: number,
        silver: number,
        copper: number,
        electro: number,
        platinum: number
    }
    equipLoad: number;
}

export default function Backpack({characterId, characterItens, itens, money, equipLoad}: BackpackProps){
    const backpackModalRef = useRef<HTMLDivElement>(null);
    const focusRef = useRef<HTMLButtonElement>(null);

    const [isOpenBackpack, setIsOpenBackpack] = useState(false)
    const [isOpenWindowAddItem, setIsOpenWindowAddItem] = useState(false)
    const [characterItensList, setCharacterItensList] = useState<characterItens[]>(characterItens);

    useEffect(()=>{
        if(isOpenBackpack){
            focusRef.current?.focus();
        }
    }, [isOpenBackpack])
    
    function openBackpackModal(){
        setIsOpenBackpack(true)
    }
    function closeBackpackModal(){
        setIsOpenBackpack(false)
    }

    function stateWindowAddItem(){
        setIsOpenWindowAddItem(!isOpenWindowAddItem)
    }

    function handleClickOutside(event: MouseEvent<HTMLDivElement>){
        if (event.target === backpackModalRef.current) {
            closeBackpackModal();
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>){
        if (event.key === "Escape"){
            closeBackpackModal();
        }
    }

    function handleFormData(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("characterId", characterId);
        const data = Object.fromEntries(formData.entries());
        api.post("/equipamentos/adicionar", data).then(response => {
            if(response.status === 200){
                alert(response.data.message);
                setCharacterItensList(prev => [...prev, response.data.item])
                setIsOpenWindowAddItem(false);
            }
            else{
                alert("Erro ao adicionar item");
            }
        })
    }

    function getEquipamentsWeight(){
        let totalWeight = 0;
        characterItensList.map(item => {
            const filter = itens.find(v => v.id === item.itemsId)
            if(filter){
                totalWeight += filter.weight
            }
            else{
                console.log("algo deu errado")
            }
        })
        return totalWeight
    }

    async function deleteRecord(id: string | number){
        const { data } = await api.delete(`/equipamentos/deletar/${id}`);
        alert(data.message);
        setCharacterItensList(prev => {
            return prev.filter(item => item.id !== id)
        });
    }

    function handleSearchName(e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
    }

    function handleSearchType(e: ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
    }

    return (
        <div>
            <button className="bg-gray-400 rounded" onClick={openBackpackModal}>Mochila</button>
            <div ref={backpackModalRef} 
                className={`${isOpenBackpack ? "flex" : "hidden"} fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 justify-center items-center z-50`} 
                onClick={handleClickOutside} 
                onKeyDown={handleKeyDown} 
                aria-modal="true"
            >
                <div className="relative flex flex-col w-1/3 h-[90%] py-12 px-8 bg-yellow-300">
                    <CloseBtn ref={focusRef} onClick={closeBackpackModal} />
                    <div className="relative w-full max-h-[70%] h-[70%] flex flex-col items-center">
                        <button className="w-full mb-2 shadow rounded-full bg-black text-white hover:bg-white hover:text-black transition" onClick={stateWindowAddItem}>
                            {isOpenWindowAddItem ? 
                            <div className="flex items-center justify-center gap-2">
                                <MinusIcon width={35} height={35}/>
                                <span>Fechar janela</span>
                            </div> : 
                            <div className="flex items-center justify-center gap-2">
                                <PlusIcon width={35} height={35}/>
                                <span>Adicionar item</span>
                            </div>}
                        </button>
                        <div className="w-full h-full flex flex-col items-center gap-2 bg-slate-400 overflow-y-auto">
                            <div className="w-full flex flex-col justify-center items-center bg-stone-300 py-2">
                                <span>Pesquisar Item</span>
                                <form className="flex w-full justify-between items-center px-2">
                                    <div className="flex justify-center items-center gap-1">
                                        <label htmlFor="item-name">Nome:</label>
                                        <input id="item-name" name="item-name" type="text" onChange={handleSearchName} className="px-2" />
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <label htmlFor="type">Tipo:</label>
                                        <input id="type" name="type" type="text" onChange={handleSearchType} className="px-2" />
                                    </div>
                                </form>
                            </div>
                            {
                                characterItensList.map(item => {
                                    const filter = itens.filter(i => i.id === item.itemsId)
                                    return (
                                        <Item 
                                            id={item.id} 
                                            key={item.id} 
                                            name={filter[0].name} 
                                            description={filter[0].description}
                                            damage={filter[0].damage}
                                            typeDamage={filter[0].typeDamage}
                                            additionalDescription={item.additionalDescription}
                                            bonusDamage={item.bonusDamage}
                                            typeBonusDamage={item.typeBonusDamage}
                                            equipped={item.equipped}
                                            equippable={filter[0].equippable}
                                            weight={filter[0].weight}
                                            handleDeleteRecord={()=>{deleteRecord(item.id)}}
                                            type={filter[0].type}
                                        />
                                    )
                                })
                            }
                        </div>
                        
                        <div className={`${isOpenWindowAddItem ? "block" : "hidden"} absolute w-full top-10 bg-purple-300 z-99`}>
                            <form className="w-full p-4 flex flex-col items-center gap-4 bg-blue-300" onSubmit={handleFormData}>
                                <h2>Adicionar um item no inventário</h2>
                                <select name="itemId" id="itemId" className="w-full rounded p-2" defaultValue="#">
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
                    <div className="w-full flex justify-between items-center mt-14">
                        <div className="w-full flex flex-col justify-center items-center">
                            <p>Cobre: {money.copper}</p>
                            <p>Silver: {money.silver}</p>
                            <p>Ouro: {money.gold}</p>
                            <p>Electro: {money.electro}</p>
                            <p>Platina: {money.platinum}</p>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <p>Capacidade de carga:</p>
                            <span>{getEquipamentsWeight()}/{equipLoad}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
