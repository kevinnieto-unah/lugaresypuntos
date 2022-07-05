import { types } from "../types/types";

const initialState ={
    lugares: [
        {
            id: new Date().getTime(),
            nombre: 'Colonia Canaan',
            latitud: '19.4',
            longitud: '-99.1',
            rango: '10',
            tipo: 'Colonia',
            disponibilidad: true,
            numeroDePuntos: 1,
            puntos:[
                {
                    id: new Date().getTime(),
                    nombre: 'Colonia Kennedy',
                    latitud: '19.4',
                    longitud: '-99.1'
                },
            ]

        },
    ],
    activeLugar: null,

}

export const lugaresReducer =(state=initialState,action)=>{
    switch (action.type) {

//TODO SOBRE LUGARES
        case types.lugarSetActive:
            return {
                ...state,
                activeLugar: action.payload
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
//OJO AQUI
            // case types.deletePuntosActiveLugar:
            //     return {
            //         ...state,
            //         activeLugar: {
            //             puntos: state.puntosLugar.filter(
            //                 e => ( e.id !== state.activePunto.id )
            //             ),
            //         }
            //     }

            // case types.addPuntosActiveLugar:
            //         return {
            //             ...state,
            //             activeLugar:{
            //                 puntos: [action.payload, ...state.puntosLugar ]
            //             }
                        
                      
           //         }

            case types.lugaresLogoutCleaning:
                return {
                    ...state,
                    activeLugar: null,
                    lugares: []
                }


            
         
        
        
        
        default:
            return state
    }
}