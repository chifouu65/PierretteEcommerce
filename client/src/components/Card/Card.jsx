import {Link} from "react-router-dom";
import React from "react";
import {FaShoppingCart} from "react-icons/fa";

function Card({title, desc, img, img2, price, isNew, id, category, solde}) {
    return (

            <Link to={'/product/' + id} className="flex justify-center items-center pt-2">
                <div
                    className="container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <div>
                        <span
                            className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                            {isNew ? 'New !' : null}
                        </span>
                        <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                            {title}
                        </h1>
                        <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
                            {
                                category.length === 1 ?
                                    <ul className="flex flex-wrap">
                                        <h3 className="text-gray-800 font-bold pr-1">
                                            Catégorie:
                                        </h3>
                                        <li className="text-gray-700">
                                            {category[0]}.
                                        </li>
                                    </ul>
                                    :
                                    <ul className="flex flex-wrap">
                                        <h3 className="text-gray-800 font-bold pr-1">
                                            Catégories:
                                        </h3>
                                        {
                                            category.map((cat, index) => {
                                                return (
                                                    <li key={index} className="text-gray-700">
                                                        {
                                                            index === category.length - 1 ?
                                                                <span>{cat}.</span>
                                                                :
                                                                <span
                                                                className='pr-1'
                                                                >{cat}, </span>
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                            }
                        </p>
                    </div>
                    {
                        solde ?
                            <div className="
                                    absolute top-30 right-0 bg-green-500 text-white px-2 py-1 rounded-lg
                                ">
                                    <span className="text-gray-800">
                                        <span className="text-white">
                                            PROMO
                                        </span><br/>
                                        {
                                            (price - solde).toFixed(2)
                                        }€
                                    </span>
                            </div>
                            : null
                    }
                    <img className="w-full cursor-pointer
                     h-80 sm:h-96 md:h-80 lg:h-64
                     object-cover"
                         src={img}
                         alt={
                        desc && desc.length > 120 ? desc.substring(0, 100) + '...' : desc
                    }/>
                    <div className="flex p-4 justify-between">
                        <div className="flex items-center space-x-2">
                            <img className="w-10 h-10 rounded-full object-cover"
                                 src={img2}
                                 alt={title}/>
                            <h2 className="text-gray-800 font-bold cursor-pointer">
                                {desc && desc.length > 30 ? desc.substring(0, 20) + '...' : desc}
                            </h2>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex space-x-1 items-center">
                                  <span>
                                    <FaShoppingCart/>
                                  </span>
                                <span>
                                    {
                                        solde ? (
                                                <>
                                            <span className="text-red-500 line-through">
                                                {solde}€
                                            </span>
                                                    <br/>
                                                    <span className="text-green-500">
                                                {
                                                    price
                                                }€
                                            </span>
                                                </>
                                            ) :
                                            <span className="text-gray-800">
                                            {price}€
                                        </span>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    )
}

export default Card