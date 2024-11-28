import Column1 from "@/components/Column1";
import Column2 from "@/components/Column2";
import Column3 from "@/components/Column3";
import Header from "@/components/Header";
import { axiosInstance } from "@/utils/utils";

interface CharacterInfo {
    name: string,
    role: string,
    health: number,
    age: number,
    race: string,
    languages: string,
    affiliation: string,
    previous: string,
    defect: string,
    ideas: string,
    personality: string,
    history: string,
    xp: number,
    gold: number
}

export default async function Home() {
    const id = 123123;
    const character = await axiosInstance.get(`/personagem/${id}`)

    const data: CharacterInfo = character.data;

    return (
        <main className="w-full bg-slate-300">
            <Header 
                name={data.name} 
                role={data.role} 
                previous={data.previous}
                race={data.race}
                xp={data.xp}
                tendency="algo"
                userName="Maricock"
            />
            <div className="grid grid-cols-3 py-4">
                <section className="w-full bg-blue-300">
                    <Column1 />
                </section>
                <section className="w-full bg-blue-400">
                    <Column2 totalHealth={data.health}/>
                </section>
                <section className="w-full bg-blue-500">
                    <Column3 
                        affiliation={data.affiliation}
                        defect={data.defect}
                        ideas={data.ideas}
                        personality={data.personality}
                        particulars="falto"
                    />
                </section>
            </div>
        </main>
    )
}
