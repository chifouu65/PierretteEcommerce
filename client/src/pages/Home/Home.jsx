import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function Home() {
    return (
        <div className={'container mx-auto px-4'}>
            <Header/>
            {/*<HomeContainer/>*/}
            <div className={'py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6'}>

                <div className={'container mx-auto'}>
                    <h2 className={'text-2xl font-bold underline my-4 pb-4'}>
                        Astrologie Products
                    </h2>
                    <FeatureProducts type={'astrologie'}/>
                </div>

                <br/>

                <div className={'container mx-auto'}>
                    <h2 className={'text-2xl font-bold underline my-4 pb-4'}>
                        Bijoux Products
                    </h2>
                    <FeatureProducts type={'bijoux'}/>
                </div>

            </div>
        </div>
)
}

export default Home