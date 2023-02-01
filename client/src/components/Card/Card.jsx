import {Link} from "react-router-dom";
import React from "react";
function Card({
        title,
        desc,
        img,
        img2,
        price,
        isNew,}){

    const [selectedImg, setSelectedImg] = React.useState(img)
    const handleMouseEnter = () => {
        setSelectedImg(img2)
    }

    return (
        <Link to={'/product/' + title}>
            <div
                className="bg-white overflow-hidden border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative pb-48 overflow-hidden">
                    <img className="absolute inset-0 w-full h-full object-cover"
                            src={selectedImg}
                            alt={title}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={() => setSelectedImg(img)}
                    />
                </div>
                <div className="p-5">
                    {isNew && <span className="px-2 py-1 font-semibold text-green-700 bg-green-100 rounded-full">New</span>}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-2">
                        {title}
                    </h5>
                    <div className="flex flex-col">
                        <p className="mb-3 text-gray-600 dark:text-gray-400">
                            {desc.substring(0, 60)}
                            ...
                        </p>
                        <p className="mb-3 text-gray-600 dark:text-gray-400 font-bold">
                            {price}€
                        </p>
                    </div>
                    <button className="px-4 py-2 font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800">Add to Card</button>
                </div>
            </div>
        </Link>
    )
}

export default Card