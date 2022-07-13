import React  from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

import Paper from "@mui/material/Paper";

import { CeldaPuntodeReferencia } from './CeldaPuntodeReferencia';
import { useSelector } from "react-redux";


export const PuntosDeReferenciaLugar = () => {
  
  const { puntosTemporales } = useSelector( state => state.temporales )
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
                       
                              puntosTemporales.map(row => (
                                <CeldaPuntodeReferencia key={row.id} row={row} />
                                ))
                          
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
    </>
  )
}
