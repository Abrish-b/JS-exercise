import EVCar from './task-11.js';
import Car from './task-10.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);
console.log(ec2 instanceof Car);