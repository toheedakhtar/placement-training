// // -------------- EVENTS
// sum();
// console.log(a);
// // console.log("Hello Techno")
// // sum();
// let newDiv = document.createElement("div");
// newDiv.innerHTML = "Hello Techno";
// newDiv.style.backgroundColor =  "yellow";
// document.body.appendChild(newDiv);

// let myDiv = document.getElementById("container");
// let parentDiv = document.getElementById("box1");
// parentDiv.insertBefore(newDiv , myDiv);  // newdiv, div_before_which_newdiv_istobe_inserted

// document.getElementById("button").onclick = function(){
//     let newDiv = document.createElement("div");
//     newDiv.style.width = "200px";
//     newDiv.style.height = "200px";
//     newDiv.style.backgroundColor =  "yellow";   
//     newDiv.style.border = "2px solid black";
//     newDiv.style.margin = "10px";
//     document.body.appendChild(newDiv);
// }


// document.getElementById("button").addEventListener("click",function(){
//     let newDiv = document.createElement("div");
//     newDiv.style.width = "200px";
//     newDiv.style.height = "200px";
//     newDiv.style.backgroundColor =  "yellow";
//     newDiv.style.border = "2px solid black";
//     newDiv.style.margin = "10px";
//     document.body.appendChild(newDiv);
//     })

// document.getElementById("box").addEventListener("mouseenter",function(){
//     document.getElementById("box").style.backgroundColor = "yellow";
// });

// document.getElementById("name").addEventListener("change",function(event){
//     console.log(event);
//    let fieldValue = document.getElementById("name").value;
//    console.log(fieldValue);
// })

// let obj = {}
// function getValue(e){
//     // console.log('e.target.name: ', e.target.name);
//     // console.log('e.target.value: ', e.target.value);
//     obj[e.target.name] = e.target.value;
//     console.log(obj);
// }

// document.getElementById("field1").addEventListener("change",function(event){
//     getValue(event);
// })
// document.getElementById("field2").addEventListener("change",function(event){
//     getValue(event);
// })


// ---------- hoisting
// Temporal Dead Zone(TDZ)
// these hoisted variables are in TDZ before they are initialzed and when declared.
// var a = 20;

// function sum(){
//     console.log("Inside Sum");
// }
// console.log(a);
// sum();

// variable declerad with var supports hoisting and has undefined as value,
// variable declerad with let ,const supports hoisting but have no value.


// Async JS

// Timer func
let interval = setInterval(()=>{    // executes continously, thus interval
    console.log(Math.random());
},2000);

let timeOut = setTimeout(()=>{  // executes once thus, timeout
    console.log("Hello Techno");
},5000);

document.getElementById("button").addEventListener("click",function(){
    console.log("Stop Button");

    clearInterval(interval);
    clearTimeout(timeOut);
})