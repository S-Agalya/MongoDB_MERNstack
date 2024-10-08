import React from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext'
import { ToastContainer } from 'react-toastify'
import Allappointments from './pages/admin/Allappointments'

const App = () => {

  const {aToken} = useContext(AdminContext)
   return aToken ?(
    <div>
      <ToastContainer/>
      <div>
        <Routes>

        </Routes>
      </div>
    </div>
   ):(
    <>
    <Route path='/' element={<></>}/>
    <Route path='/all-appointments' element={<Allappointments/>}/>
    </>
   )
  return (
    <div>
      <Login/>
   
    </div>
  )
}

export default App
