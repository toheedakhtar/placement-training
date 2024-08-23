//  string methods
// diff bw slice, splice and split is asked in interviews.

// let str = "Hello World";
// let char = str.charAt(6)
// console.log(char)

// let newstr = str.concat(' Techno')
// console.log(newstr)

// let hasStr = str.includes('world');
// console.log(hasStr)

// let index = str.indexOf('ld');dfsklfjjfd
// let index = str.lastIndexOf('l');
// console.log(index)

// let newStr = str.slice(-5);  // accepts -tive value also
// console.log(newStr)

// let newStrsub = str.substring(4 , 8);
// console.log(newStrsub)

// let lcstr = str.toLowerCase()
// let ucstr = str.toUpperCase()
// console.log(lcstr, ucstr)

// // split
// let splitstr = str.split("o")
// console.log(splitstr)

// let str1 = "     Hello World";
// let trimmedStr = str.trim();
// console.log(trimmedStr)

// let strrplce = str.replace("World", "Universe")
// console.log(strrplce)

// let strrpt = str.repeat(3)
// console.log(strrpt)

//  these above methods doesnot touch original methods.


// ------------------------------ date methods ----------------------------------------

// let date = new Date();
// console.log(date)

// console.log(date.getFullYear())
// console.log(date.getSeconds())
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())

// ------------------------------- Math object ----------------------------------------------

// let num = Math.random()     // range : 0 - 0.999999999....
// console.log(num)

// let flaotNum = 10.5
// console.log(Math.floor(flaotNum), Math.ceil(flaotNum), Math.round(flaotNum))
// console.log(Math.pow(2,5))  // 2**5
// console.log(Math.sqrt(16))
// console.log(Math.min(10, 1, 200, 400, 4))

// console.log("OTP:",  Math.round(Math.random() * 10000))


// function otpGen(num){
//     let otp_num = Math.round(num * 10000)
//     if (toString(otp_num).length == 3){
//         otp_num = Math.round(num * 100000)
//     }
//     console.log(otp_num)
//     // let OTP = Math.round()
// }

// num = Math.random()
// otpGen(num)

// console.log("OTP:", 1000 + Math.round(Math.random() * 9000))



// -------- destrcuting -----------------

let arr = [10,20,30,40,50,60]

const [n1 , ,n2, ...n3] = arr      // keyname should not matter
console.log(n1, n2, n3)            // .... is rest operator
console.log(arr)


//  obj destructing

let obj = {
    firstName : 'Toheed',
    lastName : 'Akhtar',
    address : 'udaipur',
    gender : 'Male'
}

gender = 'male'
let {firstName, lastName, address, gender:a, age=20} = obj;       // keyname should be same as in object
console.log(firstName, lastName, address, a)
console.log(age)



