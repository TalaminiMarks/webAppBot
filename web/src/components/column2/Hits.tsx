export default function Hits(){
    return (
        <div className="w-full p-4 flex flex-col bg-yellow-300 gap-2">
            <header className="w-full flex justify-between items-center">
                <span className="w-1/3 uppercase">nome</span>
                <span className="w-1/3 text-center uppercase">bônus</span>
                <span className="w-1/3 text-center uppercase">dano/tipo</span>
            </header>
            <div className="flex justify-between items-center">
                <span className="w-1/3">0</span>
                <span className="w-1/3 text-center">0</span>
                <span className="w-1/3 text-center">0</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="w-1/3">0</span>
                <span className="w-1/3 text-center">0</span>
                <span className="w-1/3 text-center">0</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="w-1/3">0</span>
                <span className="w-1/3 text-center">0</span>
                <span className="w-1/3 text-center">0</span>
            </div>
            <textarea name="obs" id="attackObs" rows={10} className="resize-none"></textarea>
            <p className="w-full text-center uppercase">ataques e magias</p>
        </div>
    )
}