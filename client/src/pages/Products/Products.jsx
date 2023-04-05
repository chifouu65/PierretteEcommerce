import React from 'react'
import useFetch from "../../hooks/useFectch";
import {Link, useParams} from "react-router-dom";
import List from "../../components/List/List";
import Spinner from "../../components/Spinner/Spinner";
import Category from "../../components/Category/Category";

function Products() {

    const {data, loading} = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=2`
    );

    const [maxPrice, setMaxPrice] = React.useState(200);
    const [sort] = React.useState('desc');
    const [selectedSubCategory, setSelectedSubCategory] = React.useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCategory(isChecked ?
            [...selectedSubCategory, value]
            :
            selectedSubCategory.filter((item) => item !== value)
        );
    };

    return (
        <div className="products container mx-auto mt-20 min-h-screen">
            <div className="container">
                <div className='border border-gray-200 container mx-auto max-w-xs flex flex-col justify-between rounded overflow-hidden '>
                    <div className="flex flex-col w-full">
                        <h3 className=' text-lg font-semibold p-2'>
                            Catégories
                        </h3>
                        {data?.map((item) => (
                            <>
                                <div className="flex items-center pl-2 border-b border-t border-gray-200" key={item.id}>
                                    <input
                                        id={item.id}
                                        name={item.id}
                                        type="checkbox"
                                        value={item.id}
                                        onChange={handleChange}
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                    />
                                    <label
                                        id={item.id}
                                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        htmlFor={item.id}>
                                        {item.attributes.title}
                                    </label>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="filterItem max-w-lg p-2 w-full flex items-center">
                        <div className="inputItem py-2 w-full">
                            <label htmlFor="steps-range"
                                   className="block mb-2 text-sm font-medium text-gray-900 ">
                                {`Price: ${maxPrice}€`}
                            </label>
                            <input
                                id="steps-range"
                                type="range"
                                min={0}
                                max={200}
                                onChange={(e) => setMaxPrice(
                                    e.target.value
                                )}
                                value={maxPrice}
                                step="1"
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                        </div>
                    </div>
                </div>

                <br/>
                <div className="right min-h-max ">
                    {loading ? <Spinner/> :
                        <List  maxPrice={maxPrice} sort={sort} subCats={selectedSubCategory}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products