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

// let firstName = prompt('Enter your FirstName: ')
// console.log(firstName)


// task
let username = prompt('Enter username: ')
let password = +prompt('Enter Password: ')

if (username === 'admin' && password === 123){
    console.log('Auth Successful')
}
else{
    console.log('Auth Failed')
}