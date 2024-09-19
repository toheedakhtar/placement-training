const mongoose = require('mongoose')
const validator = require(  'validator')

const userSchema = mongoose.Schema({
    name : {
        type : String, 
        required : [true, "Name is required"],
        minlength : [3, "Name should be atleast 3 characters long"],
        maxlength : [50, "Name cannot be more than 50 characters"],
    },
    email: {
        type : String, 
        required : [true, "Email is required"],
        unique : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            // will run if returns False
            message : "Email should be in valid format"
        }
    },
    password : {
        type: String, 
        requrired : [true, "Password is required"],
        minlength : [8, "Password must be atleast 8 characters long"],
        maxlength : [128, "Password cannot be more than 128 characters"],
        validate : {
            validator : function(value){
                return validator.isStrongPassword(value, {
                    monLength : 8,
                    minLowercase : 1,
                    minUppercase : 1,
                    minNumbers : 1,
                    minSymbols : 1
            })
        },
            // will run if returns False
            message : "Password must be stronger"
    },    
    phoneNumber: {
        type : String, 
        required : [true, "Email is required"],
        unique : true,
        validate : {
            validator : function(value){
                return validator.isMobilePhone(value)
            },
            // will run if returns False
            message : "Email should be in valid format"
        }
    },

    }
})

module.exports = mongoose.model("User", userSchema);