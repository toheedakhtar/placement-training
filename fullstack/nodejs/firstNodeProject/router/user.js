const express = requite("express")
const users  = require('../users')
const fs = require("fs")
const router = express.Router();

router.get("/users", (req, res)=>{
    res.send({message : 'User Fetched', data: users})
})

router.post("/users", (req, res)=>{
    res.send({message : 'User Fetched', data: users})
})

router.update('/users/"id', (req, res)=>{
    const data = req.body;
    const modifiedData = {id : users.length + 1, ...data}
    users.push(modifiedData)
    res.send({message : "user created", data : data })
})

router.delete("/users/:id", (req,res)=>{
    const userIndex = users.findIndex(item => item.id === +id);
    if (userIndex === -1) {
        return res.send({message : 'user not defined..'})

    }
    const user = users.splice(userIndex, 1);
    res.send({message : 'User deleted', data : user})

});

module.exports = router;

//  Module , view , controller
// index.js >> 