import Column1 from "@/components/Column1";
import Column2 from "@/components/Column2";
import Column3 from "@/components/Column3";
import Header from "@/components/Header";
import { CharacterInfo } from "@/utils/types";
import { api } from "@/utils/utils";

export default async function Home() {
    const id = 123123;
    const { data }: { data: CharacterInfo } = await api.get(`/personagem/${id}`)

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
                    <Column1 
                        languages={data.languages}
                        CharacterAttributes={data.characterAttributes}
                        CharacterExpertise={data.characterExpertise}
                    />
                </section>
                <section className="w-full bg-blue-400">
                    <Column2 
                        totalHealth={data.health}
                        gold={data.gold}
                        CharacterItens={data.characterItens}
                    />
                </section>
                <section className="w-full bg-blue-500">
                    <Column3 
                        affiliation={data.affiliation}
                        defect={data.defect}
                        ideas={data.ideas}
                        personality={data.personality}
                        particulars="vo muda aba"
                    />
                </section>
            </div>
        </main>
    )
}
