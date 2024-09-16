import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import aboutImage from '../assets/images/shop.jpeg'; // Replace with your smaller about image
import Footer from '../components/Footer';
import useLanguage from '../zustand/useConversationStore';

export default function About() {
    const { isEng } = useLanguage();

    return (
        <div className="animate-fade-in">
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-3xl text-center md:text-5xl font-bold text-black mb-5 animate-slide-up'>
                    {isEng ? 'Transforming Spaces: Our Passion and Purpose' : 'የቦታዎችን ማሻሻያ: የእኛ ፍላጎት እና ዓላማ'}
                </h1>
                <p className='text-center text-gray-700 text-[15px] w-[90%] sm:w-[80%] mb-10 animate-fade-in'>
                    {isEng
                        ? 'At Furnish, we craft more than just furniture; we create experiences that turn spaces into homes. Our journey began with a passion for design and a commitment to quality, uniting artisans and innovators to deliver exceptional products. We focus on blending style, comfort, and functionality, ensuring every piece is unique.'
                        : 'በፈርኒሽ ውስጥ ከታላቅ የእቃ ተመራቂዎች ጋር አንድ ወይም አንደኛ ይሞላል። እኛ የቦታዎችን ቦታዎችን ወይም ውስጥ የምርት ተሳትፎዎችን እንደ ቅንብር እንደ ታላቅ ወይም ወይም ወይም ወይም ወይም ወይም ወይም ላይ ላይ ይኖራሉ።'}
                </p>
            </div>

            <div className='p-[11%] pt-8 flex md:flex-row flex-col bg-secondary'>
                <div>
                    <img src={aboutImage} className='w-[90%] h-[300px] rounded-3xl mb-5 object-cover animate-zoom' alt="About Us" />
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h2 className='text-4xl font-semibold text-black mb-5 animate-slide-up'>
                            {isEng ? 'Our Vision' : 'የእኛ እንደ እንደኛ'}
                        </h2>
                        <p className='text-gray-800 text-[15px] mb-5 animate-fade-in'>
                            {isEng
                                ? 'We envision a world where every home reflects individuality and comfort. Our goal is to inspire creativity and innovation in home design, making quality furniture accessible to everyone.'
                                : 'እኛ የቤት የሚያደርገው ዓለም የእውቀት እና የምትነሳ ዓለም ይህን ይወዳዳል። የምንአዳው እንደ ጌድ ጎን ይህን ይወዳዳል።'}
                        </p>
                    </div>

                    <div>
                        <h2 className='text-4xl font-semibold text-black mb-5 animate-slide-up'>
                            {isEng ? 'Our Commitment' : 'የእኛ ተመን'}
                        </h2>
                        <ul className='list-disc list-inside text-gray-800 text-[15px] mb-5'>
                            <li className='animate-fade-in'>{isEng ? 'Craftsmanship: Meticulously crafted from the finest materials.' : 'እንደ ምርት: ከታላቅ እንደ ገበሬ ይሁኑ።'}</li>
                            <li className='animate-fade-in'>{isEng ? 'Sustainability: Committed to eco-friendly practices.' : 'የአካባቢ: ወዘብ የሚሆን ዓይድ ሁሉ ይሁኑ።'}</li>
                            <li className='animate-fade-in'>{isEng ? 'Customer-Centric: Your needs drive our designs.' : 'የደንበኛ: የምንአዳው ይሁኑ ይወዳዳሉ።'}</li>
                            <li className='animate-fade-in'>{isEng ? 'Innovation: Continuously evolving to meet modern demands.' : 'እንደ ምርት: ወዘብ ወይም ይሁኑ።'}</li>
                        </ul>
                    </div>

                    <div className="flex justify-center mt-5">
                        <button className="bg-gray-800 px-10 flex items-center text-white rounded-full py-3 shadow-lg hover:bg-gray-700 transition duration-300 animate-slide-up">
                            {isEng ? 'Discover More' : 'የተለያዩ ይወዳዳል'} <MdArrowForward className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-[11%] pt-0'><Footer /></div>
        </div>
    );
}