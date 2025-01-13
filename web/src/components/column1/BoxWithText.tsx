import { BoxWithTextProps, FieldProps } from "@/utils/types";

export function Field({attribute, attributeChecked, value}: FieldProps){
    return (
        <div className="flex items-center gap-2">
            <input 
                type="checkbox" 
                name={attribute + "check"} 
                id={attribute + "check"} 
                defaultChecked={attributeChecked ? attributeChecked : false}
            />
            <input 
                type="text" 
                name={attribute}
                id={attribute + "proef"} 
                className="w-8 text-center" 
                defaultValue={value ? value : 0} 
            />
            <label htmlFor={attribute + "proef"} className="capitalize text-sm">{attribute}</label>
        </div>
    )
}

export function BoxWithText({children, description}: BoxWithTextProps){
    return(
        <div className="w-full flex flex-col px-4 py-2 gap-2 bg-red-300">
            {children}
            <p className="w-full pt-2 uppercase text-center">{description}</p>
        </div>
    )
}