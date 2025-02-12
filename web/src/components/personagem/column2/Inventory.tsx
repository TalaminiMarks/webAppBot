import { api } from "@/utils/utils"
import { characterItens, ItensTable } from "@/utils/interfaces"
import Equipaments from "./equipamentComponents/Equipament";

interface InventoryFieldProps {
    name: string;
    value?: number;
}

function Field({name, value}: InventoryFieldProps){
    return (
        <div className="w-full flex justify-between items-center pr-4">
            <span>{name}</span>
            <input 
                type="text" 
                name={name.toLowerCase()} 
                defaultValue={value}
                className="w-[70%] text-center py-1"
            />
        </div>
    )
}

interface InventoryProps {
    gold: number;
    characterItens: characterItens[];
}

export default async function Inventory({gold, characterItens}: InventoryProps){
    const { data } = await api.get("/equipamentos");
    const itens: ItensTable[] = data;

    return (
        <div className="w-full flex flex-col p-2 bg-purple-300 gap-2">
            <div className="w-full flex">
                <div className="w-1/4 flex flex-col gap-4 py-2">
                    <Field name="PC" />
                    <Field name="PP" />
                    <Field name="PE" />
                    <Field name="PO" value={gold}/>
                    <Field name="PL" />
                </div>
                
                <Equipaments characterItens={characterItens} itens={itens}/>
            </div>
            <span className="w-full text-center uppercase">Inventário</span>
        </div>
    )
}