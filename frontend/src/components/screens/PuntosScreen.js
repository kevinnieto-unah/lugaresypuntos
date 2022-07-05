
import React, { useEffect, useState } from 'react'
import { Navbar } from '../ui/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PlusIcon } from '@heroicons/react/outline'

import { AccionesPuntos } from '../Tablas/Puntos/AccionesPuntos';
//import { puntoSetActive } from '../../actions/puntos'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { eventClearActivePunto, puntoAddNew, puntoUpdated} from '../../actions/puntos';
import { BannerEdit } from '../ui/BannerEdit';
import Swal from 'sweetalert2';





const initPunto = {
  nombre: '',
  latitud: '',
  longitud: ''
}


export const PuntosScreen = () => {
  //DECLARACION DE VARIABLES
    const { activePunto } = useSelector( state => state.puntos );
    const { puntos } = useSelector( state => state.puntos ); 
    const [formValues, setFormValues] = useState( initPunto);
    const dispatch = useDispatch();
    const {nombre, latitud,longitud } = formValues;

      //ACTUALIZAR EVENTO
      useEffect(() => {
       if ( activePunto ) {
         console.log(activePunto);
         setFormValues( activePunto );
       } else {
         setFormValues( initPunto );
       }
   }, [activePunto, setFormValues])

  //FUNCION PARA AGREGAR CAMBIOS
    const handleNuevoPunto = (e) => {

      
      e.preventDefault()
     
      if ( activePunto ) {
        dispatch( puntoUpdated( formValues ) )
        dispatch( eventClearActivePunto() );
        Swal.fire(
          'Punto actualizado con exito!',
          '',
          'success'
        )
    } else {
      Swal.fire({
        title: '¿Deseas guardar los cambios?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Punto creado con exito!',
            '',
            'success'
          )
          dispatch( puntoAddNew({
            ...formValues,
            id: new Date().getTime(),
          }) );
          setFormValues( initPunto );
        }
        
      })
        
        
    }
    }

  //FUNCION MANEJADORA DE CAMPOS DEL FORMULARIO
  const handleInputChange = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value
    });
}


  


// }
  // const handleDelete = (e) => {
  //   e.preventDefault()
  //   console.log('delete')
  // }

 

  return (
    <>
        <Navbar/>
        <div className='pt-10 flex justify-center items-start'>
            <h1 className="text-3xl leading-6 font-medium text-gray-900">
                Puntos de Referencia
            </h1>
        </div>
        { (activePunto)? <BannerEdit/> : 
          <div className='pt-5 flex justify-center items-start'>
              <h1 className="text-md leading-6 font-sm text-gray-900">
                  Ingresa los datos del nuevo Punto de Referencia
              </h1> 
          </div>
        } 
        

        {/* FORMULARIO PARA CREAR  Y EDITAR PUNTOS */}
        <form className='pt-5 flex justify-center max-w-5xl mx-auto' onSubmit={handleNuevoPunto}>
                    <input
                      value={nombre}
                      name='nombre'
                      type="text"
                      required
                      className={`mr-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
                      placeholder="Nombre"
                      onChange={handleInputChange}
                     />
                    <input
                      value={latitud}
                      name='latitud'
                      type="text"
                      required
                      className={`mr-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                      placeholder="Latitud"
                      onChange={handleInputChange}
                     />
                    <input
                      value={longitud}
                      name='longitud'
                      type="text"
                      required
                      className={`mr-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `}
                      placeholder="Longitud"
                      onChange={handleInputChange}
                     />
                      <button
                            
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 mr-1 ml-1 rounded"
                      >
                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                      </button>

        </form>



        {/* DIV QUE CONTIENE LA TABLA */}
        <div className='pt-3 flex justify-center max-w-5xl mx-auto'>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="left">Latitud</TableCell>
                    <TableCell align="left">Longitud</TableCell>
                    <TableCell align="left">Accion</TableCell>
                  </TableRow>
                </TableHead>
                
                {/* DESPLIEGUE DE LA TABLA */}
                <TableBody>
                  {/* Componente cuando la tabla esta vacia */}
                  {/* <SinRegistros/> */}
                  
                  {
       
                     
                  
                  puntos.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.nombre}
                      </TableCell>
                      <TableCell align="left">{row.latitud} </TableCell>
                      <TableCell align="left">{row.longitud}</TableCell>
                      <AccionesPuntos row={row}/>
                      
                     
                      
                    </TableRow>

                  ))
                
                
                }
                </TableBody>
              </Table>
            </TableContainer>
        </div>

    </>
  )
}