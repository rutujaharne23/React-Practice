import React, { useState } from 'react';

export const Slider = ({ activeSlider, sliderUrl, sliderImages }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlider);
    console.log(sliderImages)
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1));
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1));
    };

    return (
        <div>
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden md:h-96">
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img src={sliderImages[currentSlide].image_url} alt={`Slide ${currentSlide + 1}`} />
                    </div>
                </div>
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={goToPrevSlide}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={goToNextSlide}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};
