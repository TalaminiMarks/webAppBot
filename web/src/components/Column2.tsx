import { Health, HealthDice, TemporaryHealth, Death } from "./column2/Health";
import SingleField from "./column2/SingleField";

export default function Column2(){
    return(
        <div className="w-full flex flex-col justify-center items-center px-8 gap-4">
            <div className="w-full flex justify-between items-center">
                <SingleField description="classe armd"/>
                <SingleField description="iniciativa"/>
                <SingleField description="desloc."/>
            </div>
            <Health />
            <TemporaryHealth />
            <div className="w-full flex justify-center items-center gap-4">
                <HealthDice />
                <Death />
            </div>
        </div>
    )
}