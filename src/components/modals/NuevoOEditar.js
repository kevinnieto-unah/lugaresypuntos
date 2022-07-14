import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useDispatch } from "react-redux";
import { finishLoading, startLoading, uiCloseModal } from "../../actions/ui";
import { PuntosAgregar } from "../helpers/PuntosAgregar";

import { useSelector } from "react-redux";
import { PuntosDeReferenciaLugar } from "../Tablas/Lugares/PuntosDeReferenciaLugar";
import { eventClearActiveLugar, lugarStartAddNew, lugarStartUpdate } from "../../actions/lugares";
import Swal from "sweetalert2";
import { cleanPuntosTemporales } from "../../actions/temporales";

const initLugar = {
  nombre: '',
  latitud: '',
  longitud: '',
  rango: '',
  tipo: '',
  disponibilidad: '',
  numeroDePuntos: '',
  puntos: [],
}

//COMIENZO DEL COMPONENTE
export const NuevoOEditar = () => {
  const [formValues, setFormValues] = useState( initLugar);

  const { activeLugar } = useSelector( state => state.lugares );
 
  const { puntosTemporales } = useSelector( state => state.temporales );


  const {nombre, latitud,longitud,rango, tipo, disponibilidad} = formValues;
  const dispatch = useDispatch();

       //ACTUALIZAR EVENTO
        useEffect(() => {
          if ( activeLugar ) {
            setFormValues( activeLugar );

          }
          if(puntosTemporales !== []){
            console.log("Tiene los puntos temporales");
          }


      }, [activeLugar, setFormValues, dispatch,puntosTemporales])

   //FUNCION MANEJADORA DE CAMPOS DEL FORMULARIO

   const handleInputChange = ({ target }) => {
    setFormValues({
        ...formValues,
        [target.name]: target.value
    });
}
  // FUNCION PARA  CERRAR EL MODAL
  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActiveLugar());
    dispatch( cleanPuntosTemporales() );
    

  };
  const handleNuevoLugar = (e) => {
     e.preventDefault()
     if ( activeLugar ) {
      const contador= puntosTemporales.length;
      const lugarActualizado = {
        ...formValues,
        puntos: puntosTemporales,
        numeroDePuntos: contador,
      }
      dispatch(startLoading())
      dispatch( lugarStartUpdate( lugarActualizado ) )
      dispatch( eventClearActiveLugar() );
      dispatch( cleanPuntosTemporales() );
      dispatch(finishLoading())
      dispatch(uiCloseModal());
      

      Swal.fire(
        'Lugar actualizado con exito!',
        '',
        'success'
      )
  } else {
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Lugar creado con exito!',
          '',
          'success'
        )
        dispatch( cleanPuntosTemporales() );
        const contador= puntosTemporales.length;
        const {nombre, latitud, longitud, rango, tipo, disponibilidad } = formValues
        const envio ={
          nombre, 
          latitud, 
          longitud,
          rango, 
          tipo, 
          disponibilidad,
          puntos: puntosTemporales,
          numeroDePuntos: contador
        }

        dispatch(startLoading())
        dispatch( lugarStartAddNew(envio) );
      
        setFormValues( initLugar );

        dispatch(uiCloseModal());
        dispatch(finishLoading())
      }
      
    })
      
      
  }
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
                    <form className="mt-8 w-full"  >
                      <div className="rounded-md shadow-sm ">
                        <p className="text-md font-light pb-1 text-gray-900">
                          Nombre del Lugar:
                        </p>
                        <div>
                          <label className="sr-only">Nombre</label>
                          <input
                              type="text"
                              name="nombre"
                              value={nombre}
                              onChange={handleInputChange}
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                              value={latitud}
                              onChange={handleInputChange}
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
                              value={longitud}
                              onChange={handleInputChange}
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
                              value={rango}
                              onChange={handleInputChange}
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
                              name="tipo"
                              value={tipo}
                              onChange={handleInputChange}
                            >
                              <option value={"-"}>
                                -Tipo de Lugar-
                              </option>
                              <option value="colonia">Colonia</option>
                              <option value="centro-comercial">
                                Centro Comercial
                              </option>
                              <option value="institucion-gubernamental">
                                Institucion Gubernamental
                              </option>
                              <option value="centro-educativo">
                                Centro Educativo
                              </option>
                            </select>
                          </div>
                        </div>
                        {/* AQUI TERMINA */}
                        <div className="col-span-6 sm:col-span-3">
                            {/* Aqui metes el Select */}
                            <p className="text-sm font-light text-gray-900">
                              Disponibilidad:
                            </p>
                            <label className="sr-only">Disponibilidad</label>
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
                              name="disponibilidad"
                              onChange={handleInputChange}
                              value={disponibilidad}
                            >
                              <option value={"-"}>
                                -Disponibilidad-
                              </option>
                              <option value={true} >Disponible</option>
                              <option value={false}>
                                No Disponible
                              </option>
              
                            </select>
                          </div>

                        
                        <p className="mt-4 mb-3 text-md font-light text-gray-900">
                              Puntos disponibles:
                        </p>
                        
                        
{/* hasta aqui */}

                      </div>
                    </form>
                    <PuntosAgregar />
                  
                    
                     <PuntosDeReferenciaLugar/>
                                  
                    
                    
                    
                   
                  </div>
                </div>
              </div>
            </div>

            {/* Area de los botones de cerrar */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={handleNuevoLugar}
                className="bg-gray-50 hover:bg-purple-700 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
  );
};
