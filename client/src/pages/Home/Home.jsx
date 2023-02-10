import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function Home() {
    return (
        <div className={'container mx-auto px-4 '}>
            <Header/>
            <HomeContainer/>
            <div className={'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'}>
                <h2 className={'text-2xl font-bold text-center my-4'}>
                    Cosmétic Products
                </h2>
                <br/>
                <FeatureProducts type={'cosmétic'}/>
                <br/>
                <h2 className={'text-2xl font-bold text-center my-4'}>
                    Bijoux Products
                </h2>
                <br/>
                <FeatureProducts type={'bijoux'}/>
            </div>
        </div>
)
}

export default Home