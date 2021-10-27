import Person from "./classes/Person.js";
import {jsonPerson, jsonPerson2} from "./JSON/person.js";
let trueAge = 96;


jsonPerson.birthday();
console.log(jsonPerson);
console.log(jsonPerson2);

let nameEle = document.querySelector(".personName");
let ageEle = document.querySelector(".personAge");
let colorEle = document.querySelector(".personColor");
nameEle.innerText = jsonPerson.name;
ageEle.innerText = "Age: " + jsonPerson.age.years + " years, " + jsonPerson.age.months + 
    " months, " + jsonPerson.age.days + " days";
colorEle.innerText = jsonPerson.favoriteColor;


function showAge(age) {
    console.log(age);
}

const David = new Person("David", 39, "Blue");
David.birthday();
const personArray = [new Person("David", 39, "Blue"), new Person("Rickie", 34, "Green"), 
    new Person("Jordan", 24, "Blue")];

console.log(personArray);