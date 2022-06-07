import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
    InformationCircleIcon,
    PencilIcon,
    TrashIcon,
  } from "@heroicons/react/outline";

import { uiOpenModal } from "../../actions/ui";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

  const createData = (id, nombre, disponible, rango, puntos, tipo, accion) => {
    return { id, nombre, disponible, rango, puntos, tipo, accion };
  };
  
  const rows = [
    createData(1, "Colonia Kennedy", true, 0, 5, "Colonia", "accion"),
    createData(2, "Colonia Kennedy", false, 0, 5, "Colonia", "accion"),
    createData(3, "Colonia Kennedy", true, 0, 5, "Colonia", "accion"),
    createData(4, "Colonia Kennedy", false, 0, 5, "Colonia", "accion"),
    createData(5, "Colonia Kennedy", true, 0, 5, "Colonia", "accion"),
  ];



export const TablaPrincipal = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();


    //PARTE DEL SWEET ALERT DEL BORRAR
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-5 rounded',
        cancelButton: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
      },
      buttonsStyling: false
    })


    const handleInformation = (e) => {
        e.preventDefault()
        navigate('/informacion/:id')
  }
    const handleClickNew = () => {
      dispatch(uiOpenModal());
    };


    const handleDelete = () => {
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    };



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
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombre}
                  </TableCell>
                  <TableCell align="left">
                    {row.disponible === true ? (
                      <div className="rounded-full bg-green-500 text-white text-sm  text-center max-w-sm">
                        Disponible
                      </div>
                    ) : (
                      <div className="rounded-full bg-red-500 text-white text-sm  text-center max-w-sm">
                        No Disponible
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="left">{row.rango} KM </TableCell>
                  <TableCell align="left">{row.puntos}</TableCell>
                  <TableCell align="left">{row.tipo}</TableCell>
                  <TableCell align="left">
                    <button
                      type="button"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-1 rounded"
                      onClick={handleInformation}
                    >
                      <InformationCircleIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded"
                      onClick={handleClickNew}
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}
