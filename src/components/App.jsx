import React from 'react'
import './App.css'
import { Navigationbar } from './Navbar/Navbar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <Navigationbar fixed="top" />
      <ItemListContainer listaProductos={"Productos en venta"} />
    </div>
  )
}