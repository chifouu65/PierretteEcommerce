import ImageSlider from "../../components/ImageSlider/ImageSlider";

function About() {
    return (
        <div className="container px-6 mx-auto">

            <section className="ext-gray-800">

                <div className="container mx-auto xl:px-32 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 flex items-center">
                        <div className="mb-12 lg:mb-0">
                            <div
                                className="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
                                style={
                                    {
                                        background: "hsla(0, 0%, 100%, 0.55)",
                                        backdropFilter:" blur(30px)"
                                    }
                                }
                            >
                                <h3 className="text-2xl font-bold mb-3">
                                    Lorem ipsum dolor
                                </h3>
                                <h5 className="text-lg text-blue-600 font-bold mb-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h5>

                                <p className="font-bold mb-4">à propos de nous ...</p>
                                <p className="text-gra-500 mb-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                                    autem numquam dolore molestias aperiam culpa alias veritatis
                                    architecto eos, molestiae vitae ex eligendi libero eveniet
                                    dolorem, doloremque rem aliquid perferendis.
                                </p>

                                <p className="font-bold mb-4">
                                    Notre mission est de vous aider à trouver le meilleur
                                    produit pour la meilleure expérience.
                                </p>
                                <p className="text-gra-500 mb-6">
                                    Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
                                    magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
                                    iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
                                    unde quod modi magnam ab deserunt ipsam sint aliquid dolores
                                    libero repellendus cupiditate mollitia quidem dolorem odit
                                </p>

                                <p className="font-bold mb-4">
                                    Notre Histoire et notre vision
                                </p>
                                <p className="text-gra-500">
                                    Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                                    deserunt ipsam sint aliquid dolores libero repellendus cupiditate
                                    mollitia quidem dolorem.
                                </p>
                            </div>
                        </div>

                        <div className={"hidden lg:block"}>
                            <ImageSlider
                                img={
                                "https://images.unsplash.com/photo-1573575155376-b5010099301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                }
                                img2={
                                "https://images.unsplash.com/photo-1609357912334-e96886c0212b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
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