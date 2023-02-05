import {Link} from "react-router-dom";
import React from "react";

function Card({title, desc, img, img2, price, isNew, id}) {
    const [selectedImg, setSelectedImg] = React.useState(img)

    const handleMouseEnter = () => {
        setSelectedImg(img2)
    }

    const Star = (color) => {
        return (
            <svg aria-hidden="true"
                 className={color ? "w-5 h-5 text-yellow-500" : "w-5 h-5 text-gray-300"}
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <title>{
                    color ? 'Yellow star' : 'Gray star'
                }</title>
                <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        )
    }

    return (

        <article>
            <div
                className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    <h5 className="pt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{
                        desc && desc.length > 100 ? desc.substring(0, 50) + '...' : desc
                    }</p>
                    <div className="flex items-center mt-2.5 mb-5">

                        <div className="flex items-center">
                            {
                                Star(true)
                            }

                        </div>

                        <span className={
                            isNew ? 'text-green-500 px-4' : null
                        }>{
                            isNew ? 'New' : null
                        }</span>

                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {price}€
                        </span>
                        <Link to={'/product/' + id}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Product
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card