// 1. **Basic `setTimeout`:**
// - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use
// `setTimeout` to log the message to the console after the specified delay.

// const delayedMessage = (msg, delay) => {
//     setTimeout(()=>{
//         console.log(msg)
//     }, delay)
// }

// delayedMessage('this is message', 1000)
// delayedMessage('this is message2', 3000)

// -------------------------------------------------------------------------------------------------------------------------

// 6. **Chaining Promises:**
// - Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function
// should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.

// let data = [
//     {
//     messgae : "This is a message with 1000s",
//     delay : 1000
//     },
//     {
//         messgae : "This is a message2 with 2000s",
//         delay : 2000
//     },
//     {
//         messgae : "This is a message3 with 3000s",
//         delay : 3000
//     }
// ]

// function delayedLogSequence(data){
//     return new Promise((resolve, reject) => {
//         resolve(data)
//     })
// }
// delayedLogSequence(data)
// .then((data)=>{
//     return data
// })
// .then((data)=>{
//     data.forEach(item => {
//         // console.log(item)
//         setTimeout(() => {
//             console.log(item.messgae)
//         }, item.delay)
//     });
// })
// .catch((err)=>{
//     console.log(err)
// })

// ---------------------------------------------------------------------------------------------------------------

// 7. **Using `async/await` with Promises:**
// - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
// function logs each message with the specified delay.

// let data = [
//     {
//     messgae : "This is a message with 1000s",
//     delay : 1000
//     },
//     {
//         messgae : "This is a message2 with 2000s",
//         delay : 2000
//     },
//     {
//         messgae : "This is a message3 with 3000s",
//         delay : 3000
//     }
// ]


// async function delayedLogSequence(data){
//     let res = await data;
//     res.forEach((item)=>{
//         setTimeout(()=>{
//             console.log(item.messgae)
//         }, item.delay)

//     })
// }

// delayedLogSequence(data)

// ----------------------------------------------------------------------------------------------------------------------
// 8. **Combining `setTimeout` and Promises:**
// - Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
// and 5 seconds. Use `setTimeout` and a Promise to implement this.

let data = [
    {
    messgae : "This is a message with 1000s",
    },
    {
        messgae : "This is a message2 with 2000s",
    },
    {
        messgae : "This is a message3 with 3000s",
    },
    {
        messgae : "This is a message2 with 2000s",
    },
    {
        messgae : "This is a message3 with 3000s",
    },
    {
        messgae : "This is a message2 with 2000s",
    },
    {
        messgae : "This is a message3 with 3000s",
    }
    
]

function randomDelayMessage(data){
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

console.log(randomDelayMessage())
randomDelayMessage(data)
.then(()=>{
    // let delay = 2
    data.forEach((item)=>{
        let delay = Math.random() * (5000-1000) + 1000
        setTimeout(()=>{
            console.log(item.messgae, delay)
        }, delay)
    })
})
