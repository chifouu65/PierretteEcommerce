import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";

function Home() {
    return (
        <div className={'container mx-auto'}>
            <Header/>
            <HomeContainer/>
        </div>
)
}

export default Home