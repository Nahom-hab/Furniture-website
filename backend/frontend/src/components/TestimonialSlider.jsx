import React, { useState, useEffect } from 'react';
import img2 from '../assets/img1.jpeg';
import img3 from '../assets/img2.jpeg';
import img4 from '../assets/img3.jpeg';
import img5 from '../assets/img4.jpeg';

export default function TestimonialSlider() {
    const testimonials = [
        {
            image: img2,
            name: 'Angla Yu',
            description: `I recently bought a dining table set from this shop, and it’s stunning. 
              The quality is excellent, and the service was top-notch from start to finish. 
              Highly recommend this shop`
        },
        {
            image: img3,
            name: 'John Doe',
            description: `The sofa I purchased is not only beautiful but also very comfortable. 
              Great experience overall!and the service was top-notch from start to finish. 
              Highly recommend this shop`
        },
        {
            image: img4,
            name: 'Jane Smith',
            description: `Fantastic customer service and high-quality products. 
              I’ll definitely return for more!and the service was top-notch from start to finish. 
              Highly recommend this shopand the service was top-notch from start to finish. 
             `
        },
        {
            image: img5,
            name: 'Mark Lee',
            description: `I appreciate the attention to detail in my recent order. 
              Highly recommend this shop!and the service was top-notch from start to finish. 
              I couldn’t be happier with my purchase!I appreciate the attention to detail in my recent order. 
              I couldn’t be happier with my purchase!`
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false); // To disable controls during animation

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }
        }, 4000); // Change testimonial every 4 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [isAnimating]);

    const handleTransitionEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div className="mx-auto lg:mt-20 mt-5 lg:w-[90%] relative">
            <div
                className="relative w-full h-full"
                style={{ overflow: 'hidden', height: '200px' }}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full flex items-center justify-center"
                        >
                            <div className='w-32 flex flex-col items-center'>
                                <img
                                    className="w-24 h-24 mr-3 object-cover rounded-full mb-2"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="font-bold  text-black">{testimonial.name}</div>
                            </div>

                            <p className="text-center mb-5 text-[14px] w-[90%] text-black">{testimonial.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
