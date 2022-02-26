const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// The filter method
// Returns a new array with all items where price is 100 or less.
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);
console.log(items);


// The map method
// Returns a new array with only the names.
const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);
console.log(items);


// The forEach method
// Loops through an array and do something with it.
items.forEach((item) => {
  console.log(item.name);
});


// The find method
// Loops through an array and return the first object where the condition is true.
const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);
