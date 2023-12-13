// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    mobile: {
        type:String,
        required:true
    },
    type: [{
        type:String,
        required:true
    }],
    activityType: {
        type:String,
        required:true
    },
    commercialRegister: {
        type:String,
        required:true
    },
    taxNumber: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    region: {
        type:String,
        required:true
    },
    place: {
        type:String,
        required:true
    },
    // startDate: Date,
    // endDate: Date,
    // contact: String,

});

const User = mongoose.model("User", userSchema);

export default User
