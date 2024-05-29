import BasicError from "./BasicError";

export default class Unauthorized extends BasicError {
  statusCode = 401;
  errors: { [key: string]: string[] } | undefined;
  constructor(message: string, errors?: { [key: string]: string[] }) {
    super(message);
    this.errors = errors;
  }
}
