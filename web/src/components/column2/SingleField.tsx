export default function SingleField({value, description}: {value?: number, description: string}){
    return(
        <div className="flex flex-col justify-center items-center px-2 h-24 gap-4 bg-pink-300">
            <span>{value ? value : 0}</span>
            <span className="uppercase w-20 text-clip text-center text-sm">{description}</span>
        </div>
    )
}