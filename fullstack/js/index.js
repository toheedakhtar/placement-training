console.log('Hello World')

//  datatype -> Primitive , Reference

// primitive -> string, number , boolean, undefined, symbol, bigInt
// reference -> object, array, Date, null 

// var a = "I'll be an artificial intelligence legend";
// console.log(a)

function roughSizeOfObject(object) {
    var objectList = [];
    var stack = [object];
    var bytes = 0;

    while (stack.length) {
        var value = stack.pop();

        if (typeof value === 'boolean') {
            bytes += 4;
        } else if (typeof value === 'string') {
            bytes += value.length * 2;
        } else if (typeof value === 'number') {
            bytes += 8;
        } else if (typeof value === 'object' && objectList.indexOf(value) === -1) {
            objectList.push(value);

            for (var i in value) {
                stack.push(value[i]);
            }
        }
    }
    return bytes;
}
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

var a = [{
    firstName : "Toheed",
    lastName : "Akhtar"
}, 10 , 'num']

console.log(typeof a)
// console.log(typeof arr)

var date = new Date();
// console.log(date)
// console.log(typeof date)

var b = null
console.log(typeof(b))


let c= 12;  // can be reassigned but can't be reinit / redeclared
c = 13;
console.log(c)

const d = 111;  // const can't be redeclared or reassigned
d = 112
console.log(d)




