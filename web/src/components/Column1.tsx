import AttrField from "./column1/AttrField"
import SingleField from "./column1/SingleField"
import { Field, BoxWithText } from "./column1/BoxWithText" 
import TextAreaField from "./column3/TextAreaField"

export default function Column1(){
    const ATTRIBUTES = ["força", "destreza", "constituição", "inteligencia", "sabedoria", "carisma"]
    const EXPERTISE = [
        "acrobacia", "arcanismo", "atletismo", "atuação", "blefar", "furtividade", "história", "intimidação", "intuição", "investigação", "lidar com animais", "medicina", "natureza", "percepção",
        "persuasão", "prestidigitação", "religião", "sobrevivência"
    ]
    return (
        <div className="w-full flex flex-col justify-center items-center px-8 gap-4">
            <div className="w-full flex">
                <div className="w-1/3 flex items-center flex-col gap-4 bg-yellow-200">
                {
                    ATTRIBUTES.map(attr => {
                        return (
                            <AttrField key={attr} attribute={attr}/>
                        )
                    })
                }
                </div>
                <div className="w-2/3 flex flex-col items-center bg-slate-200 gap-2">
                    <SingleField description="Inspiração"/>
                    <SingleField description="Bônus de proeficiência"/>
                    <BoxWithText description="Testes de Resistência">
                    {
                        ATTRIBUTES.map(attr => {
                            return (
                                <Field key={attr} attribute={attr}/>
                            )
                        })
                    }
                    </BoxWithText>
                    <BoxWithText description="perícias">
                    {
                        EXPERTISE.map(attr => {
                            return (
                                <Field key={attr} attribute={attr}/>
                            )
                        })
                    }
                    </BoxWithText>
                </div>
            </div>
            <SingleField description="sabedoria passiva (percepção)"/>
            <TextAreaField description="idiomas e outras proficiências" id="languages" rows={10}/>
        </div>
    )
}