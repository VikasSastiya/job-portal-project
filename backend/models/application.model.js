import { application } from "express";
import mongoose from "mongoose";

const applicationSchema=new mongooseSchema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    application:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        ref:['pending','accepted','rejected'],
        default:'pending'
    }
},{timeseries:true});
export const Application=mongoose.model("application",applicationSchema);