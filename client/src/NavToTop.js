import {BiArrowToTop} from "react-icons/bi";
import {useEffect, useState} from "react";

export default function NavToTop(reset) {
    const [showScroll, setShowScroll] = useState(true);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 100) {
        setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100) {
        setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop);

    useEffect(() => {
        if (reset === true) {
            scrollTop();
            reset = false; // reset is a prop, so it's immutable
        }
    } , [reset]);
    return (
        <div className='
            fixed bottom-5 right-0 mr-4 mb-4
        '>
            <div className=' 
                bg-gray-800 rounded-full p-2 
                hover:bg-gray-700 cursor-pointer
            ' onClick={scrollTop}>
                <BiArrowToTop className='
                    text-white text-2xl
                ' />
            </div>
        </div>
    );
}