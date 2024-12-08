import { axiosInstance } from "@/utils/utils"
import { FieldProps, EquipamentProps, ItemFieldProps, DataItemFieldProps } from "./types";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";


function Field({name, value}: FieldProps){
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

function ItemField({name, description}: ItemFieldProps){
    return (
        <div className="w-full flex justify-between items-center p-2">
            <span>{name}</span>
            <a href="#" className="w-6 h-6 rounded bg-black text-white">
                <MinusIcon />
            </a>
            <span className="hidden">{description}</span>
        </div>
    )
}

export default function Equipament({gold, CharacterItens}: EquipamentProps){
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
                <div className="w-3/4 h-72 p-2 flex flex-col items-center gap-2 bg-slate-400 overflow-auto">
                    {
                        CharacterItens.map(async item => {
                            const { data }: { data: DataItemFieldProps } = await axiosInstance.get(`/equipamentos/${item.itemsId}`);
                            return(
                                <ItemField key={data.id} description={data.description} name={data.name}/>
                            )
                        })
                    }
                    <button className="w-8 shadow rounded-full bg-black text-white">
                        <PlusIcon/>
                    </button>
                </div>
            </div>
            <span className="w-full text-center uppercase">equipamento</span>
        </div>
    )
}