
export default function Inspiration({value}:{value?: number}){
    return (
        <div className="w-full py-2 flex justify-around items-center bg-blue-200">
            <span className="py-2 px-4 bg-yellow-200">{value ? value : 0}</span>
            <p className="mr-8 uppercase">Inspiração</p>
        </div>
    )
}