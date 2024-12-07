import {axiosInstance} from "@/utils/utils"

import AttrField from "./column1/AttrField"
import SingleField from "./column1/SingleField"
import { Field, BoxWithText } from "./column1/BoxWithText" 
import TextAreaField from "./column3/TextAreaField"

interface Column1Props{
    languages: string,
    CharacterAttributes: [{
        id: string,
        attributesId: number,
        value: number
    }],
    CharacterExpertise: [{
        id: string,
        expertiseId: number,
        value: number
    }]
}

interface dataField {
    id: number,
    name: string,
}

export default async function Column1({languages, CharacterAttributes, CharacterExpertise}: Column1Props){
    const attributeData = await axiosInstance.get("/atributos");
    const ATTRIBUTES: dataField[] = attributeData.data;

    const expertiseData = await axiosInstance.get("/pericias");
    const EXPERTISE: dataField[] = expertiseData.data;

    return (
        <div className="w-full flex flex-col justify-center items-center px-8 gap-4">
            <div className="w-full flex">
                <div className="w-1/3 flex justify-between items-center flex-col">
                {
                    ATTRIBUTES.map(attr => {
                        const [{ value }] = CharacterAttributes.filter((i)=>{return i.attributesId === attr.id})
                        return (
                            <AttrField key={attr.id} attribute={attr.name} value={value}/>
                        )
                    })
                }
                </div>
                <div className="w-2/3 flex flex-col items-center gap-2">
                    <SingleField description="Inspiração" id="inspiration"/>
                    <SingleField description="Bônus de proeficiência" id="proeficienceBonus"/>
                    <BoxWithText description="Testes de Resistência">
                    {
                        ATTRIBUTES.map(attr => {
                            return (
                                <Field key={attr.id} attribute={attr.name}/>
                            )
                        })
                    }
                    </BoxWithText>
                    <BoxWithText description="perícias">
                    {
                        EXPERTISE.map(attr => {
                            const [{ value }] = CharacterExpertise.filter((i)=>{return i.expertiseId === attr.id})
                            return (
                                <Field key={attr.id} attribute={attr.name} value={value}/>
                            )
                        })
                    }
                    </BoxWithText>
                </div>
            </div>
            <SingleField description="sabedoria passiva (percepção)" id="perception"/>
            <TextAreaField description="idiomas e outras proficiências" id="languages" rows={10} defaultValue={languages}/>
        </div>
    )
}