// ----------------- loops , strict mode, console types, array methods ---------------------------------------------------

// "use strict"        // applies restriction, such as dosent allow undeclared variables, duplicate params

// while , do while , for

let count = 20;

// while(count < 10){      // isnt used much in js
//     console.log(count);
//     count++;
// }

//  do while is same as c , cpp


//  for is also same
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// let arr = [10,20,30,40,50,60,70]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

//  for of and for in loop      , in -> index , of -> value

// for (let element of arr){
//     console.log(element)
// }

// for (let index in arr){
//     console.log(index)
// }


// let items = ['first', 'second', 3, 4, 'fifth']

// for (let item of items){
//     console.log(...item);
// }

// a = 10      // this wont work
// console.log(a)

// let b = 20      // this will work
// console.log(b)

// function sum(a,a){
//     // "use strict"

//     console.log("sum func")
// }

// sum();


//  ---------------------------------------------- TYPES OF CONSOLE ------------------------------------------------------------
// console.log('hello')
// console.error('this is error console')
// console.warn('this is warn console')
// console.assert(5>10,'5 is greater than 10')
// console.assert(5>10,'10 is not greater than 10')


let person = {
    name: "Toheed",
    age: '20',
    address: {
        city: 'udaipur',
        pinCode: '313002'
    }
}


// console.dir(person)

let data = [
    {
        name: 'Toheed', city: 'udaipur', dept: 'DS'
    },
    {
        name: 'AKHTAR', city: 'udaipur', dept: 'DS'

    },
    {
        name: 'Naeem', city: 'udaipur', dept: 'DS'
    }
]

// console.table(data)

// console.group('Group1');
// console.log('Msg1')
// console.log('Msg2')
// console.groupEnd();

// console.log('Msg outside group')

// console.count("Counter")
// console.count("Counter")
// console.count("Counter")
// console.count("Counter")

// ------------------------------- Array Methods -------------------------------------------------------------------------------

const ret = (a) => {
    console.log(a)
}

let arr = [10, 20, 30, 40, 50, 60, 70]

// push, pop, shift, unshift

console.log(arr.push(1000))
// console.log(...arr)

ret(arr.pop())
// console.log(arr)

// shift , unshift
// unshift -> inserts elements at start
// shift -> removes elements at start
arr.unshift(1000)
// console.log(arr)
// ret(arr.unshift(1000))

arr.shift(1000)
arr.shift(1000)
arr.shift(1000)
// console.log(arr)

// concat
let arr1 = [10, 20]
let arr2 = [30, 40]

// console.log(arr1.concat(arr2))

// slice and splice
//  slice -> shallow copy of elements
//  splice -> operations on array itself

let arrn = [10, 20, 30, 40, 50, 60]
// arrn.slice(2);
console.log('slice(2)', arrn.slice(2))
console.log(arrn)
console.log('splice(2)', arrn.splice(2, 2, 5, 4))
console.log(arrn)





