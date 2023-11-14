import { StatusCodes } from 'http-status-codes';
import { ValidationErrorField } from '../../types/validate-error.type.js';

export default class ValidationError extends Error {
    public httpStatusCode!: number;
    public details: ValidationErrorField[] = [];

    constructor(message: string, errors: ValidationErrorField[]) {
        super(message);

        this.httpStatusCode = StatusCodes.BAD_REQUEST;
        this.message = message;
        this.details = errors;
    }
}
