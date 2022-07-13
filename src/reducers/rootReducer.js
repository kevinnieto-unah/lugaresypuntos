import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { lugaresReducer } from './lugaresReducer';
import { puntosReducer } from './puntosReducer';
import { temporalesReducer } from './temporalesReducer';
import { uiReducer } from './uiReducer';



export const rootReducer = combineReducers({
    auth: authReducer,//Este si lo hicimos nosotros esta en los reducers
    temporales: temporalesReducer,//Este si lo hicimos nosotros esta en los reducers
    ui: uiReducer,
    puntos: puntosReducer,
    lugares: lugaresReducer,
})

