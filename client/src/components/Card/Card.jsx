import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({title, desc, img, img2, price, isNew, id, category, solde}) {
    return (

        <>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img 
                className="object-cover object-center w-full h-56 rounded-t-lg"
                src={img}
                alt="..."
            />
            <div className="p-5 ">
                <Link  to={
                    '/product/' + id
                } className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </Link>
                <p className="mb-3 font-normal text-gray-700 ">
                    {desc && desc.length > 40 ? desc.substring(0, 40) + '...' : desc}
                    <br/>
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
                </p>
                <Link to={
                    '/product/' + id
                } className="
                inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    {
                        solde ? 
                        (
                            <>
                                {price}€
                            </>
                        ) : (
                            <>
                                {price}€
                            </>
                        )
                    }
                    <FaShoppingCart className="ml-2" />
                </Link>
            </div>
        </div>
        </>
    )
}

export default Card