import productPhoto from '../../assets/product_photo.jpg';
import { BsFillBalloonHeartFill } from "react-icons/bs";
function Header (){
    return (
        <section className={'container'}>
            <div
                className="items-center md:px-4 mx-auto min-h-screen flex flex-col justify-center">
                <div className="md:mr-4 font-light text-gray-500 sm:text-lg max-w-4xl md:text-center flex justify-center  md:items-center items-start flex-col">
                    <h2 className="mb-2 text-xl md:text-2xl
                    xl:text-3xl
                    tracking-tight font-extrabold text-gray-900 ">
                        <span className="block">Bienvenue chez Pierrette,</span>
                        <span className="block text-indigo-600 xl:inline text-lg md:text-xl xl:text-2xl">
                            votre boutique en ligne dédiée au bien-être au naturel.
                        </span>
                    </h2>
                    <p  className='text-sm md:text-normal xl:text-lg md:max-w-xl pb-6'>
                        Pierrette Essentielle est une boutique en ligne dédiée au bien-être au naturel.
                        Fondée par Estelle, passionnée par les bienfaits des huiles essentielles et les pierres naturelles,
                        Pierrette Essentielle vous propose une synergie unique d'huiles végétales,
                        d'huiles essentielles et de pierres naturelles pour soulager vos bobos du quotidien.
                    </p>
                </div>
                <div className="
                    hidden md:block md:max-w-[50%]
                ">
                    <img className="w-full rounded-lg"
                         src={productPhoto}
                         alt="office content 1"/>
                </div>
            </div>
        </section>
    )
}

export default Header;