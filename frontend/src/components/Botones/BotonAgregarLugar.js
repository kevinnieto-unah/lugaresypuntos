import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addPuntosTemporales } from '../../actions/temporales';

export const BotonAgregarLugar = ({row}) => {
  const { puntosTemporales } = useSelector( state => state.temporales );
  const dispatch = useDispatch();
    const HandleListaDePunto = (e) => {
        e.preventDefault();
        const respuesta = puntosTemporales.includes(row)
        if (respuesta === true) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ese punto de Referencia incluido en el Lugar'
          })
        }else{
          dispatch(addPuntosTemporales(row));
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Punto agregado con exito',
            showConfirmButton: false,
            timer: 800
          })
        }
        
        
        
    
        // setFormValuesSelect("-")
    }
  return (
    <div className="col-span-1">
        <button
            className="group relative h-full w-full flex justify-center py-auto px-4  items-center border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={HandleListaDePunto}
        >
                    Agregar
        </button>
    </div>
  )
}
