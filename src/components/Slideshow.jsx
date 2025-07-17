import { useState } from 'react';
import '../styles/Slideshow.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Slideshow ({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = pictures.length;

    const goNext = () => {
        setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex + 1);
    }

    const goPrev = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1); 
    }

    if (length === 0) return null;

    return (
        <div className="slideshow">
            {length > 1 && (
                <>
                <button className="slideshow-arrow slideshow-arrow-left" onClick={goPrev}><ChevronLeft size={100}/></button>
                <button className="slideshow-arrow slideshow-arrow-right" onClick={goNext}><ChevronRight size={100}/></button>
                </>
            )}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
            {length > 1 && (
                <div className="slide-count">
                    {currentIndex + 1} / {length}
                </div>
            )}
            </div>
    );
}


export default Slideshow