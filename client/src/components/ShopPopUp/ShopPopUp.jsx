import React from "react";

function ShopPopUp({show, danger, text, btnoff}) {

    return (
        show && (
            <div id="popup-modal" tabIndex="-1"
                 className="fixed
                    inset-0 border-2 border-gray-300 bg-gray-900 bg-opacity-50
                    top-20 left-0 flex items-center justify-center w-full h-full z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full
                 ">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="p-6 text-center items-center flex justify-center flex-col">
                            <img src={require("../../assets/ShoppingAdd.gif")} width={100} height={100}/>
                            <h3 className={
                                !danger ? "text-gray-700 dark:text-gray-200 text-2xl font-semibold " : "text-red-600 dark:text-red-400 text-2xl font-semibold "
                            }>
                                {text}
                            </h3>
                            {
                                !btnoff && (
                                    <div className="flex justify-center">
                                        <button

                                            data-modal-hide="popup-modal" type="button"
                                            className={!danger ? "text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" : "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"}>
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-hide="popup-modal" type="button"
                                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                            cancel
                                        </button>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    )
}

export default ShopPopUp;