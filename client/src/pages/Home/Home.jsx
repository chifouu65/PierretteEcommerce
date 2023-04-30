import React from 'react';
import Header from "../../components/Header/Header";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import { MdOutlineEmojiNature } from "react-icons/md";
import { GiShamrock, GiPaper } from "react-icons/gi";

const cards = [
    {
        title: 'Des pierres',
        description: 'nos pierres sont les plus belles du monde, venez les découvrir',
        icon: <MdOutlineEmojiNature/>
    },
    {
        title: 'Des produits naturels & bio',
        description: 'Tous nos produits sont naturels et bio, venez les découvrir',
        icon: <GiShamrock/>
    },
    {
        title: 'Une solution simple et efficace',
        description: 'Nous vous proposons une solution simple et efficace pour vous sentir mieux',
        icon: <GiPaper/>
    }
];

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Card = ({title, description, icon}) => (
    <div className={
        `w-full px-4 py-4bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4`
    }>
        <div className="flex-shrink-0">
            <div
                className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                {icon}
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
            {title}
        </h3>
        <p className="py-4 text-gray-500 text-md">
            {description}
        </p>
    </div>
);

function Home() {
    return (
        <div className={'container mx-auto px-4'}>
            <Header/>

            <div className="pb-[25vh] flex-wrap items-center justify-center gap-12 text-center sm:flex">
                {cards.map((card, index) => (
                    <><Card key={index} {...card} /><br/></>
                ))}
            </div>

            <div className={'flex flex-col gap-4'}>
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