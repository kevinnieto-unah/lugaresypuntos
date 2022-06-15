import { types } from "../types/types"


export const lugarAddNew = (lugar) => ({
  type: types.lugarAddNew,
  payload: lugar
});

export const lugarSetActive = (lugar) => ({
  type: types.lugarSetActive,
  payload: lugar
});

export const lugarUpdated = ( lugar ) => ({
  type: types.lugarUpdated,
  payload: lugar
});


export const eventClearActiveLugar = () => ({ type: types.eventClearActiveLugar });

export const lugarDeleted = (lugar) => ({ type: types.lugarDeleted });