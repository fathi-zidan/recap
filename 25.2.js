const obj = {
    name: 'John',
    printName(){
        console.log(this.name);
    },
    printNameAfterSecond(){
        setTimeout(() => this.printName(), 1000)
    }

}
obj.printName(); 
obj.printNameAfterSecond();
