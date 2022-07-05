import React from 'react'
import { TableCell, TableRow } from '@mui/material';
import { Acciones } from './Acciones';

export const CeldaLugares = ({row}) => {
    const {  nombre, tipo, disponibilidad, rango, numeroDePuntos } = row;
   

  return (
    <TableRow
                
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {nombre}
                  </TableCell>
                  <TableCell align="left">
                    {disponibilidad === true ? (
                      <div className="rounded-full bg-green-500 text-white text-sm  text-center max-w-sm">
                        Disponible
                      </div>
                    ) : (
                      <div className="rounded-full bg-red-500 text-white text-sm  text-center max-w-sm">
                        No Disponible
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="left">{rango} KM </TableCell>
                  <TableCell align="left">{numeroDePuntos}</TableCell>
                  <TableCell align="left">{tipo}</TableCell>
                  <Acciones row={row}/>
                </TableRow>
  )
}
