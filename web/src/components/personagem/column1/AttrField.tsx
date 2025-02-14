import { getModAttr } from "@/utils/utils";

interface AttrFieldProps {
    attribute: string;
    value: number;
}

export default function AttrField({ attribute, value }: AttrFieldProps){
    const modAttr = getModAttr(value);
    return (
        <div className="w-32 p-2 flex justify-center items-center flex-col gap-1 bg-white">
            <p className="text-lg font-bold uppercase">{attribute}</p>
            <div className="py-4 px-8 bg-stone-300 rounded">
                <span>{value}</span>
            </div>
            <div className="px-2 rounded-xl border-2 border-slate-400">
                <span>{modAttr > 0 ? "+" + modAttr : modAttr}</span>
            </div>
        </div>
    )
}