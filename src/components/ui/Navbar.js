import React from 'react'
import { Disclosure } from '@headlessui/react'
import { LogoutIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        navigate('/login')
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

              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Nombre del Cristiano*/}
                <span className="flex-shrink-0 flex items-center text-white px-3 py-2 rounded-md text-lg font-light">
                  Kevin Nieto
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
