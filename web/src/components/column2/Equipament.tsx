import { api } from "@/utils/utils"
import ItemField from "@/components/column2/equipamentComponents/ItemField";
import AddItem from "./equipamentComponents/addItem";
import { EquipamentsInfo, EquipamentsFieldProps, EquipamentProps, DataItemFieldProps } from "@/utils/types";


function Field({name, value}: EquipamentsFieldProps){
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

export default async function Equipament({gold, CharacterItens}: EquipamentProps){
    const { data } = await api.get("/equipamentos");
    const equipaments: EquipamentsInfo[] = data;
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
                            const { data }: { data: DataItemFieldProps } = await api.get(`/equipamentos/${item.itemsId}`);
                            return(
                                <ItemField key={item.id} id={item.id} description={data.description} name={data.name}/>
                            )
                        })
                    }
                    <AddItem>
                        {
                            equipaments.map(equipament => {
                                return (
                                    <option key={equipament.id} value={equipament.id}>{equipament.name}</option>
                                )
                            })
                        }
                    </AddItem>
                </div>
            </div>
            <span className="w-full text-center uppercase">equipamento</span>
        </div>
    )
}