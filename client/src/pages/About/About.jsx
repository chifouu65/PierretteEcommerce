import ImageSlider from "../../components/ImageSlider/ImageSlider";
import estellePhoto from "../../assets/photo_estelle.jpg";
import productPhoto from "../../assets/product_photo.jpg";
import {FaFacebook} from "react-icons/fa";
import {MdGroups} from "react-icons/md";
import Disclosure from "../../components/Disclosure/Disclosure";

function About() {
    return (
        <div className="container px-6 mx-auto pt-20 mb-4 min-h-screen flex justify-center items-center">
            <section className="ext-gray-800">
                <div className="container mx-auto xl:px-32 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 flex items-center">
                        <div className="mb-12 lg:mb-0">
                            <div
                                className="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
                                style={
                                    {
                                        background: "hsla(0, 0%, 100%, 0.55)",
                                        backdropFilter: " blur(30px)"
                                    }
                                }
                            >
                                <h3 className="text-2xl font-bold mb-3">
                                    Qui suis-je ?
                                </h3>
                                <h5 className="text-lg text-blue-600 font-bold mb-6">
                                    Estelle, j'ai 51 ans je suis astrologue humaniste et karmique
                                </h5>
                                <div className="flex flex-col gap-4">

                                    <Disclosure
                                        booleen={true}
                                        title="à propos de nous ..."
                                        children={
                                            <>
                                                Je m'appelle Estelle, j'ai 51 ans je suis astrologue humaniste
                                                et karmique et passionnée par les bienfaits des huiles
                                                essentielles et les pierres naturelles.<br/>
                                                Après avoir été diagnostiquée allergique au paracétamol
                                                il y a plus de 15 ans, j'ai commencé à explorer les
                                                alternatives naturelles pour soigner et soulager les
                                                bobos du quotidien.<br/>
                                                C'est ainsi que sont nées mes Pierrette,
                                                une synergie unique d'huiles végétales, d'huiles essentielles
                                                et de pierres naturelles.
                                            </>
                                        }
                                    />
                                    <Disclosure
                                        booleen={false}
                                        title="Mon parcours en astrologie humaniste "
                                        children={
                                            <>

                                                J'ai été formée par Bernard Dubois, un grand
                                                astrologue français, il y a maintenant plus de 12 ans
                                                avec plus de 10 000 consultations à mon actif.
                                                <br/>
                                                Mon approche
                                                de l'astrologie humaniste vous aide à comprendre et accepter
                                                votre chemin de vie. Je vous propose différentes thématiques
                                                pour vous libérer des blocages liés à vos mémoires
                                                personnelles et familiales, souvent enfouies dans votre
                                                inconscient.
                                            </>
                                        }
                                    />
                                    <Disclosure
                                        booleen={false}
                                        title="Pourquoi choisir Pierrette Essentielle ?"
                                        children={
                                            <>
                                                En choisissant Pierrette Essentielle,
                                                vous bénéficiez d'une expertise unique dans les domaines
                                                du bien-être au naturel et de l'astrologie. Je suis à votre
                                                disposition pour vous aider à trouver la solution la mieux
                                                adaptée à vos besoins, que ce soit pour soulager vos bobos
                                                du quotidien grâce à mes Pierrette et ou pour comprendre
                                                votre chemin de vie grâce à mes consultations en astrologie
                                                humaniste.
                                            </>
                                        }
                                    />
                                    <Disclosure
                                        booleen={false}
                                        title="Conclusions"
                                        children={
                                            <>
                                                En choisissant Pierrette Essentielle, vous faites le
                                                choix de la qualité, de la compréhension de soi et de mon expertise.
                                                Je suis là pour vous accompagner et vous aider à trouver
                                                les solutions qui vous conviennent.
                                                N'attendez plus pour découvrir tout ce que Pierrette
                                                Essentielle peut vous apporter.
                                            </>
                                        }
                                    />
                                </div>
                                <div className="grow mt-4">
                                    <p className="font-bold mb-1">
                                        Mes réseaux sociaux
                                    </p>
                                    <div className="flex flex-col container items-center justify-center gap-4 mt-2">
                                        <a target={'_blank'}
                                           href="https://www.facebook.com/groups/1389109751829133/?ref=share"
                                           className="text-blue-500 mr-2 flex gap-2 items-center">
                                            <span className="
                                            font-bold text-blue-500 text-sm
                                            ">
                                                Group Facebook
                                            </span>
                                            <MdGroups/>
                                        </a>
                                        <a
                                            target={'_blank'}
                                            href="https://www.facebook.com/profile.php?id=100085492091403"
                                            className="text-blue-500 mr-2 flex items-center gap-2">
                                              <span className="
                                            font-bold text-blue-500 text-sm
                                            ">
                                                Page Facebook
                                            </span>
                                            <FaFacebook/>
                                        </a>
                                        <a
                                            target={'_blank'}
                                            href="https://www.facebook.com/estelleastrotheme"
                                            className="text-blue-500 mr-2 flex gap-2 items-center">
                                              <span className="
                                            font-bold text-blue-500 text-sm
                                            ">
                                                Page Astrologie
                                            </span>
                                            <FaFacebook/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"hidden lg:block"}>
                            <ImageSlider
                                img={
                                    estellePhoto
                                }
                                img2={
                                    productPhoto
                                }
                            />
                        </div>
                    </div>
                </div>

            </section>

        </div>

    );
}

export default About;