export default function Field({description, rows}: {description: string, rows?: number}){
    return(
        <div className="w-full p-2 flex flex-col justify-center items-center gap-2 bg-zinc-400">
            <textarea name={description.toLowerCase()} id={description.toLowerCase()} rows={rows ? rows : 5} className="resize-none w-full"></textarea>
            <span className="w-full text-center">{description.toUpperCase()}</span>
        </div>
    )
}