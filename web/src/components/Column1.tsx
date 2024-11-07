function AttrField({attribute, value, proeficience}: {attribute: string, value?: number, proeficience?: number}){
    return (
        <div className="w-[90%] flex justify-center items-center flex-col gap-[2px] bg-white">
            <p className="text-lg font-bold uppercase">{attribute}</p>
            <div className="py-4 px-8 bg-stone-300 rounded">
                <p>{value ? value : 0}</p>
            </div>
            <div className="px-2 rounded-xl border-2 border-slate-400">
                <p className="text-sm">{proeficience ? proeficience : 0}</p>
            </div>
        </div>
    )
}

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