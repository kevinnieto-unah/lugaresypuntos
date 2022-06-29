import { LockClosedIcon } from "@heroicons/react/outline";
import React from "react";
import { useForm } from '../../hooks/UseForm'
import validator from 'validator';
import { useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import {  starRegisterWithEmailPasswordName} from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch =useDispatch()
  
    const [formValues, handleInputChange]=useForm({
        name:'Hernando',
        email: 'nando@gmail.com',
        password: '12345',
        password2: '12345'

    })

    const {name, email, password, password2}= formValues;
    const handleRegister =(e)=>{
      e.preventDefault();
      console.log(name, email, password, password2) 
      if (isFormValid()) {
           console.log('Formulario Correcto');
           console.log(name, email, password, password2);
           dispatch(starRegisterWithEmailPasswordName(name, email, password, password2)) //El orden de como pasas las variables importa OJOOO!
      }
  }

  const isFormValid = ()=> {
    if(name.trim().length===0){
        console.log('Name is required');
        return false
    }else if(!validator.isEmail(email)){
        console.log('Email is not valid');
        return false

    }else if( password !== password2   || password.length <5){

        console.log('Password should be at least 6 characters and match each other');
        return false
    }

    return true
}


  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8  content-center">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Registrarse
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded-md shadow-sm -space-y-px">
              <p className="text-md font-light pb-1 text-gray-900">
                Ingresa tu nombre:
              </p>
              <div>
                <label className="sr-only">Nombre</label>
                <input
                  name="name"
                  type="text"
                  autoComplete="Nombre"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nombre"
                  onChange={handleInputChange}
                  value={name}
                />
              </div>
              <div className="pt-5">
                <p className="text-md font-light pb-1 text-gray-900">
                  Ingresa tu email:
                </p>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
                  value={email}

                />
              </div>

              <div className="pt-5">
                <p className="text-md font-light pb-1 text-gray-900">
                  Ingresa tu contraseña:
                </p>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                  value={password}
                />
              </div>

              <div className="pt-5">
                <p className="text-md font-light pb-1 text-gray-900">
                  Confirma tu contraseña:
                </p>
                <label htmlFor="password" className="sr-only">
                  Confirmar Password
                </label>
                <input
       
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                  value={password2}
                />
              </div>
            </div>

            <div className=" text-center text-gray-500 underline">
              <Link to="/auth/login">Ya tienes una cuenta?</Link>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
