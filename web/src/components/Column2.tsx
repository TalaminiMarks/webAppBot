import { Health, HealthDice, TemporaryHealth, Death, BasicInfo } from "./column2/Health";
import Hits from "./column2/Hits";
import Equipament from "./column2/Equipament";

interface CharacterInfo{
    totalHealth: number,
    currentHealth?: number
}

export default function Column2({totalHealth, currentHealth}: CharacterInfo){
    return(
        <div className="w-full flex flex-col justify-center items-center px-8 gap-4">
            <div className="w-full flex justify-between items-center">
                <BasicInfo description="classe armd"/>
                <BasicInfo description="iniciativa"/>
                <BasicInfo description="desloc."/>
            </div>
            <Health totalHealth={totalHealth} currentHealth={currentHealth ? currentHealth : totalHealth}/>
            <TemporaryHealth />
            <div className="w-full flex justify-center items-center gap-4">
                <HealthDice />
                <Death />
            </div>
            <Hits />
            <Equipament />
        </div>
    )
}