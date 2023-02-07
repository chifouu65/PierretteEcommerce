import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function Home() {
    return (
        <div className={'container mx-auto px-4 '}>
            <Header/>
            <HomeContainer/>
            {/*<FeatureProducts
                type={'Select a type of product'}
            />*/}
            <h2 className={'text-2xl font-bold text-center my-4'}>
                Cosmétic Products
            </h2>
            <FeatureProducts type={'cosmétic'}/>
            <br/>
            <h2 className={'text-2xl font-bold text-center my-4'}>
                Bijoux Products</h2>
            <FeatureProducts type={'bijoux'}/>
        </div>
)
}

export default Home