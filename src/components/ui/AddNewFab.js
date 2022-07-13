import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';


export const AddNewFab = () => {
    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch( uiOpenModal() );
        
        
        
    }


    return (
        <button
            className="fixed top-0 left-0 right-0"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
