import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TrashIcon } from '@heroicons/react/outline';

const createData = (id, nombre, latitud, longitud) => {
    return { id, nombre, latitud, longitud };
  };
  
  const rows = [
    createData(1, "Bulevar Suyapa", 12.45654,15.4684),
    createData(2, "Bulevar Kennedy",12.45654,15.4684),
  ];
export const TablaDePuntos = () => {
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
                <TableCell align="right">Accion</TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {rows.map((row) => (
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
                    <TableCell align="right">
                      <button
                        type="button"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <TrashIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </button>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  </>
  )
  
}
