import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../actions/auth';
 import { PrivateRoute } from './PrivateRoute';
 import { PublicRoute } from './PublicRoute';


 import { Loading } from '../components/ui/Loading';
 import { app } from "../firebase/firebase-config"
import { MainRouter } from './MainRouter';
import { puntoStartLoading } from '../actions/puntos';

import { AuthRouter } from './AuthRouter';
import { lugarStartLoading } from '../actions/lugares';
import { startLoading, finishLoading } from '../actions/ui';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const { loadingLugar } = useSelector( state => state.lugares );
  const { loadingPunto } = useSelector( state => state.puntos );
  const { loadingTemporal } = useSelector( state => state.temporales );

 //Dispara el loading global

   //Determina si esta logeado o no
   const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      
      const auth = getAuth(app);
          onAuthStateChanged(auth, async(user) =>{
            
            if (user?.uid) {
              dispatch(startLoading())
              dispatch( login(user.uid, user.displayName))
              dispatch( lugarStartLoading() );
              dispatch( puntoStartLoading() );
              setIsLoggedIn(true)

            }else{
              dispatch( logout())
              setIsLoggedIn(false)
            }
            dispatch(finishLoading())
          })
    }, [setIsLoggedIn, dispatch  ]);

   if (loading) {
     return(<Loading/>)
   }
   if (loadingLugar) {
     return(<Loading/>)
   }
   if (loadingPunto) {
     return(<Loading/>)
   }
   if (loadingTemporal) {
     return(<h1>Espere...</h1>)
   }
  
  return (
 
    
            <Router>
                <Routes>
                <Route 
                        path="/auth/*" 
                        element={
                          
                          <PublicRoute isAuth={isLoggedIn}>
                              <AuthRouter/>
                          </PublicRoute>
                      
                    }/>
                    <Route path="/*" element={
                        <PrivateRoute isAuth={isLoggedIn}>
                              <MainRouter/>
                      
                        </PrivateRoute>
                        
                    }/> 
                    
                    
                    
                    
                
                    
                   
                    {/* <Route 
                        path="/auth/login" 
                       
                         element={<LoginScreen/>}
                     
                    /> */}
                    
                    
                </Routes>

            </Router>
  )
}
