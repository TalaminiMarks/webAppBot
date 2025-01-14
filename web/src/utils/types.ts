import { ReactNode } from "react"

// page.tsx interfaces
export interface MainCharacterInfo {
    name: string,
    role: string,
    health: number,
    age: number,
    race: string,
    languages: string,
    affiliation: string,
    previous: string,
    defect: string,
    ideas: string,
    personality: string,
    history: string,
    perception: number,
    displacement: number,
    initiative: number,
    inspiration: number,
    xp: number,
    gold: number,
    characterAttributes: [{
        id: string,
        attributesId: number,
        value: number
    }],
    characterExpertise: [{
        id: string,
        expertiseId: number,
        value: number
    }],
    characterItens: [{
        id: string,
        itemsId: number,
        value: string,
        bonusDamage: string,
        typeDamage: string
    }],
    characterSkills: [{
        id: string,
        skillsId: number,
        value: string,
        bonusDamage: string,
        typeDamage: string
    }],
    characterSpells: [{
        id: string,
        spellsId: number,
        value: string,
        bonusDamage: string,
        typeDamage: string
    }]
}

// Header.tsx interfaces

export interface HeaderCharacterInfoProps {
    name: string,
    role: string,
    race: string,
    previous: string,
    xp: number,
    tendency: string,
    userName: string
}

// Column1.tsx interfaces

export interface Column1Props{
    languages: string,
    CharacterAttributes: [{
        id: string,
        attributesId: number,
        value: number
    }],
    CharacterExpertise: [{
        id: string,
        expertiseId: number,
        value: number
    }]
}

export interface DataFieldColumn1 {
    id: number,
    name: string,
}

export interface AttrFieldProps {
    attribute: string
    value?: number
    proeficience?: number
}

export interface BoxWithTextProps {
    children?: ReactNode
    description: string
}

export interface FieldProps {
    attribute: string
    attributeChecked?: boolean
    value?: number
}

export interface SingleFieldProps {
    id: string
    description: string
    value?: number
}

// Column2.tsx interfaces

export interface Column2Props{
    totalHealth: number,
    currentHealth?: number
    gold: number
    CharacterItens: [{
        id: string,
        itemsId: number
    }]
}

export interface BasicInfoProps {
    description: string
    value?: number
}

export interface HealthProps {
    totalHealth: number
    currentHealth?: number
    disabled?: boolean
}

export interface HealthDiceProps {
    totalDice?: number
    healthDice?: string
    disabled?: boolean
}

export interface EquipamentsInfo {
    id: number;
    name: string;
    description: string;
}

export interface DataItemFieldProps {
    name: string,
    description: string
}

export interface EquipamentProps{
    gold: number
    CharacterItens: [{
        id: string,
        itemsId: number
    }]
}

export interface ItemFieldProps {
    id: string,
    name: string,
    description?: string
}

export interface EquipamentsFieldProps {
    name: string
    value?: number
}

// Column3.tsx interfaces

export interface Column3Props{
    personality: string,
    ideas: string,
    affiliation: string,
    defect: string,
    particulars: string
}

export interface TextAreaFieldProps {
    description: string
    rows?: number
    id?: string
    defaultValue?: string
}