const toyBox = ["teddy", "dinosaur", "robot"];
const [a, b, c] = toyBox;
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
