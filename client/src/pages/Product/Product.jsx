import {useParams} from "react-router-dom";
import React, {useState} from "react";
import useFetch from "../../hooks/useFectch";
import Spinner from "../../components/Spinner/Spinner";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer";
import ShopPopUp from "../../components/ShopPopUp/ShopPopUp";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import Disclosure from "../../components/Disclosure/Disclosure";
function Product() {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const id = useParams().id
    const {data, loading, error,} = useFetch(`/products/${id}?populate=*`)
    const [validationAddToCart, setValidationAddToCart] = useState(false)
    const product = data

    const handleValidationAddToCart = () => {
        setValidationAddToCart(true)
    }

    React.useEffect(() => {
        if (quantity < 1) {
            setQuantity(1)
        } else if (quantity > 100) {
            setQuantity(100)
        }
        if (validationAddToCart) {
            setTimeout(() => {
                setValidationAddToCart(false)
            }, 2000)
        }
    })

    return (
        <>
        {error && <p>{error}</p>}
            {
                validationAddToCart && (
                    <ShopPopUp
                        show={validationAddToCart}
                        danger={false}
                        btnoff={true}
                        text={<><p className="text-2xl font-semibold">"{product.attributes?.title}"
                            <br/>
                            a bien été ajouté au panier
                        </p><span
                            className="text-xl">{quantity} x {
                            product.attributes?.price} €
                            </span><br/><span className="text-xl">Total: {
                            product.attributes?.price
                                * quantity} €</span></>}/>
                )
            }
            {
                loading ? <Spinner/> :
                    (
                        product ?
                            <>
                                <div className="
                                 container px-6 mx-auto pt-20 mb-4 min-h-screen flex justify-center  
                                 flex-col md:flex-row items-center md:items-start
                                 ">
                                    <div className={'w-full max-w-lg md:pt-8'}>
                                        <ImageSlider img={
                                            "https://api.pierrette-essentielle.com/" + product.attributes?.img?.data?.attributes?.url
                                        } img2={
                                            "https://api.pierrette-essentielle.com/" + product.attributes?.img2?.data?.attributes?.url
                                        }/>
                                    </div>
                                    <div className="md:mt-4 mt-2 max-w-sm w-full md:pl-4">
                                        <div className="border-b border-gray-200 pb-2">
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

                                            <ul className="text-sm leading-none text-gray-600 flex flex-row gap-2 align-items py-4">
                                                {
                                                product?.attributes.sub_categories?.data?.map((sub_category, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="text-gray-600 hover:text-gray-800"
                                                        >
                                                            {
                                                                sub_category.attributes?.title
                                                            } /
                                                        </li>
                                                    )
                                                })
                                            }
                                            </ul>
                                            {
                                                product.attributes?.solde ? (
                                                        <p className="text-gray-600 text-sm">
                                                              {product.attributes?.title} <br/> à 
                                                              <span className="text-green-600 font-semibold">
                                                                    {' '}{product.attributes?.price} €
                                                                </span>
                                                               € au lieu de 
                                                              {' '}
                                                              <span className="text-red-600 line-through">
                                                                    {
                                                                        product.attributes?.solde
                                                                    } €
                                                              </span>
                                                        </p>
                                                ) : (
                                                    null
                                                )
                                            }
                                        </div>
                                        <div
                                            className="pt-2 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-600 text-sm">Quantité</span>
                                                    <div
                                                        className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border 
                                                        border-gray-300
                                                        ">
                                                        <button
                                                            onClick={() => {
                                                                if (quantity > 1) {
                                                                    setQuantity(quantity - 1)
                                                                }
                                                            }}
                                                            >
                                                            <AiOutlineMinusCircle
                                                                className="text-gray-500 text-xl"/>
                                                        </button>
                                                        <span className="text-gray-500 text-sm
                                                            lg:text-base
                                                        ">{quantity}</span>
                                                        <button
                                                            onClick={() => {
                                                                setQuantity(quantity + 1)
                                                                }
                                                            }
                                                            >
                                                            <AiOutlinePlusCircle
                                                                className="text-gray-500 text-xl"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <button
                                            onClick={() => {
                                                dispatch(addToCart({
                                                    id: product.id,
                                                    title: product.attributes?.title,
                                                    desc: product.attributes?.desc,
                                                    price: product.attributes?.price,
                                                    img: product.attributes?.img?.data?.attributes?.url,
                                                    quantity: quantity
                                                }))
                                                handleValidationAddToCart()
                                            }
                                            }
                                            className="
                                            mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                                            "
                                        >
                                            <span
                                                className="mr-2 font-semibold items-center flex flex-row gap-2">
                                                    Ajouter au panier 
                                                <AiOutlineShoppingCart className="mr-2 "/>
                                                </span>

                                            {
                                                product.attributes?.solde !== 0 &&
                                                    <span className="text-sm">
                                                        {
                                                           ( product.attributes?.price * quantity).toFixed(2)
                                                        } €
                                                    </span>
                                            }
                                        </button>
                                        <div className="pt-4">
                                                <Disclosure
                                                    booleen={false}
                                                    title="Description ..."
                                                    children={
                                                        product.attributes?.desc
                                                    }
                                                />
                                        </div>
                                        <div className="pt-4">
                                            <Disclosure
                                                booleen={true}  
                                                title="Nous contacter ..."
                                                children={
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-gray-600 text-sm">
                                                            Pour toute question, n'hésitez pas à nous contacter
                                                        </p>
                                                        <a
                                                            href="mailto:es@pierrette-essentielle.com"
                                                            className="text-blue-600 text-sm"
                                                        >
                                                            Mail: es@pierrette-essentielle.com
                                                        </a>
                                                    </div>
                                                }
                                            >
                                            </Disclosure>
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