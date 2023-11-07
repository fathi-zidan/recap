const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];
// console.log(superHeroes);

function printName() {
    console.log(`my name is ${this.name}`);
}
// printName.call(wonderWoman);
// printName.call(batman);

function printHeroes(heroes, printFunc) {
    heroes.forEach((hero) => {
        printFunc.call(hero);
    })
}
printHeroes(superHeroes, printName);






