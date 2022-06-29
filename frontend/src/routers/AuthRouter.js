import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'


export const AuthRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <Routes>
                      <Route exact path='/auth/login' element={<LoginScreen/>}/>
                      <Route exact path='/auth/register' element={<RegisterScreen/>}/>
                      <Route exact path='/auth/*' element={<Navigate to="/auth/login"/>}/>
            </Routes>

        </div>
    </div>
  )
}
