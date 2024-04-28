import React from 'react';
import { Slider } from "./Slider";

export const Modal = ({ activeImage, imageGallery, imageUrl, imageName, isOpen, isClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center">
            {/* Grey transparent overlay */}
            <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-40"></div>
            
            {/* Modal content */}
            <div className="bg-white p-3 shadow-xl relative z-50">
                <span className="cursor-pointer absolute top-0 right-0 p-3" onClick={isClose}>&#10006;</span>
                <p className="p-2">{imageName}</p>
                <Slider sliderUrl={imageUrl} activeSlider={activeImage} sliderImages={imageGallery} />
            </div>
        </div>
    );
};
