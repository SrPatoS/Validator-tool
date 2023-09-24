import { DefaultValidationResponseType } from "../types/default-validation-response.type";
import { ValidationSchema, keyType } from "../types/validation-schema.type";
import { validator } from "../validators/validator";

export class ValidatorObject {
    private schema: ValidationSchema;

    public constructor(schema: ValidationSchema) {
        this.schema = schema;
    }

    public validate(value: any, output?: boolean): DefaultValidationResponseType {
        const res: DefaultValidationResponseType = {
            errorsCount: 0,
            validations: []
        }

        const keysSchema = Object.keys(this.schema);

        for (const keySchema of keysSchema) {
            const schema = <keyType>this.schema[keySchema];

            if (!schema.required)
                break;

            for (let i = 0; i < keysSchema.length; i++) {
                if (keySchema === keysSchema[i]) {
                    const result = validator({
                        field: keysSchema[i],
                        type: schema.type,
                        input: value[keysSchema[i]],
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