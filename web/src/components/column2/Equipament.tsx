export default function Equipament(){
    return (
        <div className="w-full flex flex-col p-2 bg-purple-300 gap-2">
            <div className="w-full flex">
                <div className="w-1/4 flex flex-col">
                    <div className="flex justify-around items-center">
                        <span>PC</span>
                        <p>0</p>
                    </div>
                    <div className="flex justify-around items-center">
                        <span>PP</span>
                        <p>0</p>
                    </div>
                    <div className="flex justify-around items-center">
                        <span>PE</span>
                        <p>0</p>
                    </div>
                    <div className="flex justify-around items-center">
                        <span>PO</span>
                        <p>0</p>
                    </div>
                    <div className="flex justify-around items-center">
                        <span>PL</span>
                        <p>0</p>
                    </div>
                </div>
                <div className="w-3/4 flex justify-center">
                    <textarea name="equipament" id="equipament" rows={10} cols={45} className="resize-none p-2"></textarea>
                </div>
            </div>
            <span className="w-full text-center uppercase">equipamento</span>
        </div>
    )
}