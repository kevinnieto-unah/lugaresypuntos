import React, { useState } from 'react'
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
    const [listItems, setListItems] = useState(5);
   

    
    const handleMostrarMas = (e) => {
      e.preventDefault()
      setListItems(listItems + 5)
      console.log("Lugares:",lugares.length)
      console.log("List Item:",listItems)
    }


  return (
   <>
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
            
            {
                lugares.slice(0, listItems).map(rec => (
                  <CeldaLugares key={rec.id} row={rec}/>
                ))
                
              }
              
              
              {/* // lugares.map((row) => (
              //     <CeldaLugares key={row.id} row={row}/>
              // ))
               */}
              
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
      <div className="pt-3 flex justify-center max-w-5xl mx-auto">
        {
            listItems< lugares.length ?
            <button
            type="button"
            className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleMostrarMas}
                
          >
            Cargar mas...
          </button>
          :null
        }
        </div>
   </> 
  )
}
