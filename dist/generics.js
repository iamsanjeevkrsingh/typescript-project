"use strict";
const scrore = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: 'ABC', type: 1 });
function getSearchProduct(product) {
    // do some database operation
    return product[3];
}
const getMoreSearchProducts = (product) => {
    // do some database operation
    return product[3];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
anotherFunction(3, "4");
