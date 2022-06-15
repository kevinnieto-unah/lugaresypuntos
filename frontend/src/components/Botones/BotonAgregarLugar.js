import React from 'react'
import { useDispatch } from 'react-redux';
import { addPuntosDelLugar } from '../../actions/puntos';

export const BotonAgregarLugar = ({row}) => {
  const dispatch = useDispatch();

    const HandleListaDePunto = (e) => {
        e.preventDefault()
        console.log(row); 
        dispatch(addPuntosDelLugar(row));
        
        
    
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
