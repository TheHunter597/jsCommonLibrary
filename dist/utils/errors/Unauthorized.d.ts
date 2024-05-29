import BasicError from "./BasicError";
export default class Unauthorized extends BasicError {
    statusCode: number;
    errors: {
        [key: string]: string[];
    } | undefined;
    constructor(message: string, errors?: {
        [key: string]: string[];
    });
}
