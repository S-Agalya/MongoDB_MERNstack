import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'


//API for doctor login

const loginDoctor= async (req,res) =>{
    try {
        const {email,password}=req.body
        const doctor = await doctorModel.findOne({email})
        if(!doctor){
            return res.json({success:false,message:'Invalid Credentials'})
        }

        const isMatch=await bcrypt.compare(password,doctor.password)
        if(isMatch){
            const token=jwt.sign({id:doctor._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:'Invalid Credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    
    }
}

//APIT to get doctor Appointments for doctor panel

const appointmentsDoctor = async(req,res)=>{
    try {

        const {docId} =req.body
        const appointments =await appointmentModel.find({docId})

        res.json({success:true,appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to mark appointment completed for doctor panel

const appointmentComplete = async (req,res)=>{
    try {
        const {docId,appointmentId}=req.body

        const appointmentData=appointmentModel.findById(appointmentId)
         if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findById(appointmentId,{isCompleted:true})
            return res.json({success:true, message:'Appointment Completed'})
         } else{
            return res.json({success:false, message:'Mark Failed'})
         }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to cancel appointmewnt for doctor panel
const appointmentCancel = async (req,res)=>{
    try {
        const {docId,appointmentId}=req.body

        const appointmentData=appointmentModel.findById(appointmentId)
         if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findById(appointmentId,{cancelled:true})
            return res.json({success:true, message:'Appointment Cancelled'})
         } else{
            return res.json({success:false, message:'Cancellation Failed'})
         }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api to get dashboard data for doctor panel

const doctorDashboard= async(req,res)=>{
     try {
        const {docId}=req.body

        const appointments = await appointmentModel.find({docId})
        let earnings = 0

        appointments.map((item)=>{
            if(item.isCompleted || item.payment){
                earnings += item.amount
            }
        })

        let patients=[]

        appointments.map((item)=>{
               if(patients.includes(item.userId)){
                patients.push(item.userId)
               }
        })
        
        const dashData={
            earnings,
            appointments:appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse().slice(0,5)

        }

        res.json({success:true, dashData})

     } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
     }
}

//api to get doctor profile for doctor panel

const doctorProfile = async (req,res)=>{
    try {
        const {docId} =req.body
        const profileData=await doctorModel.findById(docId).select('-password')

        res.json({success:true,profileData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api to update doctor profile data from doctor panel

// const updateDoctorProfile=async (req,res) =>{

//     try {
//         const {docId,fees,address,available}
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }

export {loginDoctor,appointmentsDoctor,appointmentCancel,appointmentComplete,doctorDashboard}