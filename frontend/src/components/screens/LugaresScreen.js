import React, { useEffect, useState } from "react";

import {
  PlusIcon,
} from "@heroicons/react/outline";
import { Modal } from "../modals/Modal";

import { useDispatch } from "react-redux";
import { Buscador } from "../ui/Buscador";
import { TablaPrincipal } from "../Tablas/Lugares/TablaPrincipal";
import { uiOpenModal } from "../../actions/ui";
import { lugarStartLoading } from "../../actions/lugares";
import { Loading } from "../ui/Loading";


export const LugaresScreen = () => {
  const dispatch = useDispatch();
  const [checking, setchecking] = useState(true);
    useEffect(() => {
      dispatch( lugarStartLoading() );  
      setchecking(false)
       
  }, [ dispatch, setchecking ]);

  const modalTipo= 'nuevoOEditar'
    const handleClickNew = () => {
      dispatch(uiOpenModal(modalTipo));
    };

  

  // const handleDelete = (e) => {
  //   e.preventDefault()
  //   console.log('delete')
  // }
  // const handleEdit = (e) => {
  //   e.preventDefault()
  //   console.log('edit')
  // }

  if (checking) {
    return(<Loading/>)
  }


  return (
    <>
      {/* TITULO */}
      <div className="pt-10 flex justify-center items-start">
        <h1 className="text-3xl leading-6 font-medium text-gray-900">
          Lugares
        </h1>
      </div>

      <Buscador />
      <TablaPrincipal/> 

      



      <div className="pt-3 flex justify-center max-w-5xl mx-auto">
        <button
          type="button"
          className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cargar mas...
        </button>
      </div>
      <div className="fixed bottom-0 w-full drop-shadow-lg">
        <button
          className="h-20 w-20 bottom-0 my-8 float-right mb-10 mr-10 px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
          onClick={handleClickNew}
        >
          <PlusIcon className="h-full w-full" aria-hidden="true" />
        </button>
      </div>

      <Modal />
    </>
  );
};
