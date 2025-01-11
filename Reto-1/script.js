import { processArray } from "./handleArray.js";
import { getData } from "./handleAsync.js";
import { Person } from "./handleClasses.js";

// 
// 1. Manejo de Arrays:
const arrayToChange = [1, 2, 3, 4, 5];
const newArray = processArray(arrayToChange);

document.getElementById("array").innerHTML = "[" + arrayToChange + "]";
document.getElementById("result").innerHTML = "[" + newArray + "]";


// 2. Promesas y Manejo de asincronía: 
getData()
  .then((data) => {
    document.getElementById("asyncData").innerHTML = data;
  })
  .catch((e) => console.error(e));

// 3. Clasess in Javascript:
const person = new Person("John Doe", 30);
console.log(person.greet());
document.getElementById("dataClasePerson").innerHTML = person.greet();