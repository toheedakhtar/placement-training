const User = require("../model/user")
const bcrypt = require("bcrypt")

exports.signup = async (req,res)=>{
    try {
        const { name , email , password , phoneNumber } = req.body;
        const isExisting = await User.findOne({email : email});
        if(isExisting){
            return res.status(400).send({message  : "User Already Exist"});
        }
        
        const newUser = new User({name : name , email : email , password : password, phoneNumber  : phoneNumber});
        console.log('hello')
        
        await newUser.save();

        res.status(201).send({message : "Account created"});
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const isExisting = await User.findOne({email : email});

        if (!isExisting){
            return res.status(400).send({message : "User not found"})
        };
        
        const isMatched = await bcrypt.compare(password, isExisting.password);

        if (!isMatched){
            return res.status(401).send({message : "Wrong Password"})
        }

        res.status(200).send({messafe : "User Logged In!", data: isExisting})


    } catch (error) {
        res.status(500).send({error});
    }
}