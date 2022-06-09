import { combineReducers } from 'redux';
import { puntosReducer } from './puntosReducer';
import { uiReducer } from './uiReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    puntos: puntosReducer
})

