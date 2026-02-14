import { Schema, model } from mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String
    },
    role:{
        type:String,
        enum: ["user", "admin"],
        default: "user"
    },
},

{ timestamps: true }

);

const User = model('User', UserSchema);

export default User;
