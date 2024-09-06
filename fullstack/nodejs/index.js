var http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        res.end('Home Page');
        event.emit("homePageAccessed")

    }
    else if(req.url == '/about'){
        res.end('about')
        event.emit("aboutPageAccessed")
    }
    else{
        res.end('unkown')
        event.emit("unkownRouteAccessed", req.url)
    }
    // res.writeHead(200, {'Content-Type': 'text/html'});
});


server.on("request",(req,res)=>{
    if(req.url != '/favicon.ico'){
        console.log("Request Event", req.url)
    }
});

// setTimeout(()=>{
//     server.close();
// }, 5000)

server.on("connection", (socket)=>{
    console.log('connection')
})

server.on("close", ()=>{
    console.log("Server closed")
})


const EventEimtter = require("events");
// console.log(EventEimtter)
const event = new EventEimtter()

event.on("homePageAccessed", ()=>{
    console.log('home page is accessd.')
})
event.on("aboutPageAccessed", ()=>{
    console.log('about page is accessd.')
})
event.on("unkownRouteAccessed", (url)=>{
    if(url != '/favicon.ico'){
        console.log('unkown route', url)
    }
})

// console.log(event)

// event.on("myName", (name, age)=>{    // defining an event
//     console.log(`The name is ${name} and age is ${age}`)
// })

// event.on("myName", (name, age)=>{    // defining an event
//     console.log(`The name is ${name} and age is ${age}, 2`)
// })


// event.on("myName", (name, age)=>{    // defining an event
//     console.log(`The name is ${name} and age is ${age}, 3`)
// })

// event firing / calling
// event.emit("myName", "toheed", 20)

server.listen(3000, "127.0.0.1", ()=> {
    console.log("server is running on port 3000")
})

