import { useState,  useEffect } from "react"
import { getProduct } from "../ItemListContainer/ansycMonck"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    useEffect(() => {
        getProduct ('1').then (product => {
            setProduct(product) 
    })
}, [])

console.log (product)
    return (
        <div>
            <h1>Detalle del producto</h1>
            
        </div>
    )
}
export default ItemDetailContainer