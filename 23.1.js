console.error(this);
// Q1: it will return the global object which is the window

const myObj = {
    name: "Timmy",
    greet: function() {
    console.log(`Hello ${this.name}`);
    },
    };
    myObj.greet();
// Q2: bcz of the arrow function this will point to the global object (window) so to correct it we use normal function

//Q3:In your own words what will this point to and why?
//This will point to the global obj which is the window but if it is called within an object's method  this will refer to that object.
const myFuncDec = function () {
console.log(this);
};
myFuncDec();

//Q4:In your own words what will this point to and why?
//this  will point to the global object (window)
const myFuncArrow = () => {
console.log(this);
};
myFuncArrow();

//Q5: In your own words, what will this point to and why?
//this will not point to the element with the class "element" ,It will typically point to the global object (window) bcz of the arrow function.
//b. How can you fix this code?
//now it will point to the element with the class "element"
document.querySelector(".element").addEventListener(function() {
console.log(this);
})


