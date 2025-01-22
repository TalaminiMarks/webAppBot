export interface characterAttributes {
    id: string,
    attributesId: number,
    value: number
}

export interface characterExpertise {
    id: string,
    expertiseId: number,
    value: number
}

export interface characterItens {
    id: string,
    itemsId: number,
    value: string,
    bonusDamage: string,
    typeDamage: string
}

export interface characterSkills {
    id: string,
    skillsId: number,
    value: string,
    bonusDamage: string,
    typeDamage: string
}

export interface characterSpells {
    id: string,
    spellsId: number,
    value: string,
    bonusDamage: string,
    typeDamage: string
}