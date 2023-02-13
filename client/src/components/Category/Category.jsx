import React from "react";

function Category({item, handleChange}) {
    return (
        <>
            <li className="w-full ">
                <div className="flex items-center pl-3">
                    <input
                           type="checkbox"
                           id={item.id}
                           value={item.id}
                           onChange={handleChange}
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                    <label
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                        htmlFor={item.id}>
                        {item.attributes.title}
                    </label>

                </div>
            </li>
        </>
)
}

export default Category
