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