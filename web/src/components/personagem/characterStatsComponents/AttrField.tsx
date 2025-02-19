interface AttrFieldProps {
    attribute: string;
    value: number;
    modValue: number;
}

export default function AttrField({ attribute, value, modValue }: AttrFieldProps){
    return (
        <div className="w-44 p-2 flex justify-center items-center flex-col gap-4 bg-white">
            <div className="w-full">
                <p className="text-center text-lg font-bold uppercase">{attribute}</p>
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="bg-stone-300 px-4 py-2">{value}</span>
            </div>
            <div className="px-2 rounded-xl border-2 border-slate-400">
                <span>{modValue > 0 ? "+" + modValue : modValue}</span>
            </div>
        </div>
    )
}