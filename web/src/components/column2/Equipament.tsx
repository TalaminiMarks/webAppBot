interface FieldProps {
    name: string
    value?: number
}

function Field({name, value}: FieldProps){
    return (
        <div className="w-full flex justify-between items-center pr-4">
            <span>{name}</span>
            <input 
                type="text" 
                name={name.toLowerCase()} 
                value={value}
                className="w-[70%] text-center py-1"
            />
        </div>
    )
}

export default function Equipament(){
    return (
        <div className="w-full flex flex-col p-2 bg-purple-300 gap-2">
            <div className="w-full flex">
                <div className="w-1/4 flex flex-col gap-4 py-2">
                    <Field name="PC" />
                    <Field name="PP" />
                    <Field name="PE" />
                    <Field name="PO" />
                    <Field name="PL" />
                </div>
                <div className="w-3/4 flex justify-center">
                    <textarea name="equipament" id="equipament" rows={10} className="resize-none p-2 w-full"></textarea>
                </div>
            </div>
            <span className="w-full text-center uppercase">equipamento</span>
        </div>
    )
}