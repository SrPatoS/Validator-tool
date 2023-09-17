import { ValidationSchema } from "./base/types/validation-schema.type";
import { ValidatorObject } from "./base/object/validator-object";
import { DefaultTypes } from "./base/types/default-types";

namespace vt {
    export type Schema = ValidationSchema;
    export type Types = DefaultTypes;
    export class Model extends ValidatorObject { };
}

export type Schema = ValidationSchema;
export type Types = DefaultTypes;
export class Model extends ValidatorObject { };

export default vt;