import { characterExpertise, DataInfo } from "@/utils/interfaces"
import { api } from "@/utils/utils"
import ExptField from "./characterStatsComponents/ExptField"

interface ExpertiseProps{
    characterExpertise: characterExpertise[]
}

export default async function Expertise({ characterExpertise }: ExpertiseProps){
    const EXPERTISE: DataInfo[] = (await api.get("/pericias")).data

    return(
        <div className="w-1/3 p-2 flex flex-col gap-1 bg-stone-300">
            {
                EXPERTISE.map(expertise => {
                    const filter = characterExpertise.find(i => i.expertiseId === expertise.id);
                    if (!filter) throw new Error("Erro nas pericias");
                    const value = filter.value;
                    return(
                        <ExptField key={expertise.id} id={expertise.name} expertise={expertise.name} value={value}/>
                    )
                })
            }
        </div>
    )
}