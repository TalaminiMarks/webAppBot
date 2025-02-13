import { cookies } from "next/headers";

import { api } from "@/utils/utils";
import CharacterCard from "@/components/CharacterCard";

interface CharacterInfo {
    id: string;
    name: string;
    role: string;
    health: number;
    age: number;
    baseRace: string;
    subRace: string;
}

export default async function Page(){
    const token = (await cookies()).get("token");
    
    if(!token) throw new Error("Algo deu errado");

    const { data }: { data: CharacterInfo[] } = await api.get(`/personagem`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    })

    return (
        <div className="w-full h-full flex justify-center items-center gap-4">
            {
                data.map(character => {
                    return (
                        <CharacterCard 
                            key={character.id}
                            id={character.id} 
                            name={character.name}
                            role={character.role}
                            baseRace={character.baseRace}
                            subRace={character.subRace}
                        />
                    )
                })
            }
        </div>
    )
}