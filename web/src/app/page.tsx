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
    perception: number,
    displacement: number,
    initiative: number,
    inspiration: number,
    xp: number,
    gold: number,
    characterAttributes: [{
        id: string,
        attributesId: number,
        value: number
    }],
    characterExpertise: [{
        id: string,
        expertiseId: number,
        value: number
    }],
    characterItens: [{
        id: string,
        itemsId: number,
        value: string,
        bonusDamage: string,
        typeDamage: string
    }],
    characterSkills: [{
        id: string,
        skillsId: number,
        value: string,
        bonusDamage: string,
        typeDamage: string
    }],
    characterSpells: [{
        id: string,
        spellsId: number,
        value: string,
        bonusDamage: string,
        typeDamage: string
    }]

}

export default async function Home() {
    const id = 123123;
    const { data }: { data: CharacterInfo } = await axiosInstance.get(`/personagem/${id}`)

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
                        particulars="falto"
                    />
                </section>
            </div>
        </main>
    )
}
