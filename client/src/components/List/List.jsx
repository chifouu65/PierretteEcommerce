import Card from "../Card/Card";
import React from "react";
import Spinner from "../Spinner/Spinner";
import useFetch from "../../hooks/useFectch";

function List({subCats, maxPrice, sort, catId}) {

    const {data, loading} = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price`
    );

    return (
        <div className="container mx-auto w-full gap-8 flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
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
    )
}

export default List;