import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from '../actions/auth';
 import { PrivateRoute } from './PrivateRoute';
 import { PublicRoute } from './PublicRoute';


 import { Loading } from '../components/ui/Loading';
 import { app } from "../firebase/firebase-config"
import { MainRouter } from './MainRouter';
import { puntoStartLoading } from '../actions/puntos';

import { AuthRouter } from './AuthRouter';
import { lugarStartLoading } from '../actions/lugares';

export const AppRouter = () => {
  const dispatch = useDispatch();

 //Dispara el loading global

   const [checking, setchecking] = useState(true);

   //Determina si esta logeado o no
   const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const auth = getAuth(app);
          onAuthStateChanged(auth, async(user) =>{
            
            if (user?.uid) {
              dispatch( login(user.uid, user.displayName))
              dispatch( lugarStartLoading() );
              dispatch( puntoStartLoading() );
              setIsLoggedIn(true)

            }else{
              dispatch( logout())
              setIsLoggedIn(false)
            }
            setchecking(false)
          })
    }, [setIsLoggedIn, dispatch, setchecking ]);

   if (checking) {
     return(<Loading/>)
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
