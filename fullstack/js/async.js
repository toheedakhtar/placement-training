// let a = 20;
// let b = 30;
// console.log(a + b)
// setTimeout(()=> {
//     console.log('Hello World')  // will run afterwards of 2000 ms
// }, 0);
// setTimeout(()=> {
//     console.log('Second timeout')  // will run afterwards of 2000 ms
// }, 1000);
// console.log(a)
// console.log(b)

//  promises

function step1(callback){
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000)
}

function step2(callback){
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000)
}

function step3(callback){
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000)
}

step1(()=>{
    step2(() => {
        step3(()=>{
            console.log('All steps completed.')
        })
    })
})
