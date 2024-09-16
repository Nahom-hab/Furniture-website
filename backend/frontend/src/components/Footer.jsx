import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useLanguage from '../zustand/useConversationStore';

export default function Footer() {
    const { isEng } = useLanguage();

    return (
        <div className=''>
            <div className='flex flex-wrap justify-between pt-10 lg:mb-36 text-black'>
                <div className='lg:w-[20%] pb-10 lg:pb-0'>
                    <div className='text-2xl font-bold'>Furnish</div>
                    <p className='text-gray-600 text-[13px]'>
                        {isEng
                            ? 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.'
                            : 'ፈርኒሽ የሚለው በቤተሰብ ቤተሰብ ውስጥ የሚኖር ቤተሰብ የሚሆን የምድር በርካታ ይወዳዳል።'}
                    </p>
                </div>
                <div>
                    <div className='flex gap-8'>
                        <div className='flex flex-col lg:gap-3 gap-1 '>
                            <div>{isEng ? 'About Us' : 'እኛን ይወዳዳሉ'}</div>
                            <div>{isEng ? 'Service' : 'አገልግሎት'}</div>
                            <div>{isEng ? 'Blog' : 'ብሎግ'}</div>
                            <div>{isEng ? 'Contact Us' : 'ያገናኙን'}</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>{isEng ? 'Support' : 'ድጋፍ'}</div>
                            <div>{isEng ? 'Knowledge Base' : 'የእውቀት መነሻ'}</div>
                            <div>{isEng ? 'Live Chat' : 'በቀጥታ ውይይት'}</div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>{isEng ? 'Jobs' : 'ሥራዎች'}</div>
                            <div>{isEng ? 'Our Team' : 'የቡድን ቡድን'}</div>
                            <div>{isEng ? 'Leadership' : 'አስተዳደር'}</div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden mt-20 w-full text-[12px] justify-end flex gap-5'>
                    <div>{isEng ? 'Terms & Conditions' : 'ደንቦች እና ሁኔታዎች'}</div>
                    <div>{isEng ? 'Privacy Policy' : 'የግል ዳሰሳ'}</div>
                </div>
            </div>
            <hr className='text-black border-gray-600' />
            <div className='flex lg:text-[18px] text-[12px] text-gray-700 justify-between'>
                <div>
                    {isEng
                        ? 'Copyright ©2024. All Rights Reserved. — By Furnish'
                        : 'የውህደት መብት ©2024. ከሁሉም መብቶች ይቀርባል — በፈርኒሽ'}
                </div>
                <div className='lg:flex hidden gap-5'>
                    <div>{isEng ? 'Terms & Conditions' : 'ደንቦች እና ሁኔታዎች'}</div>
                    <div>{isEng ? 'Privacy Policy' : 'የግል ዳሰሳ'}</div>
                </div>
            </div>
        </div>
    );
}