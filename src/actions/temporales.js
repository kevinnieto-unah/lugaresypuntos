import { fetchFirebase } from "../helpers/fetch";
import { types } from "../types/types"
//AQUI PUNTOS TEMPORALES
export const addPuntosTemporales = (punto) => ({
    type: types.addPuntosTemporales,
    payload: punto
  });
  export const deletePuntosTemporales = (punto) => ({ 
    type: types.deletePuntosTemporales });
  
  export const cleanPuntosTemporales = () => ({ 
    type: types.cleanPuntosTemporales });
  

  export const startLoadingTemporal = () => ({ 
    type: types.startLoadingTemporal });
  
  export const finishLoadingTemporal = () => ({ 
    type: types.finishLoadingTemporal });


  export const startPuntosCargados = (id) => {
    return async(dispatch) => {
      
        try {  
            dispatch(startLoadingTemporal())         
            const resp = await fetchFirebase( `/lugares/puntos/${ id }`, {}, 'GET' );
            const body = await resp.json(); 
            console.log(body);
            dispatch( puntosCargados( body ) );
        } catch (error) {
            console.log(error)
        }
        dispatch(finishLoadingTemporal())
    }
  }

  const puntosCargados = (puntos) => ({
    type: types.puntosCargados,
    payload: puntos
  })