import React from 'react';
import Header from "../../components/Header/Header";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function Home() {
    return (
        <div className={'container mx-auto px-4'}>
            <Header/>
            <div className={'mx-auto max-w-screen-xl flex flex-col gap-4'}>
                <div className={'container mx-auto mb-20'}>
                    <div className="px-4 container mx-auto">
                        <FeatureProducts type={'pierres'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home