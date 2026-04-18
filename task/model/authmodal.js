import mongoose from "mongoose";

const setdata = new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number

},{timestamps:true})

const newdatamodal = mongoose.model("servicedata",setdata)

export default newdatamodal