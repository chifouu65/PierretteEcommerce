import React from 'react';
import Header from "../../components/Header/Header";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function Home() {
    return (
        <div className={'container mx-auto px-4 pt-20'}>
            <Header/>
            {/*<HomeContainer/>*/}
            <div className={'mx-auto max-w-screen-xl flex flex-col gap-4'}>

                <div className={'container mx-auto'}>
                    <h2 className={'text-2xl font-bold w-full flex p-4'}>
                        Astrologie
                    </h2>
                    <div className="px-4">
                        <FeatureProducts type={'astrologie'}/>
                    </div>
                </div>

                <div className={'container mx-auto'}>
                    <h2 className={'text-2xl font-bold w-full flex p-4'}>
                        Pierres
                    </h2>
                    <div className="px-4">
                        <FeatureProducts type={'pierres'}/>
                    </div>
                </div>
                {/*
                         <div className={'container mx-auto'}>
                    <h2 className={'text-2xl font-bold w-full bg-green-200 flex p-4'}>
                        Autres ...
                    </h2>
                    <div className="px-4 pb-4">
                        <FeatureProducts type={'autres'}/>
                    </div>
                </div>
                */}
            </div>
        </div>
    )
}

export default Home