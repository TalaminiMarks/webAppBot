interface SingleFieldProps {
    id: string;
    description: string;
    value?: number;
}

export default function SingleField({value, description, id}: SingleFieldProps){
    return (
        <div className="w-full py-2 flex items-center bg-blue-200">
            <div className="p-2 ml-8 bg-yellow-200">
                <input 
                    type="text" 
                    name={id} 
                    id={id} 
                    className="w-8 text-center" 
                    defaultValue={value ? value : 0}
                />
            </div>
            <label htmlFor={id} className="w-full uppercase text-center">{description}</label>
        </div>
    )
}