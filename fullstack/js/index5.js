//  string methods
// diff bw slice, splice and split is asked in interviews.

let str = "Hello World";
let char = str.charAt(6)
console.log(char)

let newstr = str.concat(' Techno')
console.log(newstr)

let hasStr = str.includes('world');
console.log(hasStr)

// let index = str.indexOf('ld');dfsklfjjfd
let index = str.lastIndexOf('l');
console.log(index)

let newStr = str.slice(-5);  // accepts -tive value also
console.log(newStr)

let newStrsub = str.substring(4 , 8);
console.log(newStrsub)

let lcstr = str.toLowerCase()
let ucstr = str.toUpperCase()
console.log(lcstr, ucstr)

// split
let splitstr = str.split("o")
console.log(splitstr)

let str1 = "     Hello World";
let trimmedStr = str.trim();
console.log(trimmedStr)

let strrplce = str.replace("World", "Universe")
console.log(strrplce)

let strrpt = str.repeat(3)
console.log(strrpt)

//  these above methods doesnot touch original methods.

