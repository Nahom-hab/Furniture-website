import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import img2 from '../assets/images/img1.jpeg';
import img3 from '../assets/images/img2.jpeg';
import img4 from '../assets/images/img3.jpeg';
import img5 from '../assets/images/img4.jpeg';

export default function ImageSlider() {
    const images = [img2, img3, img4, img5, img2, img3, img4, img5, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full p-4 overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${(currentIndex * 100) / 2}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-1/2 transition-transform duration-300 ${currentIndex === index ? 'scale-110' : 'scale-75 opacity-60'}`}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full lg:w-5/6 h-auto rounded-2xl transition-all duration-300" // Ensure rounded corners
                            style={{ maxHeight: '80vh' }} // Maintain height restriction
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
                <button onClick={prevImage} className="bg-secondary text-white p-2 rounded shadow-md">
                    <MdArrowBack />
                </button>
                <button onClick={nextImage} className="bg-secondary text-white p-2 rounded shadow-md">
                    <MdArrowForward />
                </button>
            </div>
        </div>
    );
}