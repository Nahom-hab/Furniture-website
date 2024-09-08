import React from 'react'
import fullStar from '../assets/star.png'
import halfStar from '../assets/half.png'

export default function ProductCard({ name, img, discription, price, hidden }) {
    return (

        <div className={` ${hidden ? 'sm:hidden' : ''} sm:h-[368px] h:[240px] w-[160px] sm:w-[248px]`}>
            <div className=' rounded-2xl flex items-center justify-center  bg-secondary w-[160px] h-[190px] sm:w-[248px] sm:h-[216px]'>
                <img className='w-[70%]' src={img} alt="" />
            </div>
            <div className='text-black mt-1  sm:mt-3 sm:text-2xl text-lg font-pextrabold'>{name}</div>
            <div className='text-[#676957] w-[85%] text-[11px]'>{discription}</div>
            <div className='flex mt-2 mb-2'>
                <img className='sm:w-6 w-4' src={fullStar} alt="" />
                <img className='sm:w-6 w-4' src={fullStar} alt="" />
                <img className='sm:w-6 w-4' src={fullStar} alt="" />
                <img className='sm:w-6 w-4' src={fullStar} alt="" />
                <img className='sm:w-6 w-4' src={halfStar} alt="" />
            </div>
            <div className=' font-semibold text-[#6c6e57] sm:text-2xl text-lg'>{price}<span className='text-[14px]'> birr</span> </div>
        </div>
    )
}
