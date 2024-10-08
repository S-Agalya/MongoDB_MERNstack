import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId:{type:String, reqired:true},
    docId:{type:String, reqired:true, unique:true},
    slotDate:{type:String, reqired:true},
    slotTime:{type:String, reqired:true},
    userData:{type:Object, reqired:true},
    docData:{type:Object, reqired:true},
    amount:{type:Number, reqired:true},
    date:{type:String, reqired:true},
    cancelled:{type:Boolean, default:true},
    payment:{type:Number, reqired:true},
    isCompleted:{type:Object, reqired:true},
    
},)

const appointmentModel =mongoose.models.doctor || mongoose.model('appointment',appointmentSchema)

export default appointmentModel