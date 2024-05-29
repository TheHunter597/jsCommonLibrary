import BasicError from "./BasicError";
export default class ValidationError extends BasicError {
    statusCode: number;
    errors: {
        [key: string]: string[];
    } | undefined;
    constructor(message: string, errors?: {
        [key: string]: string[];
    });
    serializeErrors(err: any): {
        [key: string]: string[];
    };
}
