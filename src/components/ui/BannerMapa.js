import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'

export const BannerMapa = () => {
  return (
    <div className="mt-5  bg-indigo-600">
      <div className="max-w-7xl  items-center justify-center mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <div className="w-0 flex-1 justify-center  flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <InformationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="hidden md:inline">Toca el mapa para ver la ubicacion del Lugar.</span>
            </p>
          </div>
        
    
        </div>
      </div>
    </div>
  )
}
