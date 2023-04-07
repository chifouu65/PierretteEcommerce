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
            <Link to={'/product/' + id}>
                 {
                    solde ? 
                    <div className="
                        absolute bg-red-500 text-white font-bold text-sm rounded-full px-2 py-1 ml-2 mt-2
                    ">
                        -{
                        (solde - price).toFixed(2)
                        }€
                    </div>
                    : null
                 }
                <div className="w-full ">
                    <div 
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                        className="w-full h-72 bg-gray-300 rounded-lg">
                        <img src={
                            isHover ? img2 : img
                        } alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h1 className=" text-center
                        text-gray-700 font-bold text-lg 
                    ">
                        {title}
                    </h1>
                    <p className="text-center
                        text-gray-500 
                    ">
                        {
                        price
                        } €
                    </p>
                </div>
            </Link>
        </>
    )
}

export default Card