import { LockClosedIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/UseForm'
import { startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {


  const dispatch =useDispatch()

  const {loading} = useSelector( state => state.ui );
  
  
  const [formValues, handleInputChange]=useForm({

      email: 'nando@gmail.com',
      password: '123456'

  })

  const {email, password}= formValues;
  const handleLogin =(e)=>{

    e.preventDefault();
    console.log(email, password)
    dispatch(startLoginEmailPassword(email, password));// login extraido del archivo auth, recibe un uid y un nombre
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar Sesión</h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">

              <div>
                <p className="text-md font-light pb-1 text-gray-900">Ingresa tu email:</p>
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

              <div className='pt-5'>
                <p className="text-md font-light pb-1 text-gray-900">Ingresa tu contraseña:</p>
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
            </div>

            <div  className=" text-center text-gray-500 underline">
            <Link 
                    to="/auth/register"
                   
            >
                    Crear una cuenta
            </Link>          
          </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={ loading }
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
