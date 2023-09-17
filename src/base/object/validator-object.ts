import { DefaultValidationResponseType } from "../types/default-validation-response.type";
import { ValidationSchema, keyType } from "../types/validation-schema.type";
import { validator } from "../validators/validator";

export class ValidatorObject {
    private schema: ValidationSchema;

    public constructor(schema: ValidationSchema) {
        this.schema = schema;
    }

    public validate(value: object, output?: boolean): DefaultValidationResponseType {
        const res: DefaultValidationResponseType = {
            errorsCount: 0,
            validations: []
        }

        const keysSchema = Object.keys(this.schema);
        const keysObject = Object.keys(value);

        for (const keySchema of keysSchema) {
            const schema = <keyType>this.schema[keySchema];

            if(!schema.required)
                break;

            for (const keyObject of keysObject) {
                if (keySchema === keyObject) {
                    const result = validator({
                        field: keyObject,
                        type: schema.type,
                        input: value[keyObject],
                        min: schema.min,
                        max: schema.max,
                    });
                    res.errorsCount += result.errors.length;
                    res.validations.push(result);
                }
            }
        }

        if (output) {
            const out = {};
            res.validations.forEach((validation) => {
                out["valid"] = validation.errors.length === 0;
                out[validation.field] = validation.value;
                res.output = out;
            });
        }

        return res;
    }
}