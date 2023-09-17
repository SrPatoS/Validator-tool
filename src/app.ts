import { validator } from "./base/validators/validator";
import { DefaultTypes } from "./base/types/default-types";
import { ValidationSchema } from "./base/types/validation-schema.type";
import { ValidatorObject } from "./base/object/validator-object";

const UserSchema: ValidationSchema = {
    name: {
        type: "string",
        max: 10,
        min: 1,
        required: true
    },
    age: {
        type: "number",
        required: true
    }
}

const user = {
    name: "Vini",
    age: null,
}

const validateUser = new ValidatorObject(UserSchema);
const result = validateUser.validate(user, true);
console.log(result)