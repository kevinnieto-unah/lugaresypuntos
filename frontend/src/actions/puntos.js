import { fetchFirebase } from "../helpers/fetch";
import { types } from "../types/types"


export const puntoAddNew = (punto) => ({
  type: types.puntoAddNew,
  payload: punto
});

export const puntoSetActive = (punto) => ({
  type: types.puntoSetActive,
  payload: punto
});

export const puntoUpdated = ( punto ) => ({
  type: types.puntoUpdated,
  payload: punto
});


export const eventClearActivePunto = () => ({ type: types.eventClearActivePunto });

export const puntoDeleted = (punto) => ({ type: types.puntoDeleted });


//CARGAR EVENTOS
export const puntoStartLoading = () => {
  return async(dispatch) => {
      try {           
          const resp = await fetchFirebase( 'obtenerPuntos', {}, 'GET' );
          const body = await resp.json();
          dispatch( puntoLoaded( body ) );
      } catch (error) {
          console.log(error)
      }
  }
}
const puntoLoaded = (puntos) => ({
  type: types.puntoLoaded,
  payload: puntos
})

export const puntoLogout = () => ({
  type: types.puntosLogoutCleaning
});
