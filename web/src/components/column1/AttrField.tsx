import { AttrFieldProps } from "@/utils/types";

export default function AttrField({attribute, value, proeficience}: AttrFieldProps){
    return (
        <div className="w-full p-2 flex justify-center items-center flex-col gap-1 bg-white">
            <label htmlFor={attribute} className="text-lg font-bold uppercase">{attribute}</label>
            <div className="py-4 px-8 bg-stone-300 rounded">
                <input 
                    type="text" 
                    name={attribute} 
                    id={attribute} 
                    defaultValue={value ? value : 0} 
                    className="w-8 text-center text-xl"
                />
            </div>
            <div className="px-2 rounded-xl border-2 border-slate-400">
                <input 
                    type="text"
                    name={attribute + "proeficience"}
                    id={attribute + "proeficience"}
                    className="text-sm w-4 text-center" 
                    defaultValue={proeficience ? proeficience : 0} 
                />
            </div>
        </div>
    )
}