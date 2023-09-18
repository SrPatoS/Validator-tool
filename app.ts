import { Schema, Model } from "./src/index";

const test: Schema = {
    a: {
        type: "number",
        required: true,
        max: 1,
        min: 0.1,
    }
}

const a = new Model(test);
console.log(a.validate({ a: 0.1 }).validations[0])