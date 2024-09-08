import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import aboutImage from '../assets/images/shop.jpeg'; // Replace with your smaller about image
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="animate-fade-in">
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-5xl font-bold text-black mb-5 animate-slide-up'>About Furnish</h1>
                <p className='text-center text-gray-600 text-[15px] w-[90%] sm:w-[80%] mb-10 animate-fade-in'>
                    At Furnish, we craft more than just furniture; we create experiences that turn spaces into homes.
                    Our journey began with a passion for design and a commitment to quality, uniting artisans and innovators
                    to deliver exceptional products. We focus on blending style, comfort, and functionality, ensuring every
                    piece reflects our dedication to durability, elegance, and timeless craftsmanship. More than just furniture,
                    we aim to inspire and elevate your living spaces, providing thoughtfully designed pieces that make your home a
                    reflection of you.</p>
            </div>

            <div className='p-[11%] pt-8 flex md:flex-row flex-col bg-secondary'>
                <div>
                    <img src={aboutImage} className='w-[90%] h-[300px] rounded-3xl mb-5 object-cover animate-zoom' alt="About Us" />

                </div>
                <div className='flex flex-col'>
                    <div>
                        <h2 className='text-4xl font-semibold text-black mb-5 animate-slide-up'>Our Vision</h2>
                        <p className='text-gray-800 text-[15px] mb-5 animate-fade-in'>
                            We envision a world where every home reflects individuality and comfort. Our goal is to inspire creativity
                            and innovation in home design, making quality furniture accessible to everyone.
                        </p>

                    </div>


                    <div>
                        <h2 className='text-4xl font-semibold text-black mb-5 animate-slide-up'>Our Commitment</h2>
                        <ul className='list-disc list-inside text-gray-800 text-[15px] mb-5'>
                            <li className='animate-fade-in'>Craftsmanship: Meticulously crafted from the finest materials.</li>
                            <li className='animate-fade-in'>Sustainability: Committed to eco-friendly practices.</li>
                            <li className='animate-fade-in'>Customer-Centric: Your needs drive our designs.</li>
                            <li className='animate-fade-in'>Innovation: Continuously evolving to meet modern demands.</li>
                        </ul>
                    </div>


                    <div className='flex justify-center mt-5'>
                        <button className='bg-secondary px-10 flex items-center text-white rounded-2xl py-2 animate-slide-up'>
                            Discover More <MdArrowForward className='ml-2' />
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-[11%] pt-0'><Footer /></div>
        </div>
    );
}