import BasicError from "./BasicError";

export default class Forbidden extends BasicError {
  statusCode = 403;
  errors: { [key: string]: string[] } | undefined;

  constructor(message: string, errors?: { [key: string]: string[] }) {
    super(message);
    this.errors = errors;
  }
}
