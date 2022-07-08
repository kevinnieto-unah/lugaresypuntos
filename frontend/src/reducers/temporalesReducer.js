import { types } from "../types/types";

const initialState ={
    puntosTemporales:[],
    temporalActive: [],

}

export const temporalesReducer =(state=initialState,action)=>{
    switch (action.type) {
        case types.setActivePuntoTemporal:
                return {
                    ...state,
                    temporalActive: action.payload
                }

        case types.deletePuntosTemporales:
            return {
                ...state,
                puntosTemporales: [...state.puntosTemporales.splice(0, action.payload), ...state.puntosTemporales.splice(1)],
            }
        
        case types.clearActivePuntosTemporales:
                    return {
                        puntosTemporales: [],
                        temporalActive: []
                    } 
                    
            
        case types.addPuntosTemporales:
            return {
                ...state,
                puntosTemporales: [action.payload, ...state.puntosTemporales ]
              
            }

        case types.temporalesLogoutCleaning:
            return {
                ...state,
                puntosTemporales:[],
                temporalActive: []
            }
        case types.puntosCargados:
            return {
                ...state,
                puntosTemporales: [ ...action.payload ],
           
            }
         
        
        
        
        default:
            return state
    }
}