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
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'}>
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
                                "http://localhost:1337" + item.attributes?.img?.data?.attributes?.url
                            }
                            img2={
                                "http://localhost:1337" + item.attributes?.img2?.data?.attributes?.url
                            }
                            price={item.attributes.price}
                            isNew={item.attributes.isNew}
                            id={item.id}
                        />
                    </>
                ))
            }

        </div>
    )
}

export default List;