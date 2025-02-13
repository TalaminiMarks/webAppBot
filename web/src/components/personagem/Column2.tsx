import { Health, HealthDice, TemporaryHealth, Death, BasicInfo } from "./column2/Health";
import Hits from "./column2/Hits";
import Inventory from "./column2/Inventory";
import { characterItens } from "@/utils/interfaces"

interface Column2Props {
    characterId: string;
    totalHealth: number;
    currentHealth?: number;
    gold: number;
    characterItens: characterItens[];
}

export default function Column2({characterId, totalHealth, currentHealth, gold, characterItens}: Column2Props){
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
            <Hits characterItens={characterItens}/>
            <Inventory characterId={characterId} gold={gold} characterItens={characterItens}/>
        </div>
    )
}