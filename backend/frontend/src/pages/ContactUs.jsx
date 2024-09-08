import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

export default function ContactUs() {
    return (
        <div className=" py-5 md:px-[11%] px-[4%]">
            <h1 className="text-4xl font-psemibold text-third-200 text-center mb-10">Contact Us</h1>

            <div className="flex  justify-between md:flex-row flex-col  gap-16">
                {/* Contact Form */}
                <div className="w-full md:w-[48%] bg-[#b8b398] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl text-black font-psemibold mb-6">Get in Touch</h2>

                    <form className=" text-black space-y-3">
                        <div className="flex flex-col">
                            <label className="text-lg font-plight mb-2">Name</label>
                            <input
                                type="text"
                                className="p-3 bg-[#a5a189] placeholder-black  rounded-xl focus:outline-none"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-lg font-plight mb-2">Email</label>
                            <input
                                type="email"
                                className="p-3 bg-[#a5a189] placeholder-black rounded-xl focus:outline-none "
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-lg font-plight mb-2">Message</label>
                            <textarea
                                className="p-3 bg-[#a5a189] placeholder-black rounded-xl h-32 focus:outline-none"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <button className="w-full bg-primary text-black py-3 rounded-xl hover:opacity-90 transition-all">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="w-full md:w-[48%] bg-[#b8b398] text-black p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-psemibold mb-6">Reach Us</h2>

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
                        <div className="mb-1">Working Hours:</div>
                        <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                        <div>Sat - Sun: 10:00 AM - 4:00 PM</div>
                    </div>

                    {/* Social Links */}
                    <h3 className="text-2xl font-psemibold mt-10 mb-4">Follow Us</h3>
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

            </div>
            <Footer />
        </div>
    );
}
