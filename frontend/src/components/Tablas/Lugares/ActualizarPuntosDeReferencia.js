import React  from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { CeldaPuntodeReferencia } from './CeldaPuntodeReferencia';



export const ActualizarPuntosDeReferencia = () => {
    
  const { activeLugar } = useSelector( state => state.lugares );
  const { puntos } = activeLugar
  
  return (
    <>
    {/* Tabla de Puntos de Referencia */}
    <p className="text-sm pt-5 font-medium text-gray-900">
                          Puntos de Referencia:
                        </p>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 350 }}
                            aria-label="simple table"
                          >
                            <TableBody>
                             {
                              puntos.map(row => (
                                <CeldaPuntodeReferencia key={row.id} row={row} />
                              ))
                             
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
    </>
  )
}
