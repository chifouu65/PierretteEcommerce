import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({title, desc, img, img2, price, isNew, id, category, solde}) {
    
    const [isHover, setIsHover] = React.useState(false);

    const handleHover = () => {
        setIsHover(!isHover);
    }

    return (
        <>
            <div className="px-4 md:px-0 w-full md:w-52 min-h-96 h-full flex flex-col gap-2 justify-between">
                {
                    solde && (
                        <div className="absolute bg-red-500 text-white font-bold px-2 py-1 rounded-lg">
                            -{
                                (solde - price).toFixed(2)
                            }€
                        </div>
                    )
                }
                <img 
                    className="object-center rounded-lg object-cover w-full md:w-52 h-72 md:h-52"
                    src={
                        isHover ? img2 : img
                    }
                    alt="..."
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                />
                <Link  to={'/product/' + id} className="text-xl xl:text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </Link>
                <p className="font-normal text-gray-700 ">
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
                <Link to={'/product/' + id} className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
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
        </>
    )
}

export default Card