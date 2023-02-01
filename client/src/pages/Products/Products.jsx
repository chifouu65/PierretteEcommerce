import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";

function Products() {

    const [products, setProducts] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const fetchData
            = async () => {
            setLoading(true)
            try {
                setError(null)
                const data = await axios.get(process.env.REACT_APP_API_URL + '/products?populate=*',
                    {
                        headers: {
                            Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`
                        }
                    })
                setProducts(data.data.data)
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
            .catch(e => {
                setError(e)
            })
    }, [])

    return (
        <div className={'container mx-auto'}>

            {loading && <p className='
            text-center text-2xl text-gray-500 font-semibold my-4
            '>Loading...</p>}
            {error && <p className='
            text-center text-2xl text-red-500 font-semibold my-4
            '>{error.message}</p>}

            { loading || error ? null :
                (
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4'}>
                        {products.map((product, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={product.attributes.title}
                                    desc={product.attributes.desc}
                                    img={
                                        "http://localhost:1337" + product.attributes?.img?.data?.attributes?.url
                                    }
                                    img2={
                                        "http://localhost:1337" + product.attributes?.img2?.data?.attributes?.url
                                    }
                                    price={product.attributes.price}
                                    isNew={product.attributes.isNew}
                                />
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default Products