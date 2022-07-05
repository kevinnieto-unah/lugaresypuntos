import { types } from "../types/types";

const initialState ={
    checking: true,
    puntos: [ ],
    activePunto: null,

}

export const puntosReducer =(state=initialState,action)=>{
    switch (action.type) {

        case types.puntoSetActive:
            return {
                ...state,
                activePunto: action.payload,
           
            }


        case  types.puntoAddNew:
            return {
                ...state,
                puntos: [ action.payload, ...state.puntos ],
           
                
            }      
        
        case types.eventClearActivePunto:
            return {
                ...state,
                activePunto: null,
           
            }   
        case types.puntoUpdated:
            return {
                ...state,
                //Busca el objeto con ese id y lo reemplaza con el nuevo
                puntos: state.puntos.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                ),
           
            }
        
        case types.puntoDeleted:
            return {
                ...state,
                puntos: state.puntos.filter(
                    e => ( e.id !== state.activePunto.id )
                ),
                activePunto: null,
           
            }

        case types.puntoLoaded:
            return {
                ...state,
                puntos: [ ...action.payload ],
           
            }
        case types.puntosLogoutCleaning:
            return {
                ...state,
                activePunto: null,
                puntos: []
            }
            
    
        
        

        
        
        
        default:
            return state
    }
}