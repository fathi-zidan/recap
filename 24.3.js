//filter method
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.myFilter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);
//find method
const firstEvenNumber = arr.myFind((num) => num % 2 === 0);
console.log(firstEvenNumber);