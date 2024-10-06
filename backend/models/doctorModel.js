import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name:{type:String, reqired:true},
    email:{type:String, reqired:true, unique:true},
    password:{type:String, reqired:true},
    image:{type:String, reqired:true},
    speciality:{type:String, reqired:true},
    degree:{type:String, reqired:true},
    experience:{type:String, reqired:true},
    about:{type:String, reqired:true},
    available:{type:Boolean, default:true},
    fees:{type:Number, reqired:true},
    address:{type:Object, reqired:true},
    date:{type:Number, reqired:true},
    slots_booked:{type:Object, default:{}},
},{minimize:false})

const doctorModel =mongoose.models.doctor || mongoose.model('doctor',doctorSchema)

export default doctorModel