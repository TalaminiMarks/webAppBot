import { axiosInstance } from "@/utils/utils"
import { FieldProps, EquipamentProps, ItemFieldProps, DataItemFieldProps } from "./types";


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
        <div className="p-2 bg-pink-300">
            <span>{name}</span>
            <span>{description}</span>
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
                <div className="w-3/4 h-72 flex flex-col items-center bg-slate-400 overflow-auto">
                    {
                        CharacterItens.map(async item => {
                            const { data }: { data: DataItemFieldProps } = await axiosInstance.get(`/equipamentos/${item.itemsId}`);
                            return(
                                <ItemField key={data.id} description={data.description} name={data.name}/>
                            )
                        })
                    }
                </div>
            </div>
            <span className="w-full text-center uppercase">equipamento</span>
        </div>
    )
}