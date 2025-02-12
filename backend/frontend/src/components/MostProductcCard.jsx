import React from 'react';
import star_icon from '../assets/images/star.png';
import useLanguage from '../zustand/useConversationStore';

export default function MostProductCard({ name, img, price, discountedPrice, star }) {
    const { isEng } = useLanguage();

    return (
        <div className='md:w-[227px] w-[155px] text-black h-[200px] md:h-[240px]'>
            <img src={img} className='md:w-[227px] w-[155px] md:h-[178px] object-cover rounded-2xl' alt={name} />
            <div className='flex justify-between items-center'>
                <div className='md:text-[22px] font-semibold'>{name}</div>
                <div className='flex items-center text-black'>
                    {star} <img className='lg:w-6 w-4' src={star_icon} alt="Star Rating" />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='w-[80%] justify-start'>
                    <div className='md:text-[24px] text-[14px] text-slate-800'>
                        {discountedPrice}<span className='text-[13px] ml-[-4px]'> birr</span>
                    </div>
                    <div className='text-[10px] text-black mb-[4px] line-through'>
                        {price} {isEng ? 'birr' : 'ቢር'}
                    </div>
                </div>
                <div className='lg:text-[12px] flex items-end text-[10px] mt-2 text-black'>
                    {isEng ? '2 Days Delivery' : '2 ቀን የመውጣት'}
                </div>
            </div>
        </div>
    );
}