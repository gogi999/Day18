// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

let arrKey = [];

arrKey = [...shoppingList].forEach((key) => {
    console.log(`groceries: ${key[0]}`);
});
arrKey = [arrKey];
//console.log(arrKey instanceof Array);

let arrValue = [];

arrValue = [...shoppingList].forEach((val) => {
    console.log(`amount: ${val[1]}`);
});
arrValue = [arrValue];
//console.log(arrKey instanceof Array)

for (let entry of shoppingList.entries()) {
    console.log(`['${entry[0]}', ${entry[1]}]`);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
