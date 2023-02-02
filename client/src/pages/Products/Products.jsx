import React from 'react'
import useFetch from "../../hooks/useFectch";
import {Link, useParams} from "react-router-dom";
import List from "../../components/List/List";
import Spinner from "../../components/Spinner/Spinner";
import Category from "../../components/Category/Category";

function Products() {

    const catId = parseInt(useParams().id);
    const { data, loading, error } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${
            catId ? catId : 1
        }`
    );

    const [isPage, setIsPage] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState(200);
    const [sort] = React.useState('asc');
    const [selectedSubCategory, setSelectedSubCategory] = React.useState(
        []
    );

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCategory(isChecked ?
            [...selectedSubCategory, value]
                :
            selectedSubCategory.filter((item) => item !== value)
        );
    };

    React.useEffect(() => {
        if(catId === 1) {
            setIsPage("Produits Pierrette")
        } else {
            setIsPage("Astrologie")
        }
    }, [catId])

    return (
        <div className="products">
            <h1 className='text-center lg:text-3xl text-2xl font-semibold my-4'>{isPage}</h1>
            <Link
                className='text-center text-1xl lg:text-2xl text-blue-500 font-semibold my-4 px-4'
                to={catId === 1 ? '/products/2' : '/products/1'}>
                {catId === 1 ? '> Aller vers les produits Astrologie' : '> Aller vers les produits Pierrette'}
            </Link>
            <div className="left max-w-lg">
                <div className="filterItem py-4 px-4">
                    <h2 className='pb-4'>Categories</h2>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                    {data?.map((item) => (
                        <Category
                            key={item.id}
                            item={item}
                            handleChange={handleChange}
                        />

                    ))}
                    </ul>
                </div>
                <div className="filterItem">
                    <div className="inputItem px-4 py-4">
                        <label htmlFor="steps-range"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                    </div>
                </div>
            </div>
            <div className="right">
                {loading ? <Spinner/> : <h1><br/>Products</h1>}

                <div className="h-screen">
                    <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategory}/>
                </div>
            </div>
        </div>
    );
};

export default Products