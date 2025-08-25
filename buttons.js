let toyBox = ["teddy", "dinosaur", "robot"];
let [a, b, c] = toyBox;
const [firstToy, secondToy, thirdToy] = toyBox;
// elements can be empty, [firstToy, , thirdToy] is also valid
console.log("First toy: " + a, "Second toy: " + b, "Third toy: " + c);
// the names are variable
toyBox.forEach((toy, index) => {
  console.log(`Toy ${index + 1}: ${toy}`);
});

toyBox.map((toy, index) => {
  return `Toy ${index + 1}: ${toy}`;
});
console.log(firstToy);
console.log(thirdToy);
let myToyBox = toyBox;
console.log(myToyBox);
const newToys = ["car", "plane", "boat"];
// merge two arrays using spread operator
myToyBox = [...myToyBox, ...newToys];
console.log(myToyBox);

function calculate(a, b) {
  console.log(a + b);
}
calculate(5, 10);

function calculateV2(...numbers) {
  for (const num of numbers) {
    console.log(num);
  }
}
calculateV2(1, 2);

const container = document.getElementById("main-container");
function createButton(text) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  return buttonElement;
}
// const button1 = createButton("!");
// const button2 = createButton("?");
// container.append(button1, button2);
// container.append(createButton("!"), createButton("?"));
function createButton(text) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  return buttonElement;
}
const toyElements = toyBox.map((toy) => {
  return createButton(toy);
});
console.log(toyElements);
container.append(...toyElements);

let person = {
  name: "Alex",
  age: 25,
};
person.city = "Oslo";
person = { ...person, city: "Oslo" };
let { age, ...allOtherProperties } = person;
console.log(person);
console.log(person.name);
// . can be used to call properties from large databases
console.log(person.age);
console.log(age);
console.log(allOtherProperties);

let names = [];
let [d = "Guest"] = names;
console.log(d);

const participants = [
  { name: "Alice", age: 30, city: "Oslo" },
  { name: "Bob", age: 25, city: "Bergen" },
  { name: "Charlie", age: 35, city: "Stavanger" },
];
const [winner, secondPlace, thirdPlace] = participants;
// function takes an object as an argument
function destructureName(personObject) {
  const { name } = personObject;
  return name;
}
console.log(destructureName(winner));
console.log(destructureName(secondPlace));
console.log(destructureName(thirdPlace));
// console.log(thirdPlace.name);
