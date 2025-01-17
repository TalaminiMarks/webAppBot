interface TextAreaFieldProps {
    description: string
    rows?: number
    id?: string
    defaultValue?: string
}

export default function TextAreaField({description, rows, id, defaultValue}: TextAreaFieldProps){
    return(
        <div className="w-full p-2 flex flex-col justify-center items-center gap-2 bg-zinc-400">
            <textarea 
                name={id ? id : description.toLowerCase()} 
                id={id ? id : description.toLowerCase()} 
                rows={rows ? rows : 5} 
                className="resize-none w-full p-2"
                defaultValue={defaultValue}
            >
            </textarea>
            <span className="w-full text-center">{description.toUpperCase()}</span>
        </div>
    )
}