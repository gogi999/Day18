// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

let arrKey = [];

for (let groceries of shoppingList.entries()) {
    arrKey = [...shoppingList.keys()];
    console.log(`groceries: ${groceries[0]}`);
}

let arrValue = [];

for (let amount of shoppingList.entries()) {
    arrValue = [...shoppingList.values()];
    console.log(`amount: ${amount[1]}`);
}

for (let col of shoppingList.entries()) {
    console.log(`['${col[0]}', ${col[1]}]`);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, /*arrValue*/ };
