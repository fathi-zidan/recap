function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you ${this.name}`);
}
Pokemon.prototype.attack = function (num) {
    if (num < this.attackList.length) {
        console.log(`${this.name} used ${this.attackList[num]}`);
    } else {
        console.log("No such attack");
    }
}
const pokemon1 = new Pokemon("Pikachu", "Electric", ["Thunderbolt", "Quick Attack", "Thunder Shock"]);
const pokemon2 = new Pokemon("Sandshrew", "Grass/Poison", ["Vine Whip","Seed Bomb"]);
const pokemon3 = new Pokemon("Charizard", "Fire/Flying", ["Flamethrower", "Dragon Claw", "Fire Spin"]);
pokemon1.callPokemon();
pokemon1.attack(0);
pokemon1.attack(1);
console.log('\n');

pokemon2.callPokemon();
pokemon2.attack(1);
pokemon2.attack(3);
console.log('\n');

pokemon3.callPokemon();
pokemon3.attack(1);
pokemon3.attack(2);
console.log('\n');



