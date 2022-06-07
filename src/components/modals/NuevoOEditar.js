import React, { Fragment } from 'react'
import { Dialog, Transition} from "@headlessui/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TrashIcon } from "@heroicons/react/outline";
import { useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';

const createData = (id, nombre) => {
    return { id, nombre };
  };
  
  const rows = [
    createData(1, "Bulevar Suyapa"),
    createData(2, "Bulevar Kennedy"),
  ];

export const NuevoOEditar = () => {
    const dispatch = useDispatch();

  // FUNCION PARA  CERRAR EL MODAL
  const closeModal = () => {
    dispatch(uiCloseModal());
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* Aqui comienza el formulario */}
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:full sm:text-left">
                      {/* TITULO */}
                      <Dialog.Title
                        as="h3"
                        className="text-center text-lg leading-6 font-medium text-gray-900"
                      >
                        Nuevo o Editar
                      </Dialog.Title>

                      {/* DIV DE TRABAJO */}
                      <div className="mt-2 block">
                        <form className="mt-8 w-full">
                          <div className="rounded-md shadow-sm ">
                            <p className="text-md font-light pb-1 text-gray-900">
                              Nombre del Lugar:
                            </p>
                            <div>
                              <label className="sr-only">Nombre</label>
                              <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="Nombre"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nombre"
                              />
                            </div>

                            {/* AQUI COMIENZA */}
                            <div className="grid grid-cols-6 gap-6 pt-4">
                              <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-light text-gray-700">
                                  Latitud:
                                </label>
                                <input
                                  type="text"
                                  name="latitud"
                                  id="latitud"
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-light text-gray-700">
                                  Logitud:
                                </label>
                                <input
                                  type="text"
                                  name="longitud"
                                  id="longitud"
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>
                            </div>
                            {/* AQUI TERMINA */}

                            {/* AQUI COMIENZA */}
                            <div className="grid grid-cols-6 gap-6 pt-4">
                              <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-light text-gray-700">
                                  Rango de Disponibilidad:
                                </label>
                                <input
                                  type="text"
                                  name="rango"
                                  id="rango"
                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                {/* Aqui metes el Select */}
                                <p className="text-sm font-light text-gray-900">
                                  Tipo de Lugar:
                                </p>
                                <label className="sr-only">Tipo de Lugar</label>
                                <select
                                  className="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-md
                                    font-normal
                                    text-gray-500
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                >
                                  <option defaultValue={"-"}>
                                    -Tipo de Lugar-
                                  </option>
                                  <option value="colonia">Colonia</option>
                                  <option value="centros-comercial">
                                    Centros Comerciales
                                  </option>
                                  <option value="institucion-gubernamental">
                                    Instituciones Gubernamentales
                                  </option>
                                  <option value="centros-educativo">
                                    Centros Educativos
                                  </option>
                                </select>
                              </div>
                            </div>
                            {/* AQUI TERMINA */}

                            <div className="pt-4">
                              <label className="inline-flex relative items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  value=""
                                  id="default-toggle"
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-normal text-gray-900 dark:text-gray-300">
                                  Disponible
                                </span>
                              </label>
                            </div>

                            <div className="grid grid-cols-6 gap-6 pt-4">
                              <div className="col-span-6 sm:col-span-3">
                                {/* Aqui metes el Select */}
                                <p className="text-sm font-light text-gray-900">
                                  Punto de Referencia:
                                </p>
                                <label className="sr-only">Punto de Referencia</label>
                                <select
                                  className="form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-md
                                    font-normal
                                    text-gray-500
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                >
                                  <option defaultValue={"-"}>
                                    -Punto de Referencia-
                                  </option>
                                  <option value="colonia">Anillo Periferico</option>
                                  <option value="centros-comercial">
                                    Bulevar del Norte
                                  </option>
                                  <option value="institucion-gubernamental">
                                    Bulevar Morazan
                                  </option>
                                  <option value="centros-educativo">
                                    Estadio Nacional
                                  </option>
                                </select>
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                              <button
                                className="mt-5 group relative w-full flex justify-center py-1 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Agregar Punto de Referencia
                              </button>
                              </div>

                            </div>
                            
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
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Area de los botones de cerrar */}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="bg-purple-500 hover:bg-purple-700 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
  )
}
