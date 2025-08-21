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
