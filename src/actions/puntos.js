import { fetchFirebase } from "../helpers/fetch";
import { types } from "../types/types"
import Swal from "sweetalert2";

export const startLoadingPunto = () => ({ 
  type: types.startLoadingPunto });

export const finishLoadingPunto = () => ({ 
  type: types.finishLoadingPunto });


export const puntoStartAddNew = ( punto ) => {
  

  return async( dispatch, getState ) => {
      dispatch(startLoadingPunto())
      try {

          ///Solicita el token(endponit, payload, tipo de Peticion)
          const resp = await fetchFirebase( 'puntos', punto, 'POST');
          const body = await resp.json();
          const {id}= body.punto
           if ( body.ok ) {
               punto.id = id; 
               console.log( punto );
               dispatch( puntoAddNew( punto ) );
           }
      } catch (error) {
          console.log(error);
      }
      dispatch(finishLoadingPunto())
  }
}

export const puntoAddNew = (punto) => ({
  type: types.puntoAddNew,
  payload: punto
});

export const puntoSetActive = (punto) => ({
  type: types.puntoSetActive,
  payload: punto
});

export const puntoStartUpdate = ( punto ) => {
  return async(dispatch) => {
      dispatch(startLoadingPunto())
      try {
          const resp = await fetchFirebase(`puntos/${ punto.id }`, punto, 'PUT' );
          const body = await resp.json();

          if ( body.ok ) {
              dispatch( puntoUpdated( punto ) );
          } else {
              Swal.fire('Error', body.msg, 'error');
          }
      } catch (error) {
          console.log(error)
      }
      dispatch(finishLoadingPunto())
  }
}



export const puntoUpdated = ( punto ) => ({
  type: types.puntoUpdated,
  payload: punto
});


export const eventClearActivePunto = () => ({ type: types.eventClearActivePunto });

//ELIMINAR EVENTO
export const puntoStartDelete = () => {
  return async ( dispatch, getState ) => {
      dispatch(startLoadingPunto())
      const { id } = getState().puntos.activePunto;
    
       try {
           const resp = await fetchFirebase(`puntos/${ id }`, {}, 'DELETE' );
           const body = await resp.json();

           if ( body.ok ) {
               dispatch( puntoDeleted() );
           } else {
               Swal.fire('Error', body.msg, 'error');
           }


       } catch (error) {
           console.log(error)
       }
       dispatch(finishLoadingPunto())

  }
}




export const puntoDeleted = (punto) => ({ type: types.puntoDeleted });


//CARGAR EVENTOS
export const puntoStartLoading = () => {
  return async(dispatch) => {
      try {           
          const resp = await fetchFirebase( 'puntos', {}, 'GET' );
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
