import BasicError from "./BasicError";

export default class BadRequest extends BasicError {
  statusCode = 400;
  errors: { [key: string]: string[] } | undefined;

  constructor(message: string, errors?: { [key: string]: string[] }) {
    super(message);
    this.errors = errors;
  }
}
