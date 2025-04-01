import Link from "next/link";
import { HomeIcon } from "@heroicons/react/20/solid";

interface FieldProps {
    value?: string | number;
    description: string;
}

function Field({value, description}: FieldProps){
    return (
        <div className="flex gap-1">
            <p className="uppercase">{description + ":"}</p>
            <span className="font-bold capitalize">{value}</span>
        </div>
    )
}

interface HeaderCharacterInfoProps {
    name: string;
    role: string;
    race: string;
    xp: number;
    level: number;
}

export default function Header({name, role, race, xp, level}: HeaderCharacterInfoProps){
    return (
        <header className="py-4 flex justify-between items-center">
            <div className="px-4">
                <h2 className="text-3xl">{name.toUpperCase()}</h2>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Field description="Classe" value={role}/>
                <Field description="Raça" value={race}/>
                <Field description="Nivel" value={level}/>
                <Field description="XP" value={xp}/>
            </div>
            <Link href={"/"} className="flex items-center px-4 py-2 mr-4 gap-1 rounded-xl bg-stone-400">
                <HomeIcon width={24} height={24}/>
                <span>Home</span>
            </Link>
        </header>
    )
}