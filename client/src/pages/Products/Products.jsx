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

            <div className=" container">

                <div
                    className='container mx-auto md:max-w-sm md:w-full flex flex-col justify-between max-w-sm rounded overflow-hidden border'>
                    <div className="flex flex-col pr-4 py-4 bg-slate-50 w-full">
                        <h3 className=' text-lg font-semibold px-4'>
                            Catégories
                        </h3>
                        {data?.map((item) => (
                            <>
                                <div className="flex items-center px-4 mb-1 mt-2" key={item.id}>
                                    <input
                                        type="checkbox"
                                        value={item.id}
                                        onChange={handleChange}
                                        className="form-checkbox h-4 w-4 text-blue-600"
                                    />
                                    <label
                                        className="ml-2 text-sm font-medium text-gray-900"
                                        htmlFor={item.id}>
                                        {item.attributes.title}
                                    </label>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="filterItem max-w-lg px-4 bg-slate-100 w-full flex items-center">
                        <div className="inputItem py-4 w-full">
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