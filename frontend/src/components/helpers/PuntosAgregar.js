import React from 'react'
import { useSelector } from 'react-redux';
import { BotonAgregarLugar } from '../Botones/BotonAgregarLugar';

export const PuntosAgregar = () => {
    // const [formValuesSelect, setFormValuesSelect] = useState( '');
    const { puntos } = useSelector( state => state.puntos ); 

    
    // const handleInputChangeSelect = ( { target } ) => {
    //     setFormValuesSelect({
    //       ...formValuesSelect,
    //         value: target.value,
    //   });
    // } 
  return (

    <>
        { 
            puntos.map((row) => (
                <div className="mt-2 grid grid-cols-6 gap-2 pt-4 border border-gray-300  rounded-lg overflow-hidden px-2 py-2" key={row.id}>
                      <div className="col-span-5">
                        <ul className="pl-4 text-sm">
                            <li className="text-gray-900"> <b>{row.nombre} </b> </li>
                            <li className="text-gray-900">( {row.latitud} , {row.longitud} )</li>
                            </ul>
                      </div>
                      <BotonAgregarLugar row={row}/> 
            </div>
            ))}
        </>
                        



                                
  )
}
