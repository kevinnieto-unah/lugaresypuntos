import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TablaDePuntos } from '../Tablas/Puntos/TablaDePuntos';
import { Navbar } from '../ui/Navbar'

export const InformacionLugarScreen = () => {
    const navigate = useNavigate()
    const handleReturn = (e) => {
      e.preventDefault()
      navigate('/')
    }

  return (
    <div>
        <Navbar />
        {/* TITULO */}
      <div className="pt-10 mb-10 flex justify-center items-start">
        <h1 className="text-3xl leading-6 font-medium text-gray-900">
          Informacion del Lugar
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-2 mt-30 sm:px-6 lg:px-8">
            {/* Description and details */}
            {/* AQUI COMIENZA */}
            <div className="grid grid-cols-6 gap-6 pt-4">
                              <div className="col-span-6 sm:col-span-3">
                                  {/* Aqui metes esa  papada */}
                                  <ul className="pl-4 text-md space-y-2">
                                     <li className="text-gray-900"> <b>Nombre del Lugar:: </b> Colonia Kennedy</li>
                                     <li className="text-gray-900"> <b>Tipo de Lugar: </b>Colonia</li>
                                     <li className="text-gray-900"> <b>Rango de Disponibilidad: </b>10 KM</li>
                                     <li className="text-gray-900"> <b>Disponibilidad: </b>Disponible</li>
                                     <li className="text-gray-900"> <b>Latitud: </b>1.45654</li>
                                     <li className="text-gray-900"> <b>Longitud: </b>56.51615</li>
                                 </ul>

                              </div>
                              <div className="col-span-6 sm:col-span-3">
                              <button
                                className="mt-5 group relative w-full flex justify-center py-7 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Ver Mapa
                              </button>
                              </div>
                            </div>
                            {/* AQUI TERMINA */}
            

            <TablaDePuntos />
            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleReturn}
                  >
                    Regresar
                  </button>
            </div>
        </div>
    </div>
  )
}
