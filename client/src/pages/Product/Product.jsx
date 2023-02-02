import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";
import useFetch from "../../hooks/useFectch";
import Spinner from "../../components/Spinner/Spinner";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {AiOutlineMail, AiOutlineShoppingCart} from "react-icons/ai";

function Product() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const id = useParams().id
    const {
        data,
        loading,
        error,
    } = useFetch(
        `/products/${id}?populate=*`
    )

    const product = data

    return (
        <>
            <h1>Product</h1>
            {
                loading ? <Spinner/> :
                    (
                        product ?
                            <>
                                <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                                    <div className="md:hidden">
                                        <ImageSlider img={
                                            "http://localhost:1337" + product.attributes?.img?.data?.attributes?.url
                                        } img2={
                                            "http://localhost:1337" + product.attributes?.img2?.data?.attributes?.url
                                        }/>
                                    </div>
                                    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                                        <div className="border-b border-gray-200 pb-6">
                                            <p className="text-sm leading-none text-gray-600">{
                                                product.attributes?.type
                                            }</p>
                                            <h1
                                                className="
                                                    lg:text-2xl
                                                    text-xl
                                                    font-semibold
                                                    lg:leading-6
                                                    leading-7
                                                    text-gray-800
                                                    mt-2
                                                "
                                            >
                                                {product.attributes?.title}
                                            </h1>
                                        </div>
                                        <div
                                            className="py-4 border-b border-gray-200 flex items-center justify-between">
                                            <p className="text-base leading-4 text-gray-800">Size</p>
                                            <div className="flex items-center justify-center">
                                                <p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
                                                <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25"
                                                          strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <button
                                            className="
                                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
                                                text-base
                                                flex
                                                items-center
                                                justify-center
                                                leading-none
                                                text-white
                                                bg-gray-800
                                                w-full
                                                py-4
                                                hover:bg-gray-700
                                                flex-col gap-2
                                            "
                                                    >
                                            <span className="mr-2 font-semibold flex flex-row gap-2">Add to cart <AiOutlineShoppingCart className="mr-2 "/></span>

                                            <span>{
                                                product.attributes?.price
                                            }€</span>
                                        </button>
                                        <div>
                                            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                                                <span className="font-semibold">Description : <br/></span>
                                                {product.attributes?.desc}
                                            </p>
                                            <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                                            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition:
                                                100% calf leather, inside: 100% lamb leather</p>
                                        </div>
                                        <div>
                                            <div className="border-t border-b py-4 mt-7 border-gray-200">
                                                <div onClick={() => setShow(!show)}
                                                     className="flex justify-between items-center cursor-pointer">
                                                    <p className="text-base leading-4 text-gray-800">Shipping and
                                                        returns</p>
                                                    <button
                                                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                                        aria-label="show or hide"
                                                    >
                                                        <svg
                                                            className={"transform " + (show ? "rotate-180" : "rotate-0")}
                                                            width="10" height="6" viewBox="0 0 10 6" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25"
                                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div
                                                    className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")}
                                                    id="sect">
                                                    You will be responsible for paying for your own shipping costs for
                                                    returning your item. Shipping costs are nonrefundable
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="border-b py-4 border-gray-200">
                                                <div onClick={() => setShow2(!show2)}
                                                     className="flex justify-between items-center cursor-pointer">
                                                    <p className="text-base leading-4 text-gray-800">Contact us</p>
                                                    <button
                                                        className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                                        aria-label="show or hide"
                                                    >
                                                        <svg
                                                            className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                                                            width="10" height="6" viewBox="0 0 10 6" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25"
                                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div
                                                    className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")}
                                                    id="sect">

                                                    <button type="button"
                                                            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                                        <a href="mailto:noah.lhote56@gmail.com">Send Mail</a>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <p>Product not found</p>
                    )
            }
        </>
    )
}

export default Product