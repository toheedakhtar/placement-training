const User = require('../model/user')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


exports.signup = async (req,res,next) => {
    try {
        const {name , email, password, phoneNumber, role} = req.body;
        const isExisting = await User.findOne({email:email});
        console.log(isExisting)
        if(isExisting){
            const error = new Error("User already exist.");
            error.name = "ExisitingUserError";
            error.statusCode = 400;
            throw error;
        }

        // const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({name : name, email:email, password:password, phoneNumber:phoneNumber, role});

        // console.log('hello')

        await newUser.save();
        res.status(201).send({message:"Account Created", data:newUser});

    } catch (error) {
        // console.log(error.name)
        next(error);
    }
}


exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const isExisting = await User.findOne({email:email})

        if (!isExisting){
            const error = new Error("UserNotFound");
            error.statusCode = 404
            throw error;
        }

        const isMatched = await bcrypt.compare(password, isExisting.password);

        if(!isMatched){
            const error = new Error("InvalidPassword")
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({id : isExisting._id, email: isExisting.email, role:isExisting.role}, "your_jwt_secret", {expiresIn : "1h"})

        res.status(200).send({message: "User logged In", data: isExisting, token:token})

    } catch (error) {
        next(error)
    }
}


// let obj = {
//     firstName : "shubham",
//     lastName : "Jain",
// }

// Object.values(obj)