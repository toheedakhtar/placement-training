var greeting = "hello, World";
var age = 20;
var isActive = true;
var a = null;
var b = undefined;
var arr = ['tt'];
// let person:[string, number];
var x = "hello"; // true (wont work is a boolean)
var someValue = 'This is a string';
var strLength = someValue.length;
// person = ['Toheed', 100]
// console.log(person)
console.log(greeting);
var add = function (x, y) {
    return x + y;
};
console.log(add(2, 5));
// let person:Person = {
//     firstName: "toheed",
//     lastName: 'Alhtar'
// }
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (number) {
        console.log("$(this.name) moved $(number) meter");
    };
    return Animal;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "updateAge", {
        set: function (number) {
            this.age = number;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person("Shubham", 100);
console.log(person1.getAge);
person1.updateAge = 20; // setter 
