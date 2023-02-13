import {Link} from "react-router-dom";
import React from "react";

function Card({title, desc, img, img2, price, isNew, id, category}) {
    const [selectedImg, setSelectedImg] = React.useState(img)

    const handleMouseEnter = () => {
        setSelectedImg(img2)
    }

    return (

        <article>
            <div
                className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow ">
                <div className="relative pb-48 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img className="w-full h-full object-cover"
                             src={selectedImg}
                             alt={title}
                             onMouseEnter={handleMouseEnter}
                             onMouseLeave={() => setSelectedImg(img)}
                        />
                    </div>
                </div>
                <div className="px-5 pb-5">
                    <h5 className="pt-4 text-xl font-semibold tracking-tight text-gray-900">
                        {title}
                    </h5>
                    <p className="mt-2 text-gray-600">{
                        category &&
                        category.map((item, index) => {
                                return (
                                    <span className="text-blue-700" key={index}>
                                        {item}
                                    </span>
                                )
                            }
                        )}
                    </p>
                    <p className="mt-2 text-gray-600">{
                        desc && desc.length > 50 ? desc.substring(0, 30) + '...' : desc
                    }</p>
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className={
                            isNew ? 'text-green-500' : null
                        }>{
                            isNew ? 'New !' : null
                        }</span>

                    </div>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-3xl font-bold text-gray-900">
                            {price}€
                        </span>
                        <Link to={'/product/' + id}
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            View Product
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card