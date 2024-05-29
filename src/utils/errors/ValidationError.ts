import BasicError from "./BasicError";

export default class ValidationError extends BasicError {
  statusCode = 400;
  errors: { [key: string]: string[] } | undefined;
  constructor(message: string, errors?: { [key: string]: string[] }) {
    super(message);
    this.errors = this.serializeErrors(errors);
  }
  serializeErrors(err: any): { [key: string]: string[] } {
    try {
      let finalErrors: { [key: string]: string[] } = {};
      let elements = Object.keys(err.errors);
      for (let element of elements) {
        finalErrors[element] = [err.errors[element].message];
      }
      return finalErrors;
    } catch (err) {
      return {};
    }
  }
}
