import Car from './task-10.js';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
