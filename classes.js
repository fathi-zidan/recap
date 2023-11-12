class user{
    static counter = 0;
    constructor(name,email){
        this.name=name;
        this.email=email;
        user.counter++;
    }
    printName(){
        console.log("User Name: "+this.name);
    }
    printEmail(){
        console.log("User Email: "+this.email);
    }
    static printCount(){
        console.log(`Total User Count: ${this.counter}`);
    }
}
class admin extends user{
    constructor(name,email,role){
        super(name,email)
        this.role=role;
    }
    printRole(){
        console.log("Admin Role: "+this.role);
    }
}




const user1 = new user('fathi zidan','fathizidan52@gmail.com');
user1.printName();
user1.printEmail();
user.printCount();
console.log(user.counter);
const admin1 = new admin('admin fathi', 'adminzidan@gmail.com', 'Teacher');
admin1.printName();
admin1.printRole();
