import { Metadata } from "next";
import { cookies } from "next/headers";

import { api } from "@/utils/utils";
import Header from "@/components/personagem/Header";
import HealthBar from "@/components/personagem/HealthBar";
import CharacterStats from "@/components/personagem/CharacterStats";
import { 
    characterAttributes, 
    characterExpertise, 
    characterItens, 
    characterSkills, 
    characterSpells, 
    Attribute,
    Expertise, 
    ItensTable
} from "@/utils/interfaces";
import Backpack from "@/components/personagem/Backpack";


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
    const data: MainCharacterInfo = response.data;

    const ITENS: ItensTable[] = (await api.get("/equipamentos")).data;

    const ATTRIBUTES: Attribute[] = (await api.get("/atributos")).data;

    const EXPERTISE: Expertise[] = (await api.get("/pericias")).data;


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
                <section className="w-2/3 bg-pink-200 flex flex-col items-center">
                    <HealthBar currentHealth={20} maxHealth={60}/>
                    <CharacterStats 
                        characterAttributes={data.characterAttributes} 
                        characterExpertise={data.characterExpertise}
                        attributes={ATTRIBUTES}
                        expertise={EXPERTISE}
                    />
                    <div className="w-full flex justify-center items-center">
                        <Backpack characterId={data.id} characterItens={data.characterItens} itens={ITENS}/>
                    </div>
                    <p>CA, Iniciativa, deslocament, inspiração</p>
                    <p>Inventario e magias e dinheiro</p>
                </section>
            </div>
        </main>
    )
}