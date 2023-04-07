import Card from "../Card/Card";
import React from "react";
import Spinner from "../Spinner/Spinner";
import useFetch from "../../hooks/useFectch";

function List({subCats, maxPrice, sort, catId}) {

    const {data, loading} = useFetch(
        `/products?populate=*&[filters][categories][id]=2${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price`
    );
    return (
        loading ? 
        <section classNameName="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto animate-pulse">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>

                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                </div>
            </div>
        </section>
    : 
        <section classNameName="bg-white">
            <div className="container px-6 mx-auto">

                <div className="grid grid-cols-1 gap-3 mt-8 xl:mt-6 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {
                        data?.map((item) => (
                            <>
                                <Card
                                    key={item.id}
                                    category={item.attributes?.sub_categories?.data?.map((item) => (
                                        item?.attributes?.title
                                    ))}

                                    title={item.attributes.title}
                                    desc={item.attributes.desc}
                                    img={
                                        "https://api.pierrette-essentielle.com/" + item.attributes?.img?.data?.attributes?.url
                                    }
                                    img2={
                                        "https://api.pierrette-essentielle.com/" + item.attributes?.img2?.data?.attributes?.url
                                    }
                                    price={item.attributes.price}
                                    isNew={item.attributes.isNew}
                                    solde={item.attributes.solde}
                                    id={item.id}
                                />
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default List;


{
    /*<div classNameName="container mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-8
        justify-items-center items-center 
        ">
            {
                loading ? <Spinner/> : data?.map((item) => (
                    <>
                        <Card
                            key={item.id}
                            category={item.attributes?.sub_categories?.data?.map((item) => (
                                item?.attributes?.title
                            ))}

                            title={item.attributes.title}
                            desc={item.attributes.desc}
                            img={
                                "https://api.pierrette-essentielle.com/" + item.attributes?.img?.data?.attributes?.url
                            }
                            img2={
                                "https://api.pierrette-essentielle.com/" + item.attributes?.img2?.data?.attributes?.url
                            }
                            price={item.attributes.price}
                            isNew={item.attributes.isNew}
                            solde={item.attributes.solde}
                            id={item.id}
                        />
                    </>
                ))
            }

        </div>
        */
}