import React, { useState } from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'; // Impor
import img2 from '../assets/img1.jpeg'
import img3 from '../assets/img2.jpeg'
import img4 from '../assets/img3.jpeg'
import img5 from '../assets/img4.jpeg'


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
        <div className="flex w-full overflow-hidden lg:w-[75%] relative">
            <div className="flex items-start transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-1/3 transition-transform duration-300 ${currentIndex === index ? 'scale-110 mx-5' : 'scale-75  opacity-60'}`}
                        style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full h-auto rounded-2xl"
                            style={{ alignSelf: 'flex-start' }}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute bottom-[-5px] lg:bottom-0 right-4 flex gap-2">
                <button onClick={prevImage} className="bg-secondary text-white lg:p-2 p-1 px-4  rounded shadow-md">
                    <MdArrowBack />
                </button>
                <button onClick={nextImage} className="bg-secondary text-white lg:p-2 p-1 px-4 rounded shadow-md">
                    <MdArrowForward />
                </button>
            </div>
        </div>
    )
}
