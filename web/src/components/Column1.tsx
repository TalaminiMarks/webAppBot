import AttrField from "./column1/AttrField"

export default function Column1(){
    return (
        <div className="bg-yellow-200 w-1/3">
            <div className="flex justify-center items-center flex-col gap-4">
                <AttrField attribute="força"/>
                <AttrField attribute="destreza"/>
                <AttrField attribute="constituição"/>
                <AttrField attribute="inteligencia"/>
                <AttrField attribute="sabedoria"/>
                <AttrField attribute="carisma"/>
            </div>
        </div>
    )
}