// import mongoose from "mongoose";

// const appointmentSchema = new mongoose.Schema({
//     userId:{type:String, reqired:true},
//     docId:{type:String, reqired:true, unique:true},
//     slotDate:{type:String, reqired:true},
//     slotTime:{type:String, reqired:true},
//     userData:{type:Object, reqired:true},
//     docData:{type:Object, reqired:true},
//     amount:{type:Number, reqired:true},
//     date:{type:String, reqired:true},
//     cancelled:{type:Boolean, default:true},
//     payment:{type:Number, reqired:true},
//     isCompleted:{type:Object, reqired:true},
    
// },)

// const appointmentModel =mongoose.models.doctor || mongoose.model('appointment',appointmentSchema)

// export default appointmentModel

import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    userData: { type: Object, required: true },
    docData: { type: Object, required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    cancelled: { type: Boolean, default: false }, // Changed to false
    payment: { type: Number, required: true },
    isCompleted: { type: Boolean, required: true }, // Changed to Boolean
});

// Set a unique index on the combination of docId, slotDate, and slotTime
appointmentSchema.index({ docId: 1, slotDate: 1, slotTime: 1 }, { unique: true });

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);

export default appointmentModel;
