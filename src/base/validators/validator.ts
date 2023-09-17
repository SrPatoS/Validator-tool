import { validationErrorMessages } from "../response/default-reponse-messages";
import { DefaultResponseType } from "../types/default-response.type";
import { DefaultTypes } from "../types/default-types";

interface Props {
    input: any;
    field: string;
    min?: number;
    max?: number;
    type: keyof typeof DefaultTypes;
}

export const validator = (props: Props): DefaultResponseType => {
    const res: DefaultResponseType = {
        field: props.field,
        errors: [],
        value: props.input
    }

    if (props.input === null || props.input === undefined) {
        res.errors.push({
            type: props.field,
            message: validationErrorMessages.requiredField
        });
        return res;
    }

    if (props.type === DefaultTypes.string) {
        if (!(typeof props.input === "string")) {
            res.errors.push({
                type: props.type,
                message: validationErrorMessages.invalidFormat
            });
            return res;
        }
    }

    const validationLength = validateLength(props.input, props.field, props.min, props.max).errors;

    for (const error of validationLength) {
        res.errors.push(error);
    }

    return res;
}

const validateLength = (value: string | number, field: string, min?: number, max?: number): DefaultResponseType => {
    const res: DefaultResponseType = {
        field: field,
        errors: [],
        value: value
    }

    if (typeof value === "string") {
        if ((min && value.length < min)) {
            res.errors.push({
                type: "string",
                message: validationErrorMessages.minLength
            });
        }

        if ((max && value.length > max)) {
            res.errors.push({
                type: "string",
                message: validationErrorMessages.maxLength
            });
        }
        return res;
    }

    if (typeof value === "number") {
        const valueString = value.toString();

        if ((min && valueString.length < min)) {
            res.errors.push({
                type: "number",
                message: validationErrorMessages.minLength
            });
        }

        if ((max && valueString.length > max)) {
            res.errors.push({
                type: "number",
                message: validationErrorMessages.maxLength
            });
        }

        return res;
    }

    return res;
}