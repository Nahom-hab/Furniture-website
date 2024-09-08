import React from 'react'
import star_icon from '../assets/images/star.png'

export default function MostProductcCard({ name, img, price, discountedPrice, star }) {
    return (
        <div className='md:w-[227px] w-[155px] text-black h-[200px] md:h-[240px]'>
            <img src={img} className='md:w-[227px] w-[155px] md:h-[178px] object-cover rounded-2xl' alt="" />
            <div className='flex justify-between items-center'>
                <div className='md:text-[22px] font-semibold'>{name}</div>
                <div className='flex items-center text-[#7b7e61]'>{star} <img className='lg:w-6 w-4' src={star_icon} alt="" /> </div>
            </div>
            <div className='flex items-center'>
                <div className='flex w-[80%] items-end'>
                    <div className='md:text-[24px] text-[14px]  text-slate-800'>{discountedPrice}<span className='text-[16px] ml-[-4px]'> birr</span></div>
                    <div className='text-[10px] text-[#7b7e61] mb-[4px] line-through'>{price}birr</div>
                </div>
                <div className='lg:text-[12px] text-[10px] mt-2 text-[#7b7e61]'>2DaysDelivery</div>
            </div>


        </div>
    )
}
