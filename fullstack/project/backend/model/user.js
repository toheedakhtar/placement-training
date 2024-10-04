const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = mongoose.Schema({
    googleId : {
        type : String,
        default : null
    },
    name :{
        type : String,
        required : [true, "Name is required"],
        minlength : [3, "Name should be atleast 3 character long"], 
        maxlength:[50, "Name cannot exceed 50 characters"],
        validate:{
            validator : function(value){
                return validator.isAlpha(value, "en-US", {ignore:" "})
            },
            message : "name should be in string"
        }
    },
    email: {
        type: String, 
        required : [true, "Email is required"],
        unique : true,
        // validator is used
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            message : "Email should be in valid format"
        }
    },
    password:{
        type: String,
        required : function(){
            return !this.googleId
        },
        maxlength :[128, 'must be less than 128 char'],
        validate : {
            validator : function(value){
                if(this.googleId) return true;
                return validator.isStrongPassword(value,{
                    minLength:8, 
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers:1,
                    minSymbols:1
                })
            },
            message : "Password must be stronger"
        }
    },
    phoneNumber : {
        type:String,
        required : function(){
            return !this.googleId
        },
        validate : {
            validator : function(value){
                if(this.googleId) return true
                return validator.isMobilePhone(value, 'en-IN')
            },
            message : "Phone number should be valid"
        }
    },
    role :{
        type : String,
        required: [true, "Role is required"],
        enum : ["User", "Admin"],
        default : "User"
    }
})

userSchema.pre("save", async function(next){
    try {
        const user = this;
        // check for updation
        if(!user.isModified("password") || user.googleId) return next();
        const hashedPassword = await bcrypt.hash(user.password, 12);
        user.password = hashedPassword;
        next();
    } catch (error){
        next(error);
    }
})

module.exports = mongoose.model("User", userSchema)