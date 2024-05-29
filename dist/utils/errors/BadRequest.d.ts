import BasicError from "./BasicError";
export default class BadRequest extends BasicError {
    statusCode: number;
    errors: {
        [key: string]: string[];
    } | undefined;
    constructor(message: string, errors?: {
        [key: string]: string[];
    });
}
