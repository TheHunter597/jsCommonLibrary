export default abstract class BasicError extends Error {
  abstract statusCode: number;
  abstract errors: { [key: string]: string[] } | undefined;
  constructor(message: string) {
    super(message);
  }
}
