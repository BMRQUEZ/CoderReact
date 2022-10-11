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
            <div>
                <h1>{product?.name} </h1>
                <h2>{product?.category} </h2>             
                <h3>{product?.description} </h3>
                <h3>Stock disponible {product?.stock} </h3>
        
            </div>
        </div>
    )
}
export default ItemDetailContainer