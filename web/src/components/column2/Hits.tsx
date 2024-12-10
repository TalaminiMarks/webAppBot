import { axiosInstance } from "@/utils/utils"
import { DataItemFieldProps } from "./types"

interface FieldProps extends HitsProps {
    numericPosition: number
}

function Field({numericPosition, CharacterItens}: FieldProps){
    return (
        <div className="w-full flex justify-between items-center gap-2">
            <select name={"weapon" + numericPosition} className="w-1/3">
                <option value="nada" selected></option>
                {
                    CharacterItens.map(async item => {
                        const { data }: { data: DataItemFieldProps } = await axiosInstance.get(`/equipamentos/${item.itemsId}`)
                        return(
                            <option key={data.id} value={data.name}>{data.name}</option>
                        )
                    })
                }
            </select>
            <input type="text" name={"bonus" + numericPosition} className="w-1/3"/>
            <input type="text" name={"type" + numericPosition} className="w-1/3"/>
        </div>
    )
}

interface HitsProps{
    CharacterItens: [{
        id: string,
        itemsId: number
    }]
}

export default function Hits({CharacterItens}: HitsProps){
    return (
        <div className="w-full p-2 flex flex-col bg-yellow-300 gap-2">
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between items-center gap-2">
                    <p className="w-1/3">Nome</p>
                    <p className="w-1/3 text-center">bonus</p>
                    <p className="w-1/3 text-center">dano/tipo</p>
                </div>
                <Field numericPosition={1} CharacterItens={CharacterItens}/>
                <Field numericPosition={2} CharacterItens={CharacterItens}/>
                <Field numericPosition={3} CharacterItens={CharacterItens}/>
            </div>
            <div>
                <textarea name="attackObs" id="attackObs" rows={10} className="resize-none w-full p-2"></textarea>
                <p className="w-full text-center uppercase">ataques e magias</p>
            </div>
        </div>
    )
}