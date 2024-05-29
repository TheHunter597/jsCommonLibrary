import BasicError from "./BasicError";

export default class NotFound extends BasicError {
  statusCode = 404;
  errors: { [key: string]: string[] } | undefined;

  constructor(message: string, errors?: { [key: string]: string[] }) {
    super(message);
    this.errors = errors;
  }
}
