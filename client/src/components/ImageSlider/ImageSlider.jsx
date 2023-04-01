import React, {useState} from 'react';

function ImageSlider (
    {img, img2}
) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([
        {
            id: 0,
            img: img,
            selected: true
        },
        {
            id: 1,
            img: img2,
            selected: false
        }
    ]);

    const handleSlide = (id) => {
        setCurrentSlide(id);
        setSlides(slides.map((slide) => {
            if (slide.id === id) {
                slide.selected = true;
            } else {
                slide.selected = false;
            }
            return slide;
        }))
    }
    return (
        <>

            <div id="default-carousel"data-carousel="static" className="">
                <div className="flex flex-col items-center">
                        <div className="
                            relative h-96 overflow-hidden bg-gray-100 rounded-lg shadow-xl cursor-pointer
                        "
                        >
                            <img
                                onClick={() => handleSlide(
                                    slides[currentSlide].id === slides.length - 1 ? 0 : slides[currentSlide].id + 1
                                )}
                                src={slides[currentSlide].img}
                                className="max-w-lg
                                object-cover object-center w-full h-full transition duration-500 ease-in-out transform hover:scale-105
                                "
                                alt="..."/>
                        </div>
                </div>
            </div>


        </>
    )
}

export default ImageSlider