import React from 'react'
import cart from '../assets/cart.png'
export default function ProductCardType({ name, img, price }) {
    return (
        <div className='mb-4'>
            <div className='bg-secondary rounded-xl flex items-center justify-center w-[340px] h-[210px]'><img className='w-[70%]' src={img} alt="" /></div>
            <div className='px-1 flex justify-between mt-2 items-center'>
                <div className='text-black'>
                    <div className='text-2xl font-pextrabold'>{name}</div>
                    <div className='text-[20px] text-gray-600'>{price}birr</div>
                </div>
                <div className='bg-secondary w-10 rounded-full h-10 p-2'>
                    <img className='w-10 ' src={cart} alt="" />
                </div>
            </div>


        </div>
    )
}
