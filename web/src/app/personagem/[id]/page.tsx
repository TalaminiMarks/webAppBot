import { Metadata } from "next";
import { cookies } from "next/headers";

import { api } from "@/utils/utils";
import Header from "@/components/character/Header";
import HealthBar from "@/components/character/HealthBar";
import CharacterStats from "@/components/character/CharacterStats";
import { 
    characterAttributes, 
    characterExpertise, 
    characterItens, 
    characterSkills, 
    characterSpells, 
    Attribute,
    Expertise, 
    ItensTable,
    SpellsTable
} from "@/utils/interfaces";
import Backpack from "@/components/character/Backpack";
import CharacterStory from "@/components/character/characterStory";
import Spells from "@/components/character/Spells";


interface MainCharacterInfo {
    id: string;
    name: string;
    role: string;
    health: number;
    armor: number;
    age: number;
    baseRace: string;
    subRace: string;
    languages: string;
    affiliation: string;
    previous: string;
    defect: string;
    ideas: string;
    personality: string;
    story: string;
    tendency: string;
    proficiency: number;
    perception: number;
    displacement: number;
    initiative: number;
    inspiration: number;
    xp: number;
    level: number;
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
    const data: MainCharacterInfo = response.data;

    const ITENS: ItensTable[] = (await api.get("/equipamentos")).data;

    const ATTRIBUTES: Attribute[] = (await api.get("/atributos")).data;

    const EXPERTISE: Expertise[] = (await api.get("/pericias")).data;

    const SPELLS: SpellsTable[] = (await api.get("/magias")).data;

    return (
        <main className="w-full h-full bg-slate-300">
            <Header 
                name={data.name} 
                role={data.role} 
                race={data.baseRace}
                xp={data.xp}
                level={data.level}
            />
            <div className="w-full h-[90%] flex">
                <section className="w-1/3 bg-purple-300 p-2 flex flex-col gap-2">
                    <CharacterStory 
                        affiliation={data.affiliation}
                        defect={data.defect}
                        ideas={data.ideas}
                        personality={data.personality}
                        previous={data.previous}
                        story={data.story}
                        tendency={data.tendency}
                    />
                    <div className="w-full flex justify-center items-center gap-4">
                        <Backpack 
                            characterId={data.id} 
                            characterItens={data.characterItens} 
                            itens={ITENS}
                            gold={data.gold}
                        />
                        <Spells 
                            characterId={data.id}
                            characterSpells={data.characterSpells}
                            spells={SPELLS}
                        />
                    </div>
                </section>
                <section className="w-2/3 bg-pink-200 flex flex-col items-center">
                    <HealthBar currentHealth={20} maxHealth={60}/>
                    <CharacterStats 
                        characterAttributes={data.characterAttributes} 
                        characterExpertise={data.characterExpertise}
                        attributes={ATTRIBUTES}
                        expertise={EXPERTISE}
                        initiative={data.initiative}
                        inspiration={data.inspiration}
                        proficiency={data.proficiency}
                        perception={data.perception}
                        armor={data.armor}
                    />
                </section>
            </div>
        </main>
    )
}