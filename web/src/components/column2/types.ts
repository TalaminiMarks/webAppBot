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

export interface FieldProps {
    name: string
    value?: number
}