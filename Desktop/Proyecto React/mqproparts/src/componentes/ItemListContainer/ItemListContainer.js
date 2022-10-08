import {useState, useEffect } from 'react'
import { getProducts } from './ansycMonck'

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
                <h1> Hola</h1>
                <div>
                    {products.map (prod => (
                        <div key={prod.id}>
                            <h1>{prod.name}</h1>
                            <h2>$ {prod.price}</h2>
                            <button> Ver Detalle</button>
                        </div>
                    ))}
            

                </div>             
         </div>  
    
  )
}
export default ItemListContainer