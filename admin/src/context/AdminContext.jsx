import {createContext, useState} from 'react'
import axios from 'axios'
export const AdminContext = createContext()
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AdminContextProvider =(props)=>{
    const [aToken,setAToken]=useState('')
    const [appointments,setAppointments] = useState([])
    const backendUrl=import.meta.env.BAC
    const [dashData,setDashData]=useState(false)
    
    const getAllAppointments = async() =>{
       try {
        const {data} = await axios.get(backendUrl+'/api/admin/appointments',{headers:{aToken}})
        

        if(data.success){
          setAppointments(data.appointments)
          console.log(data.appointments)
        } else{
          toast.error(data.message)
        }
       } catch (error) {
        toast.error(error.message)
       }
    }

    const cancelAppointment= async (appointmentId) =>{
      try {

        const {data}=await axios.post(backendUrl+ '/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}} )

        if(data.success){
          toast.success(data.message)
          getAllAppointments()
        }else{
          toast.error(data.message)
        }
        
      } catch (error) {
        toast.error(error.message)
      }
    }

     const getDashData=async ()=>{
        try {
          
          const {data}=await axios.get(backendUrl + '/api/admin/dashboard',{headers:{aToken}})
           if(data.success){
            setDashData(data.dashData)
            console.log(data.dashData);
            
           }else{
                toast.error(data.message)
           }
        } catch (error) {
          toast.error(error.message)
        }
     }


   const value ={
     aToken,setAToken,
     appointments,setAppointments,
     getAllAppointments,
    cancelAppointment,
    dashData,getDashData
   }
  return (
    <AdminContext.Provider value={value}>
        {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider