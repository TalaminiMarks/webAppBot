import { api } from "@/utils/utils";
import { characterAttributes } from "@/utils/interfaces";
import AttrField from "./characterStatus/AttrField";

interface DataInfo {
    id: number;
    name: string;
    value: number;
}

interface AttributesProps {
    characterAttributes: characterAttributes[];
}

export default async function Attributes({ characterAttributes }: AttributesProps){
    const attributeData = await api.get("/atributos");
    const ATTRIBUTES: DataInfo[] = attributeData.data;
    return (
        <div className="w-full flex justify-center items-center gap-4">
            {
                ATTRIBUTES.map(attr => {
                    const filter = characterAttributes.find(i => i.attributesId === attr.id)
                    if (!filter) throw new Error("Erro nos atributos");
                    const value = filter.value
                    return (
                        <AttrField key={attr.id} attribute={attr.name} value={value} />
                    )
                })
            }
        </div>
    )
}