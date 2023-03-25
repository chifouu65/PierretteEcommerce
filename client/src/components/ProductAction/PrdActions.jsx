
function PrdActions({img, name, quantity, price, incr, decr, remove}) {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Produit
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantité
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Prix
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b ">
                    <td className="w-32 p-4">
                        <img
                            className={"w-20 h-20 object-cover rounded"}
                            src={
                            img
                        } alt={name}/>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                        {name}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={incr}
                                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                type="button">
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div>
                                <p className="text-gray-900">{quantity}</p>
                            </div>
                            <button
                                onClick={decr}
                                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                                type="button">
                                <span className="sr-only">Quantity button</span>
                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                        {price}€
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
)
}

export default PrdActions