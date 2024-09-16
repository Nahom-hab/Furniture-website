import React, { useState, useEffect } from 'react';
import { MdTimer } from 'react-icons/md';
import img from '../assets/images/couch.png';
import { MdArrowForward } from 'react-icons/md';
import useLanguage from '../zustand/useConversationStore';

export default function CountdownTimer() {
    const targetDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);  // 3 days from now
    const { isEng } = useLanguage();

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clear the interval on unmount
    }, []);

    // Animation for digits
    const animateClass = 'transition-transform transform duration-500 ease-in-out';

    return (
        <div className='lg:w-[50%] bg-secondary mb-5 m-2 rounded-2xl p-10 pb-2 text-black'>
            <div className='flex items-end mb-4 justify-between'>
                <div className='text-[28px] font-bold'>{isEng ? 'Super Sale!' : 'የታላቅ ሽያጭ!'}</div>
                <div className='flex flex-col items-end'>
                    <div className='text-[10px] text-gray-700 line-through'>12000 birr</div>
                    <div className='font-bold text-gray-700 mt-[-5px] lg:text-xl whitespace-nowrap text-md'>
                        5000 <span className='text-md text-gray-700'>birr</span>
                    </div>
                </div>
            </div>
            <div className='text-gray-700 text-[16px]'>
                {isEng
                    ? 'Get <span className="text-red-600 font-bold text-[20px]">50% OFF</span> limited time offer'
                    : '50% ከምርት ወይም ይወዳዳሉ ወይም ይወዳዳሉ'}
            </div>

            <div className='flex text-[12px] items-center'>
                <MdTimer /> {isEng ? 'End Time' : 'የመጨረሻ ጊዜ'}
            </div>
            <div className="flex flex-col text-black">
                <div className="flex space-x-4">
                    {Object.keys(timeLeft).map((interval, index) => (
                        <div key={index} className="flex gap-1 items-center">
                            <div className='flex flex-col items-center'>
                                <div className={`text-3xl text-green-700 font-bold ${animateClass}`}>
                                    {timeLeft[interval] || 0}
                                </div>
                                <div className="text-sm">{interval}</div>
                            </div>
                            {interval === 'Secs' ? ('') : (<div className='text-3xl font-pregular'>:</div>)}
                        </div>
                    ))}
                </div>
                <div className='flex items-start justify-between'>
                    <img className='w-[60%]' src={img} alt="Couch" />
                    <button className='bg-[#a8aa92] lg:px-6 px-2 h-fit mt-16 flex items-center gap-2 whitespace-nowrap text-black rounded-2xl py-1 lg:py-2'>
                        {isEng ? 'View All' : 'ሁሉንም ይመልከቱ'} <MdArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
}