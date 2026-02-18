import { Schema, model } from 'mongoose';

const servicesSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    imgUrl:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    rating:{
        type:String,
    },
  
},
{ timestamps: true }
);

const Service = model('Service',servicesSchema);

export default Service;