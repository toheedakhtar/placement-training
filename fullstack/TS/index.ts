let greeting:string = "hello, World";
let age:number = 20;
let isActive:boolean = true;
let a:null = null;
let b:undefined = undefined;

let arr:string[] = ['tt']
// let person:[string, number];

let x : string | number = "hello"; // true (wont work is a boolean)

let someValue:any = 'This is a string';
let strLength = (someValue as string).length

// person = ['Toheed', 100]
// console.log(person)
console.log(greeting);

const add = (x:number, y:number):number => {
    return x + y
}

console.log(add(2,5))


interface Person {
    firstName:string,
    lastName:string
}

// let person : Person = {
//     firstName: "toheed",
//     lastName: 'Alhtar'
// }

class Animal{
    name : string

    constructor(name:string){
        this.name = name
    }

    move(number:number){
        console.log(`$(this.name) moved $(number) meter`)
    }
}

class Person{
    public name : string
    public age : number

    constructor(name:string, age:number,){
        this.name = name
        this.age = age
    }

    get getAge(){
        return this.age
    }

    set updateAge(number:number){
        this.age = number
    }

}

const person1 = new Person("Shubham", 100)

console.log(person1.getAge)

person1.updateAge = 20      // setter 
