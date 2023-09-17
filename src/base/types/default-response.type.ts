import { ErrorType } from "./default-response-error.type";

export type DefaultResponseType = {
    field: string;
    value: any,
    errors: Array<ErrorType>;
}