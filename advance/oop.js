const user={
    username:'ayushi',
    email:'aisha246@mail.com',
     getUserDetails:function(){
        console.log(`${this.username}`);
        
     }
}
console.log(user.getUserDetails());

// new keyword for new instance
function User(username,address){
    this.username=username;
    this.address=address;
    return this
}

User.prototype.printMe=function(){
    console.log(`${this.username}`)
}
const userOne=new User('aisha','paris')
const userTwo=new User('aman','paris')
console.log(userOne.printMe())

// prototype via object
let heroPower={
    thor:'hammer',
    getPower:function(){
        console.log(`you get electricity from ${this.thor}`);
        
    }
}

Object.prototype.ayushi=function(){
    console.log('created my own');
    
}
heroPower.ayushi()

// arrays
let myheros=['thor','ironman']
Array.prototype.heyHitesh=function(){
    console.log('hitesh says hii')
}

myheros.heyHitesh()

// inheritance

// Base object
let animal = {
    eats: true,
    walk: function() {
        console.log("Animal is walking");
    }
};

// Another object
let rabbit = {
    jumps: true
};

// Inherit from animal-one way
rabbit.__proto__ = animal;

console.log(rabbit.eats);  
console.log(rabbit.jumps); 
rabbit.walk(); 

// inherit from animal-second way
Object.setPrototypeOf(rabbit,animal)

// create new way of triming the string
let username='ayushi  '
String.prototype.trueLength=function(){
    // console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}
username.trueLength()
'hitesh  '.trueLength()