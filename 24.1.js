function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function(){
   return this.a === this.b && this.b === this.c && this.c === this.d;
}
const square1 = new Square(2,1,2,4);
const square2 = new Square(2,2,2,2);
console.log(square1.isSquare()); 
console.log(square2.isSquare());

console.log("the class part .....................");

class SquareCheck{
    constructor(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    isSquare1(){
        return this.a === this.b && this.b === this.c && this.c === this.d;
    }

}
const s = new SquareCheck(1,1,1,1);
const s2 = new SquareCheck(1,2,4,5);
console.log(s.isSquare1()); 
console.log(s2.isSquare1());