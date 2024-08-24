// JavaScript Array Methods Assignment

// -------------------------- 1. Write a JavaScript program that uses the `push()` method to add an element to an array.
arr = [1,2,3,4]
arr.push(5)
console.log(arr)

// --------------------------- 2. Create a JavaScript program that removes the last element from an array using the `pop()` method
arr = [1,2,3,4]
console.log("before pop: ", arr);
arr.pop()
console.log("after pop: ", arr)

// --------------------------- 3. Use the `shift()` method to remove the first element from an array.
arr = [1,2,3,4]
console.log("before shift: ", arr);
arr.shift()
console.log("after shift: ", arr);

// --------------------------- 4. Write a program that adds an element to the beginning of an array using the `unshift()` method.
arr = [1,2,3,4]
console.log("before unshift: ", arr);
arr.unshift(0)
console.log("after shift: ", arr);


// ---------------------------- 5. Modify an array by removing and/or adding elements using the `splice()` method.
arr = [1,2,3,4,5]
arr.splice(1, 0, 1.5, 1.75)     // index, remove n, items to be added
console.log("splice adding",arr)
arr.splice(1, 2)
console.log("splice removing",arr)


// ----------------------------- 6. Use the `slice()` method to create a new array from a portion of an existing array.
arr = [1,2,3,4]
console.log('before slice', arr)
slicedArr = arr.slice(0,2)  // dosent change original array
console.log('after slice', slicedArr) 

// ------------------------------  7. Find the index of an element in an array using the `indexOf()` method
arr = ["aa", "ab", "ac", "dd"]
console.log("index of ab", arr.indexOf('ab'))

// ------------------------------ 8. Create a new array by transforming each element in an existing array using the `map()` method.
arr = [1,2,3,4,5]
function forMap(num){
    return num / 10;
}
console.log("after mapping with forMap func", arr.map(forMap))
console.log("after mapping with arrow func", arr.map((num) => {
    return num * 10;
} ))
console.log("original array", arr)

// ------------------------------- 9. Filter elements from an array that meet a certain condition using the `filter()` method.
arr = ["aa", "bab", "fdd", "ga", "kjk", "cj"]
function forfilter(str){
    return str.length >= 3
}
console.log("after filter with forfilter func", arr.filter(forfilter))
console.log("after filter with arrow func", arr.filter((str) => {
    return str.length < 3; 
} ))
console.log("original array", arr)

// -------------------------------- 10. Write a program that calculates a single value from an array using the `reduce()` method.
arr = [1,2,3,4,5]
function reduceSum(acc, arrValue){
    return acc += arrValue
}
console.log('after reduce with arrReduce function', arr.reduce(reduceSum, 0));
console.log("after reduce with arr function", arr.reduce( (acc, arrValue) =>{
    return acc += arrValue
}, 0 ));
console.log('orginal array', arr)
