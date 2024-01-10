class Teacher {
  private readonly _firstName: string;
  private readonly _lastName: string;

  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
}

const teacher3 = new Teacher('John', 'Doe');
teacher3.fullTimeEmployee = false;
teacher3.location = 'London';
teacher3.contract = false;

console.log(teacher3);
