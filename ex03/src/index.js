// Only change code below this line
function* myGenerator(...args) {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* args;
}

let iterator = myGenerator(6, 7, 8);
let generatorArray = [];

for (let value of iterator) {
    generatorArray.push(value);
}

console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator};
