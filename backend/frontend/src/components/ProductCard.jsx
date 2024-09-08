import React from 'react';
import fullStar from '../assets/images/star.png';
import halfStar from '../assets/images/half.png';

export default function ProductCard({ name, img, description, price, hidden }) {
    return (
        <div className={`${hidden ? 'sm:hidden' : ''} sm:h-[368px] h:[240px] w-[165px] sm:w-[248px]`}>
            <div className='rounded-2xl flex items-center justify-center bg-secondary w-[165px] h-[190px] sm:w-[248px] sm:h-[216px]'>
                <img
                    className='w-[70%] hover:scale-125 transition-transform duration-300 ease-in-out'
                    src={img}
                    alt={name}
                />
            </div>
            <div className='text-black mt-1 sm:mt-3 sm:text-2xl text-lg font-pextrabold'>{name}</div>
            <div className='text-[#676957] w-[85%] text-[11px]'>{description}</div>
            <div className='flex mt-2 mb-2'>
                <img className='sm:w-6 w-4' src={fullStar} alt="Full Star" />
                <img className='sm:w-6 w-4' src={fullStar} alt="Full Star" />
                <img className='sm:w-6 w-4' src={fullStar} alt="Full Star" />
                <img className='sm:w-6 w-4' src={fullStar} alt="Full Star" />
                <img className='sm:w-6 w-4' src={halfStar} alt="Half Star" />
            </div>
            <div className='font-semibold text-[#6c6e57] sm:text-2xl text-lg'>
                {price}<span className='text-[14px]'> birr</span>
            </div>
        </div>
    );
}