console.log("Hello World!");

alert("Hello World!");




const name = "Tommi";
let age = 24;
const favouriteAnimal = "Tiger";

console.log(name);
console.log(age);
console.log(favouriteAnimal);

console.log(
    "Hello! My name is " + name +
    " and my favourite animal is the " + favouriteAnimal + "."
);




const userName = prompt("What is your name?");

console.log("Hello " + userName + "! Welcome to JavaScript.");




const userAge = prompt("How old are you?");
const ageNumber = Number(userAge);

if (ageNumber >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}




function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("Tommi");
greetUser("Mikko");
greetUser("Juho");




const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Tiger is the best!");
});