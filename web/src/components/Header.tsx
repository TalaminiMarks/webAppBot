import { HeaderCharacterInfo } from "@/utils/types"

function Field({value, description}: {value?: string | number, description: string}){
    return (
        <div>
            <span className="text-xl font-bold">{value}</span>
            <p className="uppercase text-header-field">{description}</p>
        </div>
    )
}

export default function Header({name, role, previous, race, userName, tendency, xp}: HeaderCharacterInfo){
    return (
        <header className="py-6 flex justify-between items-center">
            <section className="w-1/3 bg-red-300">
                <Field value={name} description="nome do personagem"/>
            </section>
        
            <section className="w-2/3 grid grid-cols-3 justify-center items-center bg-blue-200">
                <Field description="classe e nível" value={role}/>
                <Field description="Antecedente" value={previous}/>
                <Field description="Nome do jogador" value={userName}/>
                <Field description="Raça" value={race}/>
                <Field description="Tendência" value={tendency}/>
                <Field description="Pontos de Experiencia" value={xp}/>
            </section>
        </header>
    )
}