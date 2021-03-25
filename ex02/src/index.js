// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for (let x = 0; x < 6; x++) {
        yield x; 
    }
}

function* insideGenerator2() {
    for (let x = 10; x < 16; x++) {
        yield x;
    }
}

function* insideGenerator3() {
    for (let x = 6; x < 10; x++) {
        yield x;
    }
}

const iterator = myGenerator();
iterator.next().value;

let fifteenArray = [];
fifteenArray = [...iterator];
console.log(fifteenArray.join("#, "));
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
