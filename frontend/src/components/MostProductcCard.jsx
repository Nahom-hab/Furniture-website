import React from 'react'
import star_icon from '../assets/star.png'

export default function MostProductcCard({ name, img, price, discountedPrice, star }) {
    return (
        <div className='w-[227px] text-black h-[240px]'>
            <img src={img} className='w-[227px] h-[178px] object-cover rounded-2xl' alt="" />
            <div className='flex justify-between items-center'>
                <div className='text-[22px] font-semibold'>{name}</div>
                <div className='flex items-center text-[#7b7e61]'>{star} <img className='w-6' src={star_icon} alt="" /> </div>
            </div>
            <div className='flex items-center'>
                <div className='flex w-[80%] items-end'>
                    <div className='text-[24px] text-slate-800'>{discountedPrice} <span className='text-[16px] ml-[-4px]'>birr</span></div>
                    <div className='text-[11px] text-[#7b7e61] mb-[4px] line-through'>{price}birr</div>
                </div>
                <div className='text-[12px] mt-2 text-[#7b7e61]'>2DaysDelivery</div>
            </div>


        </div>
    )
}
