import {BiArrowToTop} from "react-icons/bi";
import {useEffect, useState} from "react";

export default function NavToTop(reset) {
    const [showScroll, setShowScroll] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [scrollPosition])

    function checkScrollTop() {
        if (!showScroll && window.pageYOffset > 100){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 100){
            setShowScroll(false)
        }
        setScrollPosition(window.pageYOffset);
    }

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    return (
        showScroll && (
            <div
                onScroll={() => console.log("scrolling")}
                className="
                animate-bounce
                fixed bottom-10 right-5 z-50
                bg-gray-200 hover:bg-gray-300
                bg-opacity-50 hover:bg-opacity-100
                rounded-full p-2 cursor-pointer
            " onClick={scrollTop}>
                <BiArrowToTop/>
            </div>
        )
    );
}