//  ------------------------------------------- arr methods ---------------------------------------------------------------------

// filter
// let arr = [10,20,30,40,50,60];

// let filterdArr = arr.filter(item=>item > 20);
// console.log(filterdArr)

// reduce
// let sum = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 1000)
// console.log(sum)

// let founditem = arr.find((item) => item > 30);
// console.log(founditem)

// let founditem = arr.find((item) => item === 30);
// console.log(founditem)

// let founditemIndex = arr.findIndex((item) => item === 30);
// console.log(founditemIndex)
// let arr = [11,20,30,40,50,60];

// let hasEven = arr.some((item) => item%2===0);
// console.log(hasEven)

// let everyEven = arr.every((item) => item%2===0);
// console.log(everyEven)


// ----------------------------------------------- object Methods ----------------------------------------------------------------------

let obj = { 
    firstName : "Toheed",
    lastName : "Akhtar"
}

let keys = Object.keys(obj)
console.log(keys)

let values = Object.values(obj)
console.log(values)

let entries = Object.entries(obj)
console.log(entries)

Object.freeze(obj);     // makes the obj behaves like a constant

obj.firstName = "naeem"
console.log(obj)

const num = {
    firstName : "Toheed",
    lastName : "akhtar"
}

num.firstName = "naeem"     // it will change as ut accesing key of an object, this is why freeze is used so that keys do not change.
console.log(num)

Object.seal(obj)        // exisiting properties keys can be changed, new properties can't be changed

obj.firstName = 'Naeem';
obj.location = 'Udaipur';
console.log(obj)

console.log(obj.hasOwnProperty('firstname'));





















