interface AttrFieldProps {
    attribute: string;
    value: number;
    modValue: number;
}

export default function AttrField({ attribute, value, modValue }: AttrFieldProps){
    return (
        <div className="w-32 p-2 flex flex-col justify-center items-center gap-2 bg-white">
            <p className="text-center text-md font-bold uppercase">{attribute}</p>
            <span className="bg-stone-300 px-4 py-2">{value}</span>
            <div className="px-2 rounded-xl border-2 border-slate-400">
                <span className="text-sm">{modValue > 0 ? "+" + modValue : modValue}</span>
            </div>
        </div>
    )
}