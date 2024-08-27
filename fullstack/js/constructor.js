// --------------------- consturcutors
// --- this --> like self in python? 
// js is not proper OOP language , only supports inheritance.

// let user = {
//     username : "Toheed",
//     age : 'abc',
//     greet : function(){
//         console.log(this)
//         // console.log(`Hello my username is ${this.username} and my age is ${this.age}`)
//     }
// }

// console.log(this)

// function sum(){
//     console.log(this)
// }
// sum();
// user.greet();

// ------------------------- constructor
// in js there are no classes in a real sense, they are just syntactial sugar for constructors.

// function person(name, age){
//     const presonObj = {
//         username : name,
//         age : age,
//         greet : function(){              // this is not the way
//             // console.log(this)
//             console.log(`Hello my username is ${this.username} and my age is ${this.age}`)
//         }
//     }
//     return presonObj;
// }


// let person1 = person('toheed', '20');
// let person2 = person('toheed2', '20');
// person1.greet();
// person2.greet();


// function Person(name, age){
//     this.name = name;
//     this.age = age;
    // this.greet = function(){             // this is not the way
    //     console.log(`Hello my username is ${this.name} and my age is ${this.age}`)

    // }
// }

// console.log(Person('a', 'a'));
// Person('toheed', '20');
// Person.prototype.greet = function(){            // this is the way! saves memory.
//     console.log(`Hello my username is ${this.name} and my age is ${this.age}`)

// }
// let person1 = new Person('Toheed', '20');       // new to create new instace ; makes a copy and adds there;  because of using this
// person1.greet();
// console.log(person1)

// console.log(Array.prototype)


//  --------------------------- CLASSES
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){    // does'nt need function declaration.
        console.log(`Hello my username is ${this.name} and my age is ${this.age}`);
    }
}

let person1 = new Person("Toheed", 'ab');
console.log(person1)
person1.greet()


