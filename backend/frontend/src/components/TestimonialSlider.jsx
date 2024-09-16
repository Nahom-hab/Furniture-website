import React, { useState, useEffect } from 'react';
import img2 from '../assets/images/img1.jpeg';
import img3 from '../assets/images/img2.jpeg';
import img4 from '../assets/images/img3.jpeg';
import img5 from '../assets/images/img4.jpeg';
import useLanguage from '../zustand/useConversationStore';

export default function TestimonialSlider() {
    const { isEng } = useLanguage();

    const testimonials = [
        {
            image: img2,
            name: isEng ? 'Angla Yu' : 'አንግላ ዩ',
            description: isEng
                ? `I recently bought a dining table set from this shop, and it’s stunning. 
                   Highly recommend this shop`
                : `በዚህ ሱቅ የምግብ ጠረጴዛ እንደ ምርት ገና ገና ገና ተገዝተዋል። 
                   ይህን ሱቅ በጣም እመነባለሁ`
        },
        {
            image: img3,
            name: isEng ? 'John Doe' : 'ጆርጅ ዶ',
            description: isEng
                ? `The sofa I purchased is not only beautiful but also very comfortable. 
                   Highly recommend this shop`
                : `በጣም ውብ የሆነ ሶፋ ገና ገና እንደ ምርት ተገዝተዋል። 
                   ይህን ሱቅ በጣም እመነባለሁ`
        },
        {
            image: img4,
            name: isEng ? 'Jane Smith' : 'ጄን ስምይት',
            description: isEng
                ? `Fantastic customer service and high-quality products. 
                   Highly recommend this shop and the service was top-notch from start to finish.`
                : `የደንበኞች አገልግሎት እና የጥራት ምርቶች በጣም ግሩም ነበር። 
                   ይህን ሱቅ በጣም እመነባለሁ`
        },
        {
            image: img5,
            name: isEng ? 'Mark Lee' : 'ማርክ ሊ',
            description: isEng
                ? `I appreciate the attention to detail in my recent order. 
                   I couldn’t be happier with my purchase!`
                : `እቅፍ የምን ዝርዝር ይገኛል። 
                   ገና ገና ገና አልወድም!`
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
                            className="min-w-full flex items-center ml-[2px] justify-center"
                        >
                            <div className='w-32 flex flex-col items-center'>
                                <img
                                    className="w-24 h-24 mr-3 object-cover rounded-full mb-2"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="font-bold text-black">{testimonial.name}</div>
                            </div>

                            <p className="text-center mb-5 text-[14px] w-[90%] text-black">{testimonial.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}