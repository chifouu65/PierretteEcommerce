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
            <BiArrowToTop
                className="scrollTop
                    h-10 w-10
                "
                onClick={scrollTop}
                style={{ height: 80, display: showScroll ? "flex" : "none" }}
            />
        </div>
    );
}