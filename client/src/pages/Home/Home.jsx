import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import ProductsList from "../../components/ProductsList/ProductsList";

function Home() {
    return (
        <div className={'container mx-auto'}>
            <Header/>
            <HomeContainer/>
            <ProductsList/>
        </div>
)
}

export default Home