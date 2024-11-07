import AttrField from "./column1/AttrField"
import SingleField from "./column1/SingleField"

export default function Column1(){
    return (
        <div className="w-full flex">
            <div className="w-1/3 flex justify-center items-center flex-col gap-4 bg-yellow-200">
                <AttrField attribute="força"/>
                <AttrField attribute="destreza"/>
                <AttrField attribute="constituição"/>
                <AttrField attribute="inteligencia"/>
                <AttrField attribute="sabedoria"/>
                <AttrField attribute="carisma"/>
            </div>
            <div className="w-2/3 flex flex-col items-center bg-slate-200 gap-2">
                <SingleField description="Inspiração"/>
                <SingleField description="Bônus de proeficiência"/>
                <div>
                    
                </div>
            </div>
        </div>

    )
}