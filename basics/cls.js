class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log('hi, my name is ', this.name);
  }

  graduatedAt() {
    console.log(23);
  }
}

const Abrham = new Person('Abrish', 24);

console.log(typeof Person);
console.log(typeof Abrham);
Abrham.speak();
Abrham.graduatedAt();
