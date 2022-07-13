import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TablaDePuntos = ({puntosTemporales}) => {
  return (
    <>
        {/* Tabla de Puntos de Referencia */}
        <p className="text-lg pt-5 font-medium text-gray-900">
            Puntos de Referencia:
        </p>
        <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 350 }}
              aria-label="simple table"
            >
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="left">Latitud</TableCell>
                <TableCell align="left">Longitud</TableCell>

              </TableRow>
            </TableHead>
              <TableBody>
                {puntosTemporales.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="text-sm font-light text-gray-900"
                    >
                      {row.nombre}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="text-sm font-light text-gray-900"
                    >
                      {row.latitud}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="text-sm font-light text-gray-900"
                    >
                      {row.longitud}
                    </TableCell>

                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  </>
  )
  
}
