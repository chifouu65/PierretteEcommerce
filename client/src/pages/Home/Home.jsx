import React from 'react';
import Header from "../../components/Header/Header";
import HomeContainer from "../../components/HomeContainer/HomeContainer";

function Home() {
    return (
        <div className={'h-full w-full min-h-screen min-w-screen container mx-auto px-4 py-4'}>
            <Header/>
            <HomeContainer/>

        </div>
)
}

export default Home