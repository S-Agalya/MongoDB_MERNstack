import React, { useContext } from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext'
import { ToastContainer } from 'react-toastify'
import Allappointments from './pages/admin/Allappointments'
import { DoctorContext } from './context/DoctorContext'
import { Route, Routes } from 'react-router-dom';
import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorAppointment from './pages/Doctor/DoctorAppointment'
import DoctorProfile from './pages/Doctor/DoctorProfile'


const App = () => {

  const {aToken} = useContext(AdminContext)

  const {dToken}=useContext(DoctorContext)
   return aToken || dToken?(
    <div>
      <ToastContainer/>
      <div>
        <Routes>

        </Routes>
      </div>
    </div>
   ):(
    <>
    <Routes>
      {/* Admin routes */}
    <Route path='/' element={<></>}/>
    <Route path='/all-appointments' element={<Allappointments/>}/>
    <Route path='/all-appointments' element={<Allappointments/>}/>

    {/* Doctor Route */}
    <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
    <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>
    <Route path='/doctor-Profile' element={<DoctorProfile/>}/>

    </Routes>
    
    
    </>
   )
  return (
    <div>
      <Login/>
   
    </div>
  )
}

export default App
