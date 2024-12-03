import {axiosInstance} from "@/utils/utils"

import AttrField from "./column1/AttrField"
import SingleField from "./column1/SingleField"
import { Field, BoxWithText } from "./column1/BoxWithText" 
import TextAreaField from "./column3/TextAreaField"

interface dataField {
    id: number,
    name: string,
    CharacterAttributes: [{
        value: number
    }]
    CharacterExpertise: [{
        value: number
    }]
}

export default async function Column1({languages}: {languages: string}){
    const attributeData = await axiosInstance.get("/atributos");
    const ATTRIBUTES: dataField[] = attributeData.data;

    const expertiseData = await axiosInstance.get("/pericias");
    const EXPERTISE:dataField[] = expertiseData.data;

    return (
        <div className="w-full flex flex-col justify-center items-center px-8 gap-4">
            <div className="w-full flex">
                <div className="w-1/3 flex justify-between items-center flex-col">
                {
                    ATTRIBUTES.map(attr => {
                        return (
                            <AttrField key={attr.id} attribute={attr.name} value={attr.CharacterAttributes[0].value}/>
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
                            return (
                                <Field key={attr.id} attribute={attr.name} value={attr.CharacterExpertise[0].value}/>
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