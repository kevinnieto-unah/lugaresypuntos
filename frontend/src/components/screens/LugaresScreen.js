import React, { useEffect } from "react";

import {
  PlusIcon,
} from "@heroicons/react/outline";
import { Modal } from "../modals/Modal";

import { useDispatch, useSelector } from "react-redux";
import { Buscador } from "../ui/Buscador";
import { TablaPrincipal } from "../Tablas/Lugares/TablaPrincipal";
import { startLoading, uiOpenModal } from "../../actions/ui";



export const LugaresScreen = () => {
  const dispatch = useDispatch();
  const { lugares } = useSelector( state => state.lugares ); 

  useEffect(() => {
      if (lugares === []) {
        dispatch(startLoading())
      }


       
  }, [ dispatch, lugares ]);

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
