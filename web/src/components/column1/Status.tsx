import { ReactNode } from "react";

interface FieldProps {
    attribute: string,
    value?: number
}

export function Field({attribute, value}: FieldProps){
    return (
        <div className="flex items-center gap-2">
            <input type="checkbox" name={attribute} id={attribute} />
            <span  className="px-4 bg-purple-300 text-center">{value ? value : 0}</span>
            <span className="capitalize text-sm">{attribute}</span>
        </div>
    )
}

export function Status({children, description}: {children: ReactNode, description: string}){
    return(
        <div className="w-full flex flex-col px-4 py-2 gap-2 bg-red-300">
            {children}
            <p className="w-full pt-2 uppercase text-center">{description}</p>
        </div>
    )
}