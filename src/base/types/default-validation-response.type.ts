import { DefaultResponseType } from "./default-response.type";

export type DefaultValidationResponseType = {
    errorsCount: number;
    validations: DefaultResponseType[];
    output?: any;
}