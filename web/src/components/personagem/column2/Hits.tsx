import { api } from "@/utils/utils"
import { characterItens } from "@/utils/interfaces"

interface FieldProps extends HitsProps {
    numericPosition: number;
}

interface DataItemFieldProps {
    id: string;
    name: string;
    description: string;
}

function Field({numericPosition, characterItens}: FieldProps){
    return (
        <div className="w-full flex justify-between items-center gap-2">
            <select name={"weapon" + numericPosition} defaultValue={"#"} className="w-1/3">
                <option disabled value="#">Selecione</option>
                {
                    characterItens.map(async item => {
                        const { data }: { data: DataItemFieldProps } = await api.get(`/equipamentos/${item.itemsId}`)
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

interface HitsProps {
    characterItens: characterItens[];
}

export default function Hits({characterItens}: HitsProps){
    return (
        <div className="w-full p-2 flex flex-col bg-yellow-300 gap-2">
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex justify-between items-center gap-2">
                    <p className="w-1/3">Nome</p>
                    <p className="w-1/3 text-center">bonus</p>
                    <p className="w-1/3 text-center">dano/tipo</p>
                </div>
                <Field numericPosition={1} characterItens={characterItens}/>
                <Field numericPosition={2} characterItens={characterItens}/>
                <Field numericPosition={3} characterItens={characterItens}/>
            </div>
            <div>
                <textarea name="attackObs" id="attackObs" rows={10} className="resize-none w-full p-2"></textarea>
                <p className="w-full text-center uppercase">ataques e magias</p>
            </div>
        </div>
    )
}