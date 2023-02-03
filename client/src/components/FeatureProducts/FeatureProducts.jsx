import useFetch from "../../hooks/useFectch";
import Spinner from "../Spinner/Spinner";
import Card from "../Card/Card";


function FeatureProducts({type}) {

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div>
            {loading && <Spinner/>}
            {error && <p className='text-center text-2xl text-red-500 font-semibold my-4'>{error.message}</p>}
            {
                data && data.length > 0 && (
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                        {data.map((product, index) => {
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
                                        id={product.id}
                                    />
                                )
                            }
                        )}
                    </div>
                )
            }
        </div>
    )

}

export default FeatureProducts