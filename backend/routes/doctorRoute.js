import express from "express";
import { loginDoctor, appointmentsDoctor, appointmentCancel,appointmentComplete} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter=express.Router()

doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor, appointmentCancel)

export default doctorRouter