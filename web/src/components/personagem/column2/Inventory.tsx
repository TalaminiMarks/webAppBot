import { api } from "@/utils/utils";
import { characterItens, ItensTable } from "@/utils/interfaces";
import Backpack from "./inventoryComponents/Backpack";
import Equipaments from "./inventoryComponents/Equipaments";

interface InventoryProps {
    characterId: string;
    gold: number;
    characterItens: characterItens[];
}

export default async function Inventory({characterId, gold, characterItens}: InventoryProps){
    const { data } = await api.get("/equipamentos");
    const itens: ItensTable[] = data;

    return (
        <div className="w-full flex flex-col p-2 bg-purple-300 gap-2">
            <div className="w-full flex flex-col gap-2">
                <Equipaments />                
                <Backpack characterId={characterId} characterItens={characterItens} itens={itens}/>
            </div>
            <span className="w-full text-center uppercase">Inventário</span>
        </div>
    )
}