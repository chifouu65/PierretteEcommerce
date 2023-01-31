import {useParams} from "react-router-dom";
import React from "react";

const data = [
    {
        id: 1,
        name: 'Product 1',
        category: 'Category 1',
        price: 100
    },
    {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        price: 200
    },
    {
        id: 3,
        name: 'Product 3',
        category: 'Category 3',
        price: 300
    },
    {
        id: 4,
        name: 'Product 4',
        category: 'Category 4',
        price: 400
    },
    {
        id: 5,
        name: 'Product 5',
        category: 'Category 5',
        price: 500
    }
]
function Product () {
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const {id} = useParams()

    React.useEffect(() => {
        setLoading(true)
        try {
            setProduct(data.find(item => item.id === Number(id)))
        } catch (e) {
            setError(e)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [id])

    return (
        <>
            <h1>Product</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>
            )}
        </>
    )
}

export default Product