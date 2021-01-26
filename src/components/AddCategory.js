import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario de refrescar la pagina

        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
            console.log('Submit hecho');
        } else {
            console.log('La categoría debe tener más de 2 letras');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
