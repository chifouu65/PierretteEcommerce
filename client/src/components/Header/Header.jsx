import productPhoto from '../../assets/product_photo.jpg';
function Header (){
    return (
        <section className={'container'}>
            <div
                className="gap-8 items-center px-4 mx-auto min-h-screen flex flex-col justify-center pb-16">
                <div className="font-light text-gray-500 sm:text-lg max-w-4xl">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">
                        <span className="block">Bienvenue chez Pierrette Essentielle,</span>
                        <span className="block text-indigo-600 xl:inline text-2xl">
                            votre boutique en ligne dédiée au bien-être au naturel et à l'astrologie humaniste.
                        </span>
                    </h2>
                    <p className="mb-4">
                        Fondée par Estelle, astrologue humaniste et karmique passionnée par les bienfaits des huiles essentielles et les pierres naturelles,
                        Pierrette Essentielle vous propose une synergie unique d'huiles végétales,
                        d'huiles essentielles et de pierres naturelles pour soulager vos bobos du quotidien.
                    </p>
                    <p>
                        Avec plus de 12 ans d'expérience et plus de 10 000 consultations à son actif,
                        Estelle vous propose également des consultations en astrologie humaniste pour vous
                        aider à comprendre et accepter votre chemin de vie. En choisissant Pierrette Essentielle,
                        vous bénéficiez de l'expertise d'Estelle et de son approche holistique pour vous accompagner
                        vers une vie plus saine et plus équilibrée. Découvrez dès maintenant tout ce que Pierrette
                        Essentielle peut vous apporter.
                    </p>
                </div>
                <div className="max-w-xl">
                    <img className="w-full rounded-lg"
                         src={productPhoto}
                         alt="office content 1"/>
                </div>
            </div>
        </section>
    )
}

export default Header;