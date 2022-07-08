import { fetchFirebase } from "../helpers/fetch";
import { types } from "../types/types"
//AQUI PUNTOS TEMPORALES
export const addPuntosTemporales = (punto) => ({
    type: types.addPuntosTemporales,
    payload: punto
  });
  export const deletePuntosTemporales = (punto) => ({ 
    type: types.deletePuntosTemporales });
  
  export const clearActivePuntosTemporales = () => ({ 
    type: types.clearActivePuntosTemporales });
  
  export const setActivePuntoTemporal = (punto) => ({
    type: types.setActivePuntoTemporal,
    payload: punto
  });

  export const temporalesLogout = () => ({
    type: types.temporalesLogoutCleaning
  });


  export const startPuntosCargados = (id) => {
    return async(dispatch) => {
        try {           
            const resp = await fetchFirebase( `getPuntosDeReferenciaLugar/${ id }`, {}, 'GET' );
            const body = await resp.json(); 
            dispatch( puntosCargados( body ) );
        } catch (error) {
            console.log(error)
        }
    }
  }

  const puntosCargados = (puntos) => ({
    type: types.puntosCargados,
    payload: puntos
  })