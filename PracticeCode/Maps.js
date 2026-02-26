// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits.get("apples"));
fruits.set("mango", 100);
fruits.forEach((a) => {
  console.log(a);
});

console.log(fruits.keys());
console.log(fruits.values());
console.log(fruits.entries());

for (let key of fruits.keys()) {
  if (fruits.get(key) === 500) {
    console.log(key);
    break;
  } else {
    continue;
  }
}

let excelData = [
  {
    row: 1,
    column: 2,
  },
  {
    row: 2,
    column: 3,
  }
];
let values = ["sameer", "anand"];
let map2 = new Map();
map2.set(excelData[0], values[0]);
map2.set(excelData[1], values[1]);
console.log(map2.keys());
console.log(map2.values());
