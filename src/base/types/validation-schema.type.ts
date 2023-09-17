import { DefaultTypes } from "./default-types"

export type keyType = {
    type: keyof typeof DefaultTypes,
    min?: number,
    max?: number,
    required?: boolean
}

export type ValidationSchema = {
    [key: string]: keyType
}