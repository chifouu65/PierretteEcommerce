import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function Home() {
    return (
        <div className={'h-full w-full min-h-screen min-w-screen container mx-auto px-4 py-4'}>
            <Header/>
            <HomeContainer/>
            {/*<FeatureProducts
                type={'Select a type of product'}
            />*/}
            <h2 className={'text-2xl font-bold text-center my-4'}>Featured Products</h2>
            <FeatureProducts type={'autre'}/>
            <br/>
            <h2 className={'text-2xl font-bold text-center my-4'}>Bijoux Products</h2>
            <FeatureProducts type={'bijoux'}/>
        </div>
)
}

export default Home