interface HealthProps {
    totalHealth: number
    currentHealth?: number
    disabled?: boolean
}

export function Health({totalHealth, currentHealth, disabled}: HealthProps){
    return (
        <div className="w-full flex flex-col items-center justify-center bg-slate-200">
            <div className="w-full flex flex-col p-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="totalHealth" className="w-1/3">PV Totais</label>
                    <input id="totalHealth" name="totalHealth" className="w-1/2 text-center" defaultValue={totalHealth} disabled={disabled ? disabled : false}/>
                </div>
                <div className="w-full h-[100px] flex justify-center items-center">
                    <input 
                        id="currentHealth" 
                        name="currentHealth" 
                        className="w-full py-6 text-center text-3xl" 
                        defaultValue={currentHealth ? currentHealth : totalHealth} 
                        disabled={disabled ? disabled : false}
                    />
                </div>
                <label htmlFor="currentHealth" className="w-full text-center uppercase">pontos de vida atuais</label>
            </div>
        </div>
    )
}

export function TemporaryHealth({temporaryHealth, disabled}: {temporaryHealth?: number, disabled?: boolean}){
    return (
        <div className="w-full flex flex-col bg-orange-200 p-2">
            <div className="w-full flex justify-center items-center h-[100px]">
                <input 
                    type="text" 
                    name="temporaryHealth" 
                    id="temporaryHealth" 
                    className="w-full py-8 text-center text-3xl" 
                    defaultValue={temporaryHealth ? temporaryHealth : 0} 
                    disabled={disabled ? disabled : false}
                />
            </div>
            <label htmlFor="temporaryHealth" className="w-full text-center uppercase">pontos de vida temporários</label>
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
        <div className="w-1/2 p-2 flex flex-col bg-rose-300">
            <div className="pl-4 flex justify-between items-center gap-4">
                <label htmlFor="totalDice">Total</label>
                <input 
                    type="text" 
                    id="totalDice" 
                    className="w-full text-center" 
                    defaultValue={totalDice ? totalDice : 0} 
                    disabled={disabled ? disabled : false}
                />
            </div>
            <div className="w-full h-[50px] flex justify-between items-center">
                <input 
                    type="text" 
                    id="healthDice"
                    className="w-full text-center py-2 text-xl" 
                    defaultValue={healthDice ? healthDice : 0} 
                    disabled={disabled ? disabled : false}
                />
            </div>
            <label htmlFor="healthDice" className="w-full text-center uppercase">dados de vida</label>
        </div>
    )
}

export function Death(){
    return(
        <div className="w-1/2 p-2 flex flex-col bg-rose-300 gap-3">
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