import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import { TableCell, TableRow } from '@mui/material'

export const SinRegistros = () => {
    return (
        <TableRow className='max-w-screen-xl max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 bg-indigo-600'>
            <TableCell><div className="flex items-center justify-between ">
          <div className="max-w-full flex items-center">
            <span className="flex p-1 rounded-lg bg-indigo-800">
              <InformationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="hidden md:inline">Aun no hay registros en la tabla.</span>
            </p>
          </div>
          
          
        </div></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            
        

    </TableRow>
    )
}
