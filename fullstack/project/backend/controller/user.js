const User = require('../model/user')

exports.signup = async (req,res) => {
    try {
        const {name , email, password, phoneNumber} = req.body;
        const isExisting = await User.findOne({email:email});
        console.log(isExisting)
        if(isExisting){
            res.status(400).send({message: "User Already Exists"});
        }

        const newUser = new User({name : name, email:email, password:password, phoneNumber:phoneNumber});

        await newUser.save();
        res.status(201).send({message:"Account Created"});

    } catch (error) {
        // console.log(error.name)
        if (error.name === "ValidationError"){
            const errors = Object.values(error.errors).map(error => error.message)
            return res.status(400).json({message: "Validation Error", error : errors});

        }
        res.status(500).send(error);
    }
}

// let obj = {
//     firstName : "shubham",
//     lastName : "Jain",
// }

// Object.values(obj)