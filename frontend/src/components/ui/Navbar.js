import React from 'react'
import { Disclosure } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { LogoutIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth';
import { puntoLogout } from '../../actions/puntos';
import { temporalesLogout } from '../../actions/temporales';
import { lugaresLogout } from '../../actions/lugares';

export const Navbar = () => {
  const { name } = useSelector( state => state.auth );
  const dispatch = useDispatch();
    const handleLogout = (e) => {
        dispatch(puntoLogout())
        dispatch(temporalesLogout())
        dispatch(lugaresLogout())
        dispatch(startLogout())
    }
  return (
    <Disclosure as="nav" className="bg-gray-800">
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              
              
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                <span className="flex-shrink-0 flex items-center text-white px-3 py-2 rounded-md text-xl font-medium">
                  Appland
                </span>
            
              </div>
              <div className='flex-1 flex items-center justify-start sm:items-stretch sm:justify-start'>
                  <div className=" hidden sm:block sm:ml-6 justify-center">
                      <div className="flex space-x-4">
                          <Link
                            to="/"
                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium ' 
                            >
                            Lugares
                          </Link>
                      </div>
                    </div>
                  <div className=" hidden sm:block sm:ml-6 justify-center">
                      <div className="flex space-x-4">
                          <Link
                            to="/puntos"
                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium ' 
                            >
                            Puntos de referencia
                          </Link>
                      </div>
                    </div>
              </div>

              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* name del Cristiano*/}
                <span className="flex-shrink-0 flex items-center text-white px-3 py-2 rounded-md text-lg font-light">
                  {name}
                </span>


                {/* Logout Button */}
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  <LogoutIcon className="h-6 w-6" aria-hidden="true" />  
                </button>

                
              </div>
              

             
            </div>
          </div>
        </>
  
    </Disclosure>
  )
}
