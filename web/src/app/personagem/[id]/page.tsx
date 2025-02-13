import { Metadata } from "next";
import { cookies } from "next/headers";

import { api } from "@/utils/utils";
// import Column1 from "@/components/personagem/Column1";
// import Column2 from "@/components/personagem/Column2";
// import Column3 from "@/components/personagem/Column3";
import Header from "@/components/personagem/Header";
import HealthBar from "@/components/personagem/HealthBar";
import { 
    characterAttributes, 
    characterExpertise, 
    characterItens, 
    characterSkills, 
    characterSpells 
} from "@/utils/interfaces";


interface MainCharacterInfo {
    id: string;
    name: string;
    role: string;
    health: number;
    age: number;
    baseRace: string;
    subRace: string;
    languages: string;
    affiliation: string;
    previous: string;
    defect: string;
    ideas: string;
    personality: string;
    history: string;
    perception: number;
    displacement: number;
    initiative: number;
    inspiration: number;
    xp: number;
    gold: number;
    characterAttributes: characterAttributes[];
    characterExpertise: characterExpertise[];
    characterItens: characterItens[];
    characterSkills: characterSkills[];
    characterSpells: characterSpells[];
}

type Props = {
    params: Promise<{ id: string; }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;

    const token = (await cookies()).get("token");
    if (!token) throw new Error("Não foi encontrado JWT token");

    const response = await api.get(`/personagem/${id}`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    return {
        title: response.data.name
    }
}

export default async function Page({ params }: Props){
    const id = (await params).id

    const token = (await cookies()).get("token");
    if (!token) throw new Error("Não foi encontrado JWT token");

    const response = await api.get(`/personagem/${id}`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    });

    const data: MainCharacterInfo = response.data

    return (
        <main className="w-full bg-slate-300">
            <Header 
                name={data.name} 
                role={data.role} 
                previous={data.previous}
                race={data.baseRace}
                xp={data.xp}
                tendency="algo"
                userName="Maricock"
            />
            <div className="flex py-4">
                <section className="w-1/3 bg-purple-300">
                    <p>Infos do personagem</p>
                </section>
                <section className="w-2/3 bg-pink-200">
                    <HealthBar />
                    <p>Atributos</p>
                    <p>CA, Iniciativa, deslocament, inspiração</p>
                    <p>Pericias</p>
                    <p>Inventario e magias e dinheiro</p>
                </section>
                {/* <section className="w-full bg-blue-300">
                    <Column1 
                        languages={data.languages}
                        characterAttributes={data.characterAttributes}
                        characterExpertise={data.characterExpertise}
                    />
                </section>
                <section className="w-full bg-blue-400">
                    <Column2 
                        characterId={data.id}
                        totalHealth={data.health}
                        gold={data.gold}
                        characterItens={data.characterItens}
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
                </section> */}
            </div>
        </main>
    )
}