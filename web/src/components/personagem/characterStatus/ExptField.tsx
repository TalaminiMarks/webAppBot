interface ExptFieldProps {
    id: string;
    value: number;
    expertise: string;
}

export default async function ExptField({ id, value, expertise }: ExptFieldProps){
    return (
        <div className="flex gap-2">
            <input type="radio" name={expertise} />
            <span className="w-8 bg-slate-200 text-center">{value}</span>
            <label htmlFor={id}>{expertise}</label>
        </div>
    )
}