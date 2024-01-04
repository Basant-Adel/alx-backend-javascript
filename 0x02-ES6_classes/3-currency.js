export default class Currency {
  constructor(code, name) {
    this.validateType(code, 'string', 'Code must be a string');
    this.validateType(name, 'string', 'Name must be a string');

    this._code = code;
    this._name = name;
  }

  validateType(value, expectedType, errorMessage) {
    if (typeof value !== expectedType) {
      throw new TypeError(errorMessage);
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this.validateType(name, 'string', 'Name must be a string');
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this.validateType(code, 'string', 'Code must be a string');
    this._code = code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
