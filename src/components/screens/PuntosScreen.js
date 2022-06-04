
import React from 'react'
import { Navbar } from '../ui/Navbar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {InformationCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'

const  createData = (
 id, nombre, latitud, longitud, accion
) => {
  return {id, nombre, latitud, longitud, accion };
}

const rows = [
  createData(1,'Colonia Kennedy', '-34.9087', '-56.1714', 'accion' ),
  createData(2,'Colonia Kennedy', '-34.9087', '-56.1714', 'accion'),
  createData(3,'Colonia Kennedy', '-34.9087', '-56.1714', 'accion'),
  createData(4,'Colonia Kennedy', '-34.9087', '-56.1714', 'accion'),
  createData(5,'Colonia Kennedy', '-34.9087', '-56.1714', 'accion'),
];


export const PuntosScreen = () => {
  const handleLogout = (e) => {
    e.preventDefault()
    console.log('Papada vieja');
}
  // const handleDelete = (e) => {
  //   e.preventDefault()
  //   console.log('delete')
  // }
  // const handleEdit = (e) => {
  //   e.preventDefault()
  //   console.log('edit')
  // }

  return (
    <>
        <Navbar/>
        <div className='pt-10 flex justify-center items-start'>
            <h1 className="text-3xl leading-6 font-medium text-gray-900">
                Puntos de Referencia
            </h1>
        </div>
    
        <div className='pt-10 flex justify-center max-w-5xl mx-auto'>


                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      className=" mr-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Nombre"
                     />
                    <input
                      id="latitud"
                      name="latitud"
                      type="text"
                      required
                      className="mr-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Latitud"
                     />
                    <input
                      id="Longitud"
                      name="Longitud"
                      type="text"
                      required
                      className="mr-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Longitud"
                     />
                      <button
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 mr-1 ml-1 rounded"
                      >
                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                      </button>

        </div>
        <div className='pt-3 flex justify-center max-w-5xl mx-auto'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="left">Latitud</TableCell>
                    <TableCell align="left">Longitud</TableCell>
                    <TableCell align="left">Accion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.nombre}
                      </TableCell>
                      <TableCell align="left">{row.latitud} </TableCell>
                      <TableCell align="left">{row.longitud}</TableCell>
                      <TableCell align="left">
                          <button
                            type="button"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-1 rounded"
                            onClick={handleLogout}
                          >
                            <InformationCircleIcon className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded"
                            onClick={handleLogout}
                          >
                            <PencilIcon className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleLogout}
                          >
                            <TrashIcon className="h-4 w-4" aria-hidden="true" />
                          </button>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
    </>
  )
}