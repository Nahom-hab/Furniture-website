import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';
import useLanguage from '../zustand/useConversationStore';

export default function ContactUs() {
    const { isEng } = useLanguage();

    return (
        <div>
            <div className="py-5 md:px-[11%] md:mt-2 px-[4%]">
                <h1 className="text-4xl font-pbold text-third-200  mb-5">
                    {isEng ? 'Contact Us' : 'እባኮትን ይደውሉ'}
                </h1>

                <div className="flex justify-between md:flex-row flex-col gap-16">
                    {/* Contact Form */}

                    {/* Contact Info */}
                    <div className="w-full md:w-[48%] bg-[#b8b398] text-black p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-psemibold mb-6">
                            {isEng ? 'Reach Us' : 'ወደ እኛ ይገናኙ'}
                        </h2>

                        {/* Contact Info Section */}
                        <div className="space-y-2">
                            {/* Phone Number */}
                            <div className="flex items-center text-lg text-black gap-4">
                                <FaPhoneAlt className="text-2xl" />
                                <span className="font-pregular">+123 456 789</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center text-lg text-black gap-4">
                                <FaEnvelope />
                                <span className="font-pregular">contact@furnish.com</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-center text-lg text-black gap-4">
                                <FaMapMarkerAlt />
                                <span className="font-pregular">1234 Design St, Suite 567, Cityname</span>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="text-lg text-black mt-10 font-pregular">
                            <div className="mb-1">{isEng ? 'Working Hours:' : 'የሥራ ሰዓታት:'}</div>
                            <div>{isEng ? 'Mon - Fri: 9:00 AM - 6:00 PM' : 'ሰኞ - ዓርብ: 9:00 አ.ም - 6:00 ከምሽት'}</div>
                            <div>{isEng ? 'Sat - Sun: 10:00 AM - 4:00 PM' : 'ቅዳሜ - እሁድ: 10:00 አ.ም - 4:00 ከምሽት'}</div>
                        </div>

                        {/* Social Links */}
                        <h3 className="text-2xl font-psemibold mt-10 mb-4">
                            {isEng ? 'Follow Us' : 'እንደ እኛ ይከተሉ'}
                        </h3>
                        <div className="flex gap-6">
                            <a href="https://facebook.com" className="bg-third-200 p-3 rounded-full text-white hover:opacity-90">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="bg-third-200 p-3 rounded-full text-white hover:opacity-90">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="bg-third-200 p-3 rounded-full text-white hover:opacity-90">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="bg-third-200 p-3 rounded-full text-white hover:opacity-90">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] bg-[#b8b398] p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl text-black font-psemibold mb-6">
                            {isEng ? 'Get in Touch' : 'በማስተዋል ይደውሉ'}
                        </h2>

                        <form className="text-black space-y-3">
                            <div className="flex flex-col">
                                <label className="text-lg font-plight mb-2">{isEng ? 'Name' : 'ስም'}</label>
                                <input
                                    type="text"
                                    className="p-3 bg-[#a5a189] placeholder-black rounded-xl focus:outline-none"
                                    placeholder={isEng ? 'Your Name' : 'የእርስዎ ስም'}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-lg font-plight mb-2">{isEng ? 'Email' : 'ኢሜይል'}</label>
                                <input
                                    type="email"
                                    className="p-3 bg-[#a5a189] placeholder-black rounded-xl focus:outline-none"
                                    placeholder={isEng ? 'Your Email' : 'የእርስዎ ኢሜይል'}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-lg font-plight mb-2">{isEng ? 'Message' : 'መልእክት'}</label>
                                <textarea
                                    className="p-3 bg-[#a5a189] placeholder-black rounded-xl h-32 focus:outline-none"
                                    placeholder={isEng ? 'Your Message' : 'የእርስዎ መልእክት'}
                                ></textarea>
                            </div>

                            <button className="w-full bg-primary text-black py-3 rounded-xl hover:opacity-90 transition-all">
                                {isEng ? 'Send Message' : 'መልእክት ይላኩ'}
                            </button>
                        </form>
                    </div>

                </div>

            </div>

            <div className='p-[6%] pt-10 mt-20 bg-secondary'>
                <Footer />

            </div>
        </div>
    );
}