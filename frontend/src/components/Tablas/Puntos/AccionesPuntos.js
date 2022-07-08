import { InformationCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { TableCell } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { puntoSetActive, puntoStartDelete } from '../../../actions/puntos'

export const AccionesPuntos = ({row}) => {
    
    const dispatch = useDispatch();

    const handleEdit = (e) => {
      e.preventDefault()
      Swal.fire({
        title: '¿Quieres actualizar este punto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Entro aqui con exito', row); 
          dispatch( puntoSetActive(row) ) 
        }
        
      })
      
      
    }

    const handleDelete = (e) => {
      e.preventDefault()
      Swal.fire({
        title: '¿Deseas eliminar este punto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Punto eliminado con exito con exito!',
            '',
            'success'
          )
          dispatch( puntoSetActive(row) ) 
          dispatch( puntoStartDelete())
         

          
          
        }
        
      })
       
    } 
  
  
  return (
    <TableCell align="left">
                          <button
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-1 rounded"
                          >
                            <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded"
                            onClick={handleEdit}
                          >
                            <PencilIcon className="h-4 w-4" aria-hidden="true" />
                            
                          </button>
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleDelete}
                            
                          >
                            <TrashIcon className="h-4 w-4" aria-hidden="true" />
                          </button>

                      </TableCell>
  )
}
