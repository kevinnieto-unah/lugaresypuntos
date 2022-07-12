import { fetchFirebase } from "../helpers/fetch";
import { types } from "../types/types"
import Swal from "sweetalert2";

export const lugarStartAddNew = ( lugar ) => {

  return async( dispatch, getState ) => {
      dispatch(startLoadingLugar()) 
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

      dispatch(finishLoadingLugar())
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
      dispatch(startLoadingLugar()) 
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
      dispatch(finishLoadingLugar())
  }
}

export const lugarUpdated = ( lugar ) => ({
  type: types.lugarUpdated,
  payload: lugar
});


export const eventClearActiveLugar = () => ({ 
  type: types.eventClearActiveLugar });

export const startLoadingLugar = () => ({ 
  type: types.startLoadingLugar });

export const finishLoadingLugar = () => ({ 
  type: types.finishLoadingLugar });


//ELIMINAR EVENTO
export const lugarStartDelete = () => {
  return async ( dispatch, getState ) => {
    dispatch(startLoadingLugar())  
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
       dispatch(finishLoadingLugar())


  }
}

export const lugarDeleted = (lugar) => ({ 
  type: types.lugarDeleted });


// export const deletePuntosActiveLugar = (lugar) => ({ 
//   type: types.deletePuntosActiveLugar });



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

export const lugarLoadingTipo = (tipo) => {
  return async(dispatch) => {
      try {  
            
          const resp = await fetchFirebase( `buscarLugarPorTipo/${ tipo }`, {}, 'GET' );
          const body = await resp.json();
          dispatch( lugarLoaded( body ) );
      } catch (error) {
          console.log(error)
      }
  }

}

export const lugarLoadingNombre = (arregloDeBusqueda) => {
  return async(dispatch) => {
    
      try {  
          
          dispatch( lugarLoaded( arregloDeBusqueda ) );
      } catch (error) {
          console.log(error)
      }
  }

}

export const obtenerLugarporId = (id) => {
  return async(dispatch) => {
    
      try {  
          
          const resp = await fetchFirebase( `obtenerLugarporId/${ id }`, {}, 'GET' );
          const body = await resp.json();
          dispatch( lugarSetActive( body ) );
      } catch (error) {
          console.log(error)
      }
  }

}

const lugarLoaded = (lugares) => ({
  type: types.lugarLoaded,
  payload: lugares
})


export const search = (lugar) => ({ 
  type: types.search });
