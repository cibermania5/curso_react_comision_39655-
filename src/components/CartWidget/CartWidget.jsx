import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export const CartWidget = ({ cantCarrito }) => {
    return (
         
            // <span  class="badge bg-info text-dark">Productos en el carrito: {cantCarrito}</span>
            <span  class="badge bg-info text-dark">
            <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#818fa7",}}/>
                 3
            </span>
)
}