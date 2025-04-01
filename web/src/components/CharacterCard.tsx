import Link from "next/link";

interface CharacterCardProps {
    id: string;
    name: string;
    role: string;
    baseRace: string;
    subRace: string;
}

export default function CharacterCard({id, name, role, baseRace, subRace}: CharacterCardProps){
    return (
        <Link href={`/personagem/${id}`}>
            <div className="w-52 h-52 bg-slate-400 flex justify-center items-center flex-col gap-4">
                <h2 className="text-3xl">{name}</h2>
                <p className="text-xl">{role}</p>
                <div className="w-full flex flex-col justify-center items-center">
                    <p>{baseRace}</p>
                    <p>{subRace}</p>
                </div>
            </div>
        </Link>
    )
}