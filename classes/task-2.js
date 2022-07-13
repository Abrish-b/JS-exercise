export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    this._length = length;
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (typeof val !== 'string') throw TypeError('Name must be a string');
    this._name = val;
  }

  set length(val) {
    if (typeof val !== 'number') throw TypeError('Length must be a number');
    this._length = val;
  }

  set students(val) {
    if (!Array.isArray(val)) throw TypeError('Students must be an array');
    this._students = val;
  }
}
