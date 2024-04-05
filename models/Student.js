import mongoose from "mongoose";

// Student Schema
const StudentSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
    },

    photo : {
        type : String,
        required : true,
        trim : true,
    },

    status : {
        type : Boolean,
        default : false
    },

    trash : {
        type : Boolean,
        default : false
    }

}, {timestamps : true});

 
export default mongoose.model("Student", StudentSchema)