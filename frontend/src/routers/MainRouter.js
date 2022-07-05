import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InformacionLugarScreen } from '../components/screens/InformacionLugarScreen'
import { LugaresScreen } from '../components/screens/LugaresScreen'
import { PuntosScreen } from '../components/screens/PuntosScreen'
export const MainRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <Routes>
                
                  <Route exact path='/puntos' 
                   element={<PuntosScreen/>  }                      
                 />
                 <Route exact path='/informacion/:id' 
                   element={<InformacionLugarScreen/>  }                       
                 />
                 <Route exact path='/' 
                   element={<LugaresScreen/>  }                      
                 />
                 
                 
                 {/* <Route exact path='/*' element={<Navigate to="/"/>}/> */}
                      
            </Routes>

        </div>
    </div>
  )
}
