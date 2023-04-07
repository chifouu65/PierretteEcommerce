import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFectch";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";
function FeatureProducts({type}) {

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );
    const [slider, setSlider] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)

    useEffect(() => {
        if (data) {
            setSliderMax(data.length)
        } else {
            setSliderMax(0)
        }
    }, [data])

    const handleSlider = (e) => {
        if (e.target.id === 'prev') {
            if (slider > 0) {
                setSlider(slider - 1)
            } else {
                setSlider(sliderMax - 1)
            }
        } else {
            if (slider < sliderMax - 1) {
                setSlider(slider + 1)
            } else {
                setSlider(0)
            }
        }
    } 

    if (error) {
        return (
            <div className="flex flex-row items-center justify-center w-full h-full">
                <h3 className="text-2xl font-bold text-center text-gray-800">
                    Une erreur est survenue
                </h3>
            </div>
        )
    }
     
    if (loading) {
        return (
            <div className="flex flex-row items-center justify-center w-full h-full">
                <Spinner />
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Nos produits
                </h2>
                <div className="flex flex-col items-center justify-center w-full h-92">
                    <div className="flex flex-row items-center justify-center w-full h-full">
                        <button
                            id="prev"
                            onClick={handleSlider}

                            className="flex flex-row items-center justify-center w-10 h-10 text-2xl font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex flex-row items-center justify-center w-full h-full">
                        <div className=" flex flex-row items-center justify-center w-full h-full">
                                        {
                                            data && data.length > 0 ? (
                                                <div className="flex flex-row items-center justify-center w-full h-full">
                                                    {
                                                        data.map((product, index) => {
                                                            console.log(product.attributes)
                                                            const { price, title, desc, img} = product.attributes
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className={index === slider ? 'flex flex-row items-center justify-center w-full h-full' :
                                                                        'hidden'
                                                                    }
                                                                >
                                                                    <Link to={'/product/' + product.id}  className="flex flex-col items-center justify-center w-full h-1/2 px-4">
                                                                        <div className="flex md:flex-row flex-col items-center justify-center w-full h-1/2 gap-4">
                                                                            <img
                                                                                src={"https://api.pierrette-essentielle.com/" + img.data.attributes.url}
                                                                                alt={product.name}
                                                                                className="object-cover w-1/2 rounded-lg h-72"
                                                                            />
                                                                            <div className="flex flex-col items-center justify-center w-full h-full">
                                                                                <h3 className="text-2xl font-bold text-center text-gray-800">
                                                                                    {title}
                                                                                </h3>
                                                                                <p className="text-normal text-center text-gray-800 px-12">
                                                                                    {
                                                                                        desc.length > 100 ? desc.substring(0, 100) + '...' : desc
                                                                                    }
                                                                                </p>
                                                                                <p className="text-xl font-bold text-center text-gray-800">
                                                                                    {price} €
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : (
                                                <div className="flex flex-row items-center justify-center w-full h-full">
                                                    <h3 className="text-2xl font-bold text-center text-gray-800">
                                                        Aucun produit
                                                    </h3>
                                                </div>
                                            )
                                        }
                                    </div>
                        </div>
                        <button
                            onClick={handleSlider}

                            className="flex flex-row items-center justify-center w-10 h-10 text-2xl font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
                            
        </>
    )

}

export default FeatureProducts