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
        const value = e;
        if (selectedSubCategory.includes(value)) {
            setSelectedSubCategory(selectedSubCategory.filter((item) => item !== value));
        }
        else {
            setSelectedSubCategory([value]);
        }

    };

        return (
            <div className="products container mx-auto mt-20 min-h-screen">
                <div className="container">

                    {loading ? <Spinner/> :
                    <>
                            <div className="mx-4 border flex flex-col justify-between md:rounded-md overflow-hidden">
                                <div className="flex flex-col md:flex-row justify-center items-center w-full ">
                                    <button 
                                        className={
                                        selectedSubCategory.length === 0 ? 
                                        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full h-full md:h-16" :
                                        "bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 w-full h-full md:h-16"
                                        }
                                        onClick={() => setSelectedSubCategory([])}
                                    >
                                        All
                                    </button>
                                    {data?.map((item) => (
                                        <button key={item.id}
                                            className={
                                                selectedSubCategory.includes(item.id) ? 
                                                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full h-full md:h-16" :
                                                "bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 w-full h-full md:h-16"
                                            }
                                            onClick={() => handleChange(item.id)}>
                                            {item.attributes.title}
                                        </button>
                                    ))}
                                </div>
                            <div 
                                className="border flex gap-4 flex-row items-center justify-center text-black font-bold py-2 px-4 w-full h-full"
                                onClick={() => setSelectedSubCategory([])}
                            >
                                <p>
                                    {maxPrice}€
                                </p>
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
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                                    "/>
                            </div>
                        </div>
                        <br/>
                        <List  maxPrice={maxPrice} sort={sort} subCats={selectedSubCategory}/>
                    </>
                    }
                </div>
            </div>
        )
}

export default Products