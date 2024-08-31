// 1. **Basic `setTimeout`:**
// - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use
// `setTimeout` to log the message to the console after the specified delay.

const delayedMessage = (msg, delay) => {
    setTimeout(()=>{
        console.log(msg)
    }, delay)
}

delayedMessage('this is message', 1000)
delayedMessage('this is message2', 3000)


// -------------------------------------------------------------------------------------------------------------------------

// 2. **Basic `setInterval`:**
// - Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown
// from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero.

let countdown = (num) => {
    let intr = setInterval(() => {
        console.log(num)
        if (num == 0){
            clearInterval(intr);
        }
        num--;
    }, 1000);
}

countdown(5)


// -------------------------------------------------------------------------------------------------------------------------

// 3. **Clearing Intervals:**
// - Extend the `countdown` function from the previous question to also accept a callback function that gets executed
// when the countdown reaches zero. Ensure the interval is cleared after the countdown completes

function stopCountdown(num, intr){
    if (num == 0){
        clearInterval(intr)
    }
}

let countdown = (num, callback) => {
    let intr = setInterval(() => {
        stopCountdown(num, intr)
        console.log(num)
        num--;
    }, 1000);

}

countdown(5, stopCountdown)

// -------------------------------------------------------------------------------------------------------------------------

// 4. **Using Promises with `setTimeout`:**
// - Write a function called `wait` that returns a Promise. The Promise should resolve after a delay (in milliseconds) that is
// passed as an argument to the function. Test this function by logging a message to the console once the promise
// resolves.

let wait = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
            console.log('Promise resolved..')
        }, delay)
    })
}

wait(1000);


// -------------------------------------------------------------------------------------------------------------------------

// 5. **Promise-based Countdown:**
// - Refactor the `countdown` function to return a Promise that resolves when the countdown completes. Use the `wait`
// function from the previous question to handle the delay between countdown steps.

function stopCountdown(num, intr){
    if (num == 0){
        clearInterval(intr)
        return new Promise((resolve, reject) => {
            resolve();
            console.log('resolved....')
        })
    }
}

let countdown = (num, callback, delay) => {
    let intr = setInterval(() => {
        console.log(num)
        callback(num, intr)
        num--;
    }, delay);
    

}

let wait = (delay) => {
    return new Promise((resolve, reject)=> {
        resolve();
        countdown(5, stopCountdown, delay)
    })
}

wait(1000);


// -------------------------------------------------------------------------------------------------------------------------

// 6. **Chaining Promises:**
// - Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function
// should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.

let data = [
    {
    messgae : "This is a message with 1000s",
    delay : 1000
    },
    {
        messgae : "This is a message2 with 2000s",
        delay : 2000
    },
    {
        messgae : "This is a message3 with 3000s",
        delay : 3000
    }
]

function delayedLogSequence(data){
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}
delayedLogSequence(data)
.then((data)=>{
    return data
})
.then((data)=>{
    data.forEach(item => {
        // console.log(item)
        setTimeout(() => {
            console.log(item.messgae)
        }, item.delay)
    });
})
.catch((err)=>{
    console.log(err)
})

// ---------------------------------------------------------------------------------------------------------------

// 7. **Using `async/await` with Promises:**
// - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
// function logs each message with the specified delay.

let data = [
    {
    messgae : "This is a message with 1000s",
    delay : 1000
    },
    {
        messgae : "This is a message2 with 2000s",
        delay : 2000
    },
    {
        messgae : "This is a message3 with 3000s",
        delay : 3000
    }
]


async function delayedLogSequence(data){
    let res = await data;
    res.forEach((item)=>{
        setTimeout(()=>{
            console.log(item.messgae)
        }, item.delay)

    })
}

delayedLogSequence(data)

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
    data.map((item, i)=>{
        let delay = Math.round(Math.random() * (5000-1000) + 1000)
        setTimeout(()=>{
            console.log(item.messgae, delay)
        }, delay)
    })
})

// -------------------------------------------------------------------------------------------------------------------------

// 9. **Using `setInterval` with Promises:**
// - Write a function called `repeatAction` that takes an action (a function), an interval (in milliseconds), and a duration (in
// milliseconds). Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified
// duration. Return a Promise that resolves when the repeating action stops.

function action(){
    console.log('executing action...');
}

let repeatAction = (action, interval, duration)=>{
    let rep = setInterval(()=>{
        action(duration, rep);
    }, interval)

    setTimeout(()=> {
        clearInterval(rep);
        return new Promise((resolve, reject) => {
            resolve();
            console.log('resolved.....')
        })
    }, duration)
    
}

repeatAction(action, 1000, 5000)


