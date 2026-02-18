import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
    userid: {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    serviceid: {
        type: Schema.Types.ObjectId,
        ref : "Service",
        required: true
    },
    type:{
        type: String,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type : String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending"
    }
},
{ timestamps: true }
);

const Booking = model('Booking', appointmentSchema);

export default Booking;