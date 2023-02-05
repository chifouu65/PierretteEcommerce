import React from "react";

function Category({item, handleChange}) {
    return (
        <>
            <li className="w-full max-w-sm border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                    <input
                           type="checkbox"
                           id={item.id}
                           value={item.id}
                           onChange={handleChange}
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        htmlFor={item.id}>
                        {item.attributes.title}
                    </label>

                </div>
            </li>
        </>
)
}

export default Category
