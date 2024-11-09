export function Health(){
    return (
        <div className="w-full flex flex-col items-center justify-center bg-slate-200">
            <div className="w-full flex flex-col p-2">
                <div className="flex justify-between items-center">
                    <span className="w-1/3">PV Totais</span>
                    <p className="w-1/3 text-center">0</p>
                </div>
                <div className="w-full h-[100px] flex justify-center items-center">
                    <span>0</span>
                </div>
                <p className="w-full text-center uppercase">pontos de vida atuais</p>
            </div>
        </div>
    )
}

export function TemporaryHealth(){
    return (
        <div className="w-full flex flex-col bg-orange-200 p-2">
            <div className="w-full flex justify-center items-center h-[100px]">
                <span>0</span>
            </div>
            <p className="w-full text-center uppercase">pontos de vida temporários</p>
        </div>
    )
}

export function HealthDice(){
    return (
        <div className="w-1/2 flex flex-col bg-rose-300">
            <div className="flex justify-between items-center">
                <span className="px-1">Total</span>
                <span className="w-full text-center">0</span>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center">
                <span className="w-full text-center">0</span>
            </div>
            <p className="w-full text-center uppercase">dados de vida</p>
        </div>
    )
}

export function Death(){
    return(
        <div className="w-1/2 flex flex-col bg-rose-300 gap-3">
            <div className="w-full flex justify-center items-center gap-4">
                <span>sucessos</span>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
            </div>
            <div className="w-full flex justify-center items-center gap-4">
                <span>fracassos</span>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
            </div>
            <p className="w-full text-center uppercase">teste contra a morte</p>
        </div>
    )
}