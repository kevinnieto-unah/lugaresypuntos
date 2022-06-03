import React from 'react'
import {  BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { LugaresScreen } from '../components/screens/LugaresScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'


export const AppRouter = () => {
 


  return (
    <div>
        <Router>
           
                    <div>
                    <Routes>
                        <Route exact path='/login' element={ <LoginScreen/> } 
                        />
                        <Route exact path='/register' element={ <RegisterScreen/> } 
                        />
                        <Route exact path='/' 
                          element={<LugaresScreen/>  }                      
                        />
                    </Routes>
                    </div>

            </Router>
    </div>
  )
}
