import React from 'react';
import cart from '../assets/images/cart.png';
import { Link } from 'react-router-dom';

export default function ProductCardType({ name, img, price }) {
    return (
        <Link to={'/product'} className='mb-4'>
            <div className='bg-secondary rounded-xl flex flex-col items-center justify-center w-[340px] h-[210px]'>
                <span className='text-red-600 w-full pr-2 text-end font-bold'>50%OFF</span>
                <img
                    className='h-[70%] hover:scale-125 transition-transform duration-300 ease-in-out'
                    src={img}
                    alt={name}
                />
            </div>
            <div className='px-2 flex justify-between mt-2 items-center'>
                <div className='text-black'>
                    <div className='text-[23px] font-pextrabold'>{name}</div>
                    <div className='text-[20px] text-gray-600'>{price} birr  </div>
                </div>
                <div className='bg-secondary w-10 rounded-full h-10 p-2'>
                    <img className='w-10' src={cart} alt="Add to cart" />
                </div>
            </div>
        </Link>
    );
}