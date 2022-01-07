export class InvalidLoginCredentials extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InvalidLoginCredentials.prototype);
  }
}
