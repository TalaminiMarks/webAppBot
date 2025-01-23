export interface ItensTable {
    id: number | string;
    name: string;
    description: string;
    damage: string;
    typeDamage: string;
}

export interface SkillsTable {
    id: number | string;
    name: string;
    description: string;
    damage: string;
    typeDamage: string;
}

export interface SpellsTable {
    id: number | string;
    name: string;
    description: string;
    damage: string;
    typeDamage: string;
}

export interface characterAttributes {
    id: string | number;
    attributesId: number;
    value: number;
}

export interface characterExpertise {
    id: string | number;
    expertiseId: number;
    value: number;
}

export interface characterItens {
    id: string | number;
    itemsId: number;
    bonusDamage: string;
    typeBonusDamage: string;
    additionalDescription: string;
}

export interface characterSkills {
    id: string | number;
    skillsId: number;
    bonusDamage: string;
    typeBonusDamage: string;
    additionalDescription: string;
}

export interface characterSpells {
    id: string | number;
    spellsId: number;
    bonusDamage: string;
    typeBonusDamage: string;
    additionalDescription: string;
}