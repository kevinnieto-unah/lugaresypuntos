import { types } from "../types/types";

const initialState ={
    lugares: [],
    activeLugar: null,
    loadingLugar: false

}

export const lugaresReducer =(state=initialState,action)=>{
    switch (action.type) {

//TODO SOBRE LUGARES
        case types.lugarSetActive:
            return {
                ...state,
                activeLugar: action.payload
            }
        case types.startLoadingLugar:
            return {
                ...state,
                loadingLugar: true
            }
        case types.finishLoadingLugar:
            return {
                ...state,
                loadingLugar: false
            }

        case  types.lugarAddNew:
            return {
                ...state,
                lugares: [ action.payload, ...state.lugares ]
                
            }      
        
        case types.eventClearActiveLugar:
            return {
                ...state,
                activeLugar: null
            }   
        case types.lugarUpdated:
            return {
                ...state,
                //Busca el objeto con ese id y lo reemplaza con el nuevo
                lugares: state.lugares.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        
        case types.lugarDeleted:
            return {
                lugares: state.lugares.filter(
                    e => ( e.id !== state.activeLugar.id )
                ),
                activeLugar: null
            }

        case types.lugarLoaded:
            return {
                ...state,
                lugares: [ ...action.payload ],
           
            }


            
            case types.search: 
                return {
                lugares: state.lugares.filter(
                    e => ( e.nombre === state.lugares.nombre )
                ),
                activeLugar: null
            }
            
         
        
        
        
        default:
            return state
    }
}