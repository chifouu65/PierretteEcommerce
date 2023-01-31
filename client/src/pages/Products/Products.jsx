import React from 'react'
import {Link} from "react-router-dom";

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

function Products() {

    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        try {
            setProducts(data)
        } catch (e) {
            setError(e)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    console.log(products)

    return (
        <div className={'container mx-auto'}>
            <h1>Products</h1>

            {error && <p>{error.message}</p>}
            {loading ? <p>Loading...</p> :
                (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-lg
                        p-4">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {product.category}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {product.price}
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Products