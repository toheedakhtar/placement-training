//  conditional statemnets

// let count = 20;

// if (count === 20){
//     console.log('The count is 20')
// }
// else if (count > 20){
//     console.log('count is greater than 20')
// }
// else {
//     console.log('count is not 20')
// }

// let firstName = prompt('Enter your Firs tName: ')
// console.log(firstName)

// task
// let username = prompt('Enter username: ')
// let password = +prompt('Enter Password: ')

// if (username === 'admin' && password === 123){
//     console.log('Auth Successful')
// }
// else{
//     console.log('Auth Failed')
// }

// ternary operator -> needs else, standard if can be xecuted alone
// username === 'admin' && password === 123 ? console.log("Auth Success") : console.log("Auth Fail")


// ternary chaining

// let count = 18
// count === 20 ? console.log('the count is 20') : count > 20 ? console.log('Count is greater than 20') : console.log('count is less than 20')


// switch cases


let dayNumber = 3;

switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;

    case 2:
        dayName = 'Tuesday';
        break;

    case 3:
        dayName = 'Wednesday';
        break;
    
    case 4:
        dayName = 'Thursday';
        break; 

    case 5:
        dayName = 'Friday';
        break; 

    case 6:
        dayName = 'Sat';
        break; 
                    
    default:
        console.log('invalid')
        break;
}

console.log(dayName)

// functions

// function sum(){
//     console.log('This is a sum funciton')
// }

// const sum = function sum(){
//     console.log('This is a sum funciton')
// }

// sum()
// sum();

//  arrow functions

const sum = () => {
    console.log('this is a arrow function');
}
sum();

// func with return and params

function sum_r(a,b){
    return a+b
}
// calling by passing args
sum_r(2,3)

let result = sum_r(5,5);
console.log(result)


const add = (a,b)=>a+b;
console.log(add(2,2))




