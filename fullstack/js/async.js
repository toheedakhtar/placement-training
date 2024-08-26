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


//  ----------------------- callbacks
// function step1(callback){
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000)
// }

// function step2(callback){
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         callback();
//     }, 1000)
// }

// function step3(callback){
//     setTimeout(() => {
//         console.log("Step 3 completed");
//         callback();
//     }, 1000)
// }

// // ------------ call back hell
// step1(()=>{
//     step2(() => {
//         step3(()=>{
//             console.log('All steps completed.')
//         })
//     })
// })

// --------------  PROMISES  ; launched in ES6 to tackle call back hell as it is complex , not scalable
// - object which contains multiple values,
// - either fullfillled or broken or in pending state,
// - no data ingested - pending state
// - gotten data - fulfilled state
// - some problem while getting data - pending state
// - also a constrcutor func

function fetchData(){
    return new Promise((resolve, reject) => {       // new keyword for constructor
        setTimeout(()=>{
            try {
                let data = {
                    firstName : 'Toheed',
                    lastName : 'Akhtar',
                };
                return resolve(data);
            }
            catch(error){
                reject(error);
            }
        }, 2000);
    })
}

console.log(fetchData());



