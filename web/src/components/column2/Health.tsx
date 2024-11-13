interface HealthProps {
    totalHealth: number
    currentHealth?: number
}

export function Health({totalHealth, currentHealth}: HealthProps){
    return (
        <div className="w-full flex flex-col items-center justify-center bg-slate-200">
            <div className="w-full flex flex-col p-2">
                <div className="flex justify-between items-center">
                    <span className="w-1/3">PV Totais</span>
                    <p className="w-1/3 text-center">{totalHealth}</p>
                </div>
                <div className="w-full h-[100px] flex justify-center items-center">
                    <span>{currentHealth ? currentHealth : totalHealth}</span>
                </div>
                <p className="w-full text-center uppercase">pontos de vida atuais</p>
            </div>
        </div>
    )
}

export function TemporaryHealth({temporaryHealth}: {temporaryHealth?: number}){
    return (
        <div className="w-full flex flex-col bg-orange-200 p-2">
            <div className="w-full flex justify-center items-center h-[100px]">
                <span>{temporaryHealth ? temporaryHealth : 0}</span>
            </div>
            <p className="w-full text-center uppercase">pontos de vida temporários</p>
        </div>
    )
}

interface HealthDice {
    totalDice?: number
    healthDice?: string
    disabled?: boolean
}

export function HealthDice({totalDice, healthDice, disabled}: HealthDice){
    return (
        <div className="w-1/2 flex flex-col bg-rose-300">
            <div className="px-4 flex justify-between items-center gap-4">
                <label htmlFor="totalDice">Total</label>
                <input type="text" id="totalDice" className="w-full text-center" defaultValue={totalDice ? totalDice : 0} disabled={disabled ? disabled : false}/>
            </div>
            <div className="w-full h-[50px] flex justify-between items-center">
                <span className="w-full text-center">{healthDice ? healthDice : 0}</span>
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

interface BasicInfoProps {
    description: string
    value?: number
}

export function BasicInfo({value, description}: BasicInfoProps){
    return(
        <div className="flex flex-col justify-center items-center px-2 h-24 gap-4 bg-pink-300">
            <span>{value ? value : 0}</span>
            <span className="uppercase w-20 text-clip text-center text-sm">{description}</span>
        </div>
    )
}