import React from 'react'
import useFetch from "../../hooks/useFectch";
import {Link, useParams} from "react-router-dom";
import List from "../../components/List/List";
import Spinner from "../../components/Spinner/Spinner";
import Category from "../../components/Category/Category";

function Products() {

    const catId = parseInt(useParams().id);
    const {data, loading, error} = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${
            catId ? catId : 1
        }`
    );

    const [isPage, setIsPage] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState(200);
    const [sort] = React.useState('desc');
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
        if (catId === 1) {
            setIsPage("Produits Astrologie")
        } else {
            setIsPage("Produits Pierrette")
        }
    }, [catId])

    return (
        <div className="products container mx-auto pt-4">
            <h1 className='text-center lg:text-3xl text-2xl font-semibold my-4'>{isPage}</h1>

            <div className="left pt-4 flex flex-col">

                    <div className=" container md:max-w-sm pb-6">
                        <div className="p-6 bg-gray-100 mx-4 rounded-lg">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <Link to={catId === 1 ? '/products/2' : '/products/1'}>
                                    {catId === 1 ? '> Aller vers les produits Pierrette' : '> Aller vers les produits Astrologie'}
                                </Link>
                            </button>
                            <div className="filterItem py-4 px-4">
                                <ul className="items-center w-full text-sm font-medium text-gray-900 flex flex-col">
                                    {data?.map((item) => (
                                        <Category
                                            key={item.id}
                                            item={item}
                                            handleChange={handleChange}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="filterItem max-w-lg">
                                <div className="inputItem">
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
                    </div>
                <div className="right min-h-max">
                    {loading ? <Spinner/> :
                        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategory}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products