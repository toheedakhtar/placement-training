const User = require("../model/user")
exports.signup = async (req,res)=>{
    try{
       const {name, email , password , phoneNumber}=req.body;
       const isExisting = await  UserActivation.findOne({email : email});
       if(isExisting)
       {
        res.status(400).send({messeage : "user Already exit"});
       }

       const newUser = new User({name : name,email:email,password:password,phoneNumber:phoneNumber});

       await newUser.save();
       res.status(201).send({messege:"account created"});

    }
    catch(error){
        if(error.name==="validationError"){
            const errors = Object.values(error.errors).map(error=>error.messege);
            res.status(400).json({messege:"validation Error",error :error})
        }
      res.status(500).send(error);
    }
}