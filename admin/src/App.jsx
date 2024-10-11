import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from 'react-router-dom';
import { AdminContext } from './context/AdminContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import AddDoctor from './pages/admin/AddDoctor';
import DoctorsList from './pages/admin/DoctorsList';
import Dashboard from './pages/admin/Dashboard';
import Allappointments from './pages/admin/Allappointments';



const App = () => {

 const {aToken}=useContext(AdminContext)
  return aToken ? (
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<Allappointments/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>
   

        </Routes>
      </div>
    </div>
  ):(
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
}

export default App
