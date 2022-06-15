import { types } from "../types/types"


export const puntoAddNew = (punto) => ({
  type: types.puntoAddNew,
  payload: punto
});

export const puntoSetActive = (punto) => ({
  type: types.puntoSetActive,
  payload: punto
});
export const addPuntosDelLugar = (punto) => ({
  type: types.addPuntosDelLugar,
  payload: punto
});
export const deletePuntosDelLugar = (punto) => ({ type: types.deletePuntosDelLugar });

export const puntoUpdated = ( punto ) => ({
  type: types.puntoUpdated,
  payload: punto
});


export const eventClearActivePunto = () => ({ type: types.eventClearActivePunto });

export const puntoDeleted = (punto) => ({ type: types.puntoDeleted });
