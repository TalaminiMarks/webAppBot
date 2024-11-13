interface SingleFieldProps {
    description: string
    value?: number
}

export default function SingleField({value, description}: SingleFieldProps){
    return (
        <div className="w-full py-2 flex items-center bg-blue-200">
            <div className="py-2 px-4 ml-8 bg-yellow-200">
                <span>{value ? value : 0}</span>
            </div>
            <p className="w-full uppercase text-center">{description}</p>
        </div>
    )
}