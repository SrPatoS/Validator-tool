# Validator Tool

**A lightweight data validation library for JavaScript and TypeScript.**

[![Project Status](https://img.shields.io/badge/status-under%20development-brightgreen)](https://github.com/SrPatoS/Validator-tool)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/SrPatoS/Validator-tool/releases)

## Overview

Validator Tool is a versatile data validation library for JavaScript and TypeScript applications. It provides a set of easy-to-use functions and utilities to validate various types of data, including strings, numbers, dates, emails, and more. Whether you're building a web application, API, or any software that handles user input, Validator Tool can help ensure data integrity and reliability.

## Features

- **Simple API:** Easy-to-use functions for common data validation tasks.
- **Custom Validation Rules:** Define your own custom validation rules.
- **TypeScript Support:** Fully typed for TypeScript projects.
- **Extensible:** Extend and customize validation rules to suit your needs.
- **Error Messages:** Customizable error messages for validation failures.
- **Lightweight:** Designed to be minimalistic and lightweight.
- **Cross-Platform:** Works in both Node.js and browsers.

## Installation

Install Validator Tool using npm or yarn:

```bash
npm install sp-validator-tool
```
or

```bash
yarn add sp-validator-tool
```

## Usage Examples

Here are some examples of how to use the `validator-tool` library for data validation in both CommonJS and ECMAScript (ES) modules.

### CommonJS

To use the library in a CommonJS environment, you can do the following:

```javascript
const { Model } = require("sp-validator-tool").default;

const userValidator = new Model({
    name: {
        type: "string",
        required: true,
        min: 1,
        max: 10
    }
})

const user = {
    name: "Dev"
}

const result = userValidator.validate(user, true);
console.log(result);
```

In this example, we import the Model class from the validator-tool package and create a user validator. We validate a user object with a specific validation schema and print the result.

### Typescript

Here are some examples of how to use the `validator-tool` library for data validation in TypeScript:

```typescript
import { Model, Schema } from "sp-validator-tool";

const userValidationSchema: Schema = {
    name: {
        type: "string",
        required: true,
        min: 1,
        max: 10
    }
}

const user = {
    name: "Dev"
}

const userValidation = new Model(userValidationSchema);
const result = userValidation.validate(user, true);
console.log(result);

```
In this TypeScript example, we import the Model and Schema classes from the validator-tool package. We then define a validation schema for the user and use the Model class to perform validation and print the result.

Please note that this example assumes you are working in a TypeScript environment. Adjust your import statements accordingly if you are using JavaScript (CommonJS or ECMAScript modules).

## License

The Validator Tool library is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).

You are free to use this library in your projects, including commercial projects. Please review the [License](https://opensource.org/licenses/MIT) for more details on your rights and responsibilities when using this software.
