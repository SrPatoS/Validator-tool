import { validationErrorMessages } from "../response/default-reponse-messages";
import { DefaultResponseType } from "../types/default-response.type";
import { DefaultTypes } from "../types/default-types";
import { AppRegex } from "../regex/regex";

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

    if (props.type === DefaultTypes.email) {
        if (!AppRegex.email.test(props.input)) {
            res.errors.push({
                type: props.type,
                message: validationErrorMessages.invalidFormat
            });
            return res;
        }
    }

    if (props.type === DefaultTypes.date) {
        const date = new Date(props.input);
        if ((isNaN(date.getTime()))) {
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
        if (min === 0 && value.length < 0) {
            res.errors.push({
                type: "number",
                message: validationErrorMessages.minLength
            });
        }
        
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
        if (min === 0 && value < 0) {
            res.errors.push({
                type: "number",
                message: validationErrorMessages.minValue
            });
        }

        if ((min && value < min)) {
            res.errors.push({
                type: "number",
                message: validationErrorMessages.minValue
            });
        }

        if ((max && value > max)) {
            res.errors.push({
                type: "number",
                message: validationErrorMessages.maxValue
            });
        }

        return res;
    }

    return res;
}