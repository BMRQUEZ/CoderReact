import {useState, useEffect } from 'react'
import { getProducts } from './ansycMonck'
import ItemList from '../ItemList/ItemList'
const ItemListContainer=({greeting}) => {
    const [products, setProducts]= useState([])

    useEffect (() => { 
        getProducts().then(products =>{
            setProducts(products)
        })
        }, [])
        console.log (products)
    return (
          <div> 
                <h1> Productos</h1>
                  <ItemList products={products}/>     
         </div>  
    
  )
}
export default ItemListContainer