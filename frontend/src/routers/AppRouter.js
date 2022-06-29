import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
 import { PrivateRoute } from './PrivateRoute';
 import { PublicRoute } from './PublicRoute';


 import { Loading } from '../components/ui/Loading';
 import { app } from "../firebase/firebase-config"
import { MainRouter } from './MainRouter';


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
             setIsLoggedIn(true)

           }else{
             setIsLoggedIn(false)
           }
           setchecking(false)
         })
   }, [dispatch, setchecking, setIsLoggedIn]);

   if (checking) {
     return(<Loading/>)
   }
  
  return (
 
    
            <Router>
                <Routes>
                    <Route path="/" element={
                        <PrivateRoute isAuth={isLoggedIn}>
                                <MainRouter/>
                      
                        </PrivateRoute>
                        
                    }/>
                    <Route 
                        path="/*" 
                        element={
                          
                          <PublicRoute isAuth={isLoggedIn}>
                              <AuthRouter/>
                          </PublicRoute>
                            
                            
                    
                    }/>

                    
                </Routes>

            </Router>
  )
}
