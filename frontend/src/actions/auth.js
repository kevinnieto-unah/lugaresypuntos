import  {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { types } from "../types/types"
import { app } from "../firebase/firebase-config"
import { finishLoading, startLoading } from "./ui";

import Swal from 'sweetalert2'


export const startLoginEmailPassword =(email, password) =>{
    return (dispatch)=>{
        dispatch(startLoading())
        
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch( login(user.uid, user.displayName))
                dispatch( finishLoading() )
            })
            .catch((error) => {
                console.log(error);
                dispatch( finishLoading() )
                Swal.fire('Error', error.message, 'error')
            });
    }
}
//El orden de como pasas las variables importa OJOOO!
export const starRegisterWithEmailPasswordName =(name, email, password) =>{

    return (dispatch)=>{
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then( async({ user }) => {
                await updateProfile( user, { displayName: name });
                console.log(user);
                dispatch( 
                    
                    
                    login(user.uid, user.displayName))


            }).catch((error) => {
                Swal.fire('Error', error.message, 'error')
            });

    }


}




export const login =(uid, displayName)=>(
    
    {
     
        type: types.login,
        payload:{
            uid, 
            displayName
        }
    })



    export const startLogout =()=>{
        return async(dispatch) => {
            const auth = getAuth(app);
            await signOut(auth);
            dispatch(logout());
        }    
    
    
    }


    export const logout =()=>(
    
        {
            type: types.logout
        })
    