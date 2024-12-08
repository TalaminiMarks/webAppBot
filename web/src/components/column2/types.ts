export interface DataItemFieldProps {
    id: number,
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
    name: string,
    description?: string
}

export interface FieldProps {
    name: string
    value?: number
}