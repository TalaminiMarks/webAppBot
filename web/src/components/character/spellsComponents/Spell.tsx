interface SpellProps {
    id: number | string;
    name: string;
    description: string;
    damage: string;
    typeDamage: string;
}

export default function Spell({ damage, description, id, name, typeDamage}: SpellProps){
    return(
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{damage}</p>
            <p>{typeDamage}</p>
        </div>
    )
}