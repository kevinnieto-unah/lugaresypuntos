import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from 'react-redux';
import { CeldaLugares } from './CeldaLugares';


export const TablaPrincipal = () => {
    const { lugares } = useSelector( state => state.lugares ); 



    //PARTE DEL SWEET ALERT DEL BORRAR




  return (
    <div className="pt-3 flex justify-center max-w-5xl mx-auto">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="left">Disponible</TableCell>
                <TableCell align="left">Rango</TableCell>
                <TableCell align="left">Puntos de referencia</TableCell>
                <TableCell align="left">Tipo</TableCell>
                <TableCell align="left">Accion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lugares.map((row) => (
                  <CeldaLugares key={row.id} row={row}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}
