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

// -----------------------------------  PROMISES  ; launched in ES6 to tackle call back hell as it is complex , not scalable
// - object which contains multiple values,
// - either fullfillled or broken or in pending state,
// - no data ingested - pending state
// - gotten data - fulfilled state
// - some problem while getting data - pending state
// - also a constrcutor func

// function fetchData(){
//     return new Promise((resolve, reject) => {       // new keyword for constructor
//         setTimeout(()=>{
//             try {
//                 let data = {
//                     firstName : 'Toheed',
//                     lastName : 'Akhtar',
//                 };
//                 return resolve(data);
//             }
//             catch(error){
//                return reject(error);
//             }
//         }, 2000);
//     })
// }
// fetchedData = fetchData();
// console.log(fetchedData);

// fetchedData
// // pending -> fullfileed 
// .then((data) => {
//     console.log(data)
// })     // no semicolon (;)
// // pending -> error
// .catch((data) => {
//     console.log(data);
// })   




//  fetchapi
// let fetchedDataObj;

// function fetchData(){
//     let data = fetch('https://fakestoreapi.com/products');
//     console.log('Next step after fetching..!');         // this will run before fetch, this is bad!
//     return data;
// }

// let fetchedData = fetchData();
// console.log(fetchedData);   // a promise

// fetchedData
// .then((res)=>{
//     // console.log(res.json())      
//     return res.json();      // is a promise -> to pass to next .then 
// })
// .then((data) => {
//     prodDiv = document.getElementById('products');
//     cardDiv = document.createElement("div");
    
//     data.forEach(dataItem => {
//     cardDiv = document.createElement("div")
//     cardDiv.innerHTML = `
//     <h1>${dataItem.title}</h1>
//     <img src=${dataItem.image} width=300 height=300>
//     <h2>${dataItem.price}</h2>
//     <p>${dataItem.description}</p>
//     <p>${dataItem.category}</p>
//     <p>${dataItem.rating.rate}</p>`;
    
//     cardDiv.className= "cards";
//     prodDiv.append(cardDiv);
// });
// })
// .catch((err)=> {
//     console.log(err)
// })



//  ---------------------------------------------------- ASYNC , AWAIT
// async functon --> returns promise
// async - await --> waits until the await line is executed before executing next

async function fetchData() {    // asynchronous function
    try {
        let res = await fetch('https://fakestoreapi.com/products');     // awaits for completion before executing next lines.
        let data = await res.json();
        // return data;
        document.getElementById('btn').addEventListener("click", function(){
            data.forEach((dataitem)=>{
                console.log(dataitem)
            })
        })
    }
    catch(error){
        return error;
    }
}
let data = fetchData();
console.log(data);

// const fetchData = async () => {
//     let res = await fetch('https://fakestoreapi.com/products');     // awaits for completion before executing next lines.
//     let data = await res.json();
//     console.log(data)
//     return data;
// }

// console.log(fetchData)









