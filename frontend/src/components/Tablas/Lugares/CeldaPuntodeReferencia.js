import React from 'react'
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { deletePuntosTemporales } from '../../../actions/temporales';


export const CeldaPuntodeReferencia = ({row}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch( deletePuntosTemporales(row) ) 


      };
  return (
    <>
        <TableRow
                                  key={row.id}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }
                                }
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    className="text-sm font-light text-gray-900"
                                  >
                                    {row.nombre}
                                  </TableCell>
                                  <TableCell align="right">
                                    <button
                                      type="button"
                                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                      onClick={handleDelete}
                                    >
                                      <TrashIcon
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </TableCell>
                                </TableRow>
    </>

  )
}
