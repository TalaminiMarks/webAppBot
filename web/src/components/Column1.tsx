import AttrField from "./column1/AttrField"
import SingleField from "./column1/SingleField"
import { Field, Status } from "./column1/Status" 

export default function Column1(){
    const ATTRIBUTES = ["força", "destreza", "constituição", "inteligencia", "sabedoria", "carisma"]
    const EXPERTISE = [
        "acrobacia", "arcanismo", "atletismo", "atuação", "blefar", "furtividade", "história", "intimidação", "intuição", "investigação", "lidar com animais", "medicina", "natureza", "percepção",
        "persuasão", "prestidigitação", "religião", "sobrevivência"
    ]
    return (
        <div className="w-full flex flex-col gap-4">
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
                    <Status description="Testes de Resistência">
                    {
                        ATTRIBUTES.map(attr => {
                            return (
                                <Field key={attr} attribute={attr}/>
                            )
                        })
                    }
                    </Status>
                    <Status description="perícias">
                    {
                        EXPERTISE.map(attr => {
                            return (
                                <Field key={attr} attribute={attr}/>
                            )
                        })
                    }
                    </Status>
                </div>
            </div>
            <SingleField description="sabedoria passiva (percepção)"/>
            <Status description="idiomas e outra proficiências">
                <textarea name="languages" id="languages" rows={10} className="resize-none outline-none p-2 w-full"></textarea>
            </Status>
        </div>
    )
}