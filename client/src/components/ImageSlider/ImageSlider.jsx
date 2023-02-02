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

            <div id="default-carousel" className="relative" data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                    <div className="absolute z-20 flex items-center justify-center w-full h-full transition-opacity duration-700 ease-in-out"
                            data-carousel-item>
                        <img
                            onClick={() => handleSlide(
                                slides[currentSlide].id === slides.length - 1 ? 0 : slides[currentSlide].id + 1
                            )}
                            src={slides[currentSlide].img}
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."/>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4" data-carousel-nav>
                    {
                        slides.map((slide, index) => {
                            return (
                                <button key={index}
                                        onClick={() => handleSlide(slide.id)}
                                        className={
                                            slide.selected ? 'w-2 h-2 bg-gray-900 rounded-full' : 'w-2 h-2 bg-gray-300 rounded-full'
                                        }>
                                </button>
                            )
                        }
                        )
                    }
                </div>
            </div>


        </>
    )
}

export default ImageSlider