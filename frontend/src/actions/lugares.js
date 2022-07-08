import { fetchFirebase } from "../helpers/fetch";
import { types } from "../types/types"
import Swal from "sweetalert2";

export const lugarStartAddNew = ( lugar ) => {

  return async( dispatch, getState ) => {

      try {

          ///Solicita el token(endponit, payload, tipo de Peticion)
          const resp = await fetchFirebase( 'newLugar', lugar, 'POST');
          const body = await resp.json();
          const {id}= body.lugar
           if ( body.ok ) {
               lugar.id = id; 
               console.log( lugar );
               dispatch( lugarAddNew( lugar ) );
           }
      } catch (error) {
          console.log(error);
      }
  }
}

export const lugarAddNew = (lugar) => ({
  type: types.lugarAddNew,
  payload: lugar
});

export const lugarSetActive = (lugar) => ({
  type: types.lugarSetActive,
  payload: lugar,
});

export const lugarStartUpdate = ( lugar ) => {
  return async(dispatch) => {

      try {
          const resp = await fetchFirebase(`updateLugar/${ lugar.id }`, lugar, 'PUT' );
          const body = await resp.json();

          if ( body.ok ) {
              dispatch( lugarUpdated( lugar ) );
          } else {
              Swal.fire('Error', body.msg, 'error');
          }
      } catch (error) {
          console.log(error)
      }
  }
}

export const lugarUpdated = ( lugar ) => ({
  type: types.lugarUpdated,
  payload: lugar
});


export const eventClearActiveLugar = () => ({ 
  type: types.eventClearActiveLugar });


//ELIMINAR EVENTO
export const lugarStartDelete = () => {
  return async ( dispatch, getState ) => {
      const { id } = getState().lugares.activeLugar;
      
       try {
           const resp = await fetchFirebase(`deleteLugar/${ id }`, {}, 'DELETE' );
           const body = await resp.json();

           if ( body.ok ) {
               dispatch( lugarDeleted() );
           } else {
               Swal.fire('Error', body.msg, 'error');
           }


       } catch (error) {
           console.log(error)
       }

  }
}

export const lugarDeleted = (lugar) => ({ 
  type: types.lugarDeleted });


// export const deletePuntosActiveLugar = (lugar) => ({ 
//   type: types.deletePuntosActiveLugar });

  export const lugaresLogout = () => ({
    type: types.lugaresLogoutCleaning
  });

  //CARGAR EVENTOS
export const lugarStartLoading = () => {
  return async(dispatch) => {
      try {           
          const resp = await fetchFirebase( 'obtenerLugares', {}, 'GET' );
          const body = await resp.json();
          dispatch( lugarLoaded( body ) );
      } catch (error) {
          console.log(error)
      }
  }
}
const lugarLoaded = (lugares) => ({
  type: types.lugarLoaded,
  payload: lugares
})
  