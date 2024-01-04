export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateType(name, 'string', 'Name must be a string');
    this.validateType(length, 'number', 'Length must be a number');
    this.validateType(students, 'array', 'Students must be an array of Strings');

    for (const student of students) {
      this.validateType(student, 'string', 'Students must be an array of Strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
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

  get length() {
    return this._length;
  }

  set length(length) {
    this.validateType(length, 'number', 'Length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this.validateType(students, 'array', 'Students must be an array of Strings');
    
    for (const student of students) {
      this.validateType(student, 'string', 'Students must be an array of Strings');
    }

    this._students = students;
  }
}
