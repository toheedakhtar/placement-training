
console.log('Hello World')

//  datatype -> Primitive , Reference

// primitive -> string, number , boolean, undefined, symbol, bigInt
// reference -> object, array, Date, null 

// var a = "I'll be an artificial intelligence legend";
// console.log(a)


var str = 'thsi sis string'
console.log(typeof(str))

var ud;
console.log(typeof ud)

//  array in js is collection of multiple datatypes
var arr = [1 , 2 , 'string', undefined, [1 , 'string1', undefined]]
// console.log(arr)
// console.log(roughSizeOfObject(arr))

//  object -> collection of key value pairs
//  arr  = [],  object = {}

// var a = [{
//     firstName : "Toheed",
//     lastName : "Akhtar"
// }, 10 , 'num']

// console.log(typeof a)
// console.log(typeof arr)

var date = new Date();
console.log(date)
// console.log(typeof date)

// var b = null
// console.log(typeof(b))


let c= 12;  // can be reassigned but can't be reinit / redeclared
c = 13;
console.log(c)

const d = 111;  // const can't be redeclared or reassigned
console.log(d)


let a = 10;
let b= 20;
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let exp = a ** b;
let rem = a % b;


console.log(sum, sub, mul, div)


let x = 10;
x += 20; // x = x + 10
x -= 20
x /= 20
x ** 20
x %= 20

console.log(x)


// comparison operator

let num1 = 50;
let num2 = "50";

console.log(num1 === +num2) // type conversion
console.log(num1 !== num2) 
console.log(5+'5')


let isLoggedin = 10;
let isAdmin = 20;

// short - circuit condition 
// if true in first || will return True
// if true in first && will check second condition and will return based on it,

console.log(isLoggedin && isAdmin)
console.log(isLoggedin || isAdmin)


