import { DefaultValidationResponseType } from "./base/types/default-validation-response.type";
import { ValidationSchema } from "./base/types/validation-schema.type";
import { ValidatorObject } from "./base/object/validator-object";
import { DefaultTypes } from "./base/types/default-types";
import { ErrorType } from "./base/types/default-response-error.type";

namespace vt {
    export type Schema = ValidationSchema;
    export type Types = DefaultTypes;
    export type Error = ErrorType;
    export type Response = DefaultValidationResponseType;
    export class Model extends ValidatorObject { };
}

export type Schema = ValidationSchema;
export type Types = DefaultTypes;
export class Model extends ValidatorObject { };

export default vt;