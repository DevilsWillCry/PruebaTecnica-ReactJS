export class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
     return `Hola, soy ${this.name} y tengo ${this.age} años de edad.`;
    }
  }