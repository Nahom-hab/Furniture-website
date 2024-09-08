import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div >
            <div className='flex flex-wrap justify-between pt-10 lg:mb-36 text-black'>
                <div className='lg:w-[20%] pb-10 lg:pb-0'>
                    <div className='text-2xl font-bold'>Furnish</div>
                    <p className='text-gray-600 text-[13px]'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                        quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                        vulputate velit imperdiet dolor tempor tristique. Pellentesque
                        habitant</p>
                </div>
                <div>
                    <div className='flex gap-8'>
                        <div className='flex flex-col lg:gap-3 gap-1 '>
                            <div>About Us</div>
                            <div>service</div>
                            <div>blog</div>
                            <div>Contact Us</div>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <div>Support</div>
                            <div>knowlage base</div>
                            <div>Live Chat</div>
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <div>Jobs</div>
                            <div>Our Team</div>
                            <div>Leader ship</div>
                        </div>
                    </div>
                </div>
                <div className='lg:hidden mt-20 w-full text-[12px] justify-end flex  gap-5'>
                    <div>Terms & Conditions </div>
                    <div>Privacy Policy</div>
                </div>
                {/* <div className='flex  justify-center self-end mt-4'>
                    <div className='flex gap-4'>
                        <a href="#" aria-label="Facebook"><FaFacebook size={20} className='text-blue-600 hover:text-blue-800' /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter size={20} className='text-blue-400 hover:text-blue-600' /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram size={20} className='text-pink-600 hover:text-pink-800' /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} className='text-blue-700 hover:text-blue-900' /></a>
                    </div>
                </div> */}

            </div>
            <hr className='text-black border-gray-600 ' />
            <div className='flex lg:text-[18px] text-[12px]  text-gray-700 justify-between'>
                <div>Copyright ©2024. All Rights Reserved. — By Furnish</div>
                <div className='lg:flex hidden  gap-5'>
                    <div>Terms & Conditions </div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}
