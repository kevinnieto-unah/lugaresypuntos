import { types } from "../types/types";

const initialState ={
    puntosTemporales:[],
    loadingTemporal: false

}

export const temporalesReducer =(state=initialState,action)=>{
    switch (action.type) {
       
        case types.deletePuntosTemporales:
            return {
                ...state,
                puntosTemporales: [...state.puntosTemporales.splice(0, action.payload), ...state.puntosTemporales.splice(1)],
            }
        case types.cleanPuntosTemporales:
                return {
                    ...state,
                    puntosTemporales: [],
                }
        case types.startLoadingTemporal:
            return {
                ...state,
                loadingTemporal: true
            }
        case types.finishLoadingTemporal:
            return {
                ...state,
                loadingTemporal: false
            }
                    
            
        case types.addPuntosTemporales:
            return {
                ...state,
                puntosTemporales: [action.payload, ...state.puntosTemporales ]
              
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