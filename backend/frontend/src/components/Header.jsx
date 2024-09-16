import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import img1 from '../assets/images/image2.png';
import img2 from '../assets/images/image3.png';
import img3 from '../assets/images/image4.png';
import person from '../assets/images/person.jpg';
import useLanguage from '../zustand/useConversationStore';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { isEng, setIsEng } = useLanguage();
    const sidebarRef = useRef(null);

    const linkStyle = 'text-sm font-medium';
    const activeStyle = 'border-b-2 border-black pb-1';
    const sidebarActiveStyle = 'bg-[#C8C3A7] rounded-lg p-4 rpl-o py-2';

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        const isEnglish = selectedLanguage === 'English';
        setIsEng(isEnglish);
        localStorage.setItem('isEng', isEnglish);
    };

    const closeSidebar = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeSidebar);
        return () => {
            document.removeEventListener('mousedown', closeSidebar);
        };
    }, []);

    return (
        <div className='lg:px-8 px-3 text-black pt-4 flex justify-between items-center'>
            <div className='font-extrabold text-2xl md:text-3xl'>Furnish</div>

            <div className='flex items-center gap-32'>
                {/* Desktop Navigation Links */}
                <div className='lg:flex items-center hidden gap-8'>
                    <NavLink to="/" end className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        {isEng ? 'Home' : 'መነሻ'}
                    </NavLink>
                    <NavLink to="/shop" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        {isEng ? 'Shop' : 'ምርት'}
                    </NavLink>
                    <NavLink to="/aboutUs" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        {isEng ? 'About Us' : 'ስለ እኛ'}
                    </NavLink>
                    <NavLink to="/contactUs" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        {isEng ? 'Contact Us' : 'ያገናኙን'}
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        {isEng ? 'Blog' : 'ብሎግ'}
                    </NavLink>
                </div>

                {/* Profile Icons */}
                <div className='flex gap-6 items-center'>
                    <select
                        className='lg:block hidden bg-secondary p-2 px-4 rounded-lg border-none outline-none'
                        value={isEng ? 'English' : 'Amharic'}
                        onChange={handleLanguageChange}
                    >
                        <option className='bg-secondary w-fit p-2 px-4 rounded-lg border-none outline-none' value='English'>English</option>
                        <option className='bg-secondary w-fit p-2 px-4 rounded-lg border-none outline-none' value='Amharic'>Amharic</option>
                    </select>

                    <div title="Search">
                        <img src={img1} alt="Search" />
                    </div>
                    <div title="Favorite">
                        <img src={img2} alt="Favorite" />
                    </div>
                    <div title="Notifications">
                        <img src={img3} alt="Notifications" />
                    </div>
                    <div title="Profile">
                        <img className='w-8 h-8 rounded-full object-cover' src={person} alt="Profile" />
                    </div>
                    {/* Hamburger menu for mobile */}
                    <div className='lg:hidden'>
                        <button onClick={toggleSidebar} aria-label="Toggle menu">
                            {isSidebarOpen ? <MdClose className='text-3xl' /> : <MdMenu className='text-3xl' />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar (Mobile Navigation) */}
            <div
                ref={sidebarRef}
                className={`fixed z-50 top-0 right-0 h-full w-[50%] bg-[#b4ad8d] p-8 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className='flex flex-col gap-6'>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/"
                        end
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        {isEng ? 'Home' : 'መነሻ'}
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/shop"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        {isEng ? 'Shop' : 'ምርት'}
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/aboutUs"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        {isEng ? 'About Us' : 'ስለ እኛ'}
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/contactUs"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        {isEng ? 'Contact Us' : 'ያገናኙን'}
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/blog"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        {isEng ? 'Blog' : 'ብሎግ'}
                    </NavLink>
                    <select
                        className='lg:block mt-32 bg-secondary p-2 px-4 rounded-lg border-none outline-none'
                        value={isEng ? 'English' : 'Amharic'}
                        onChange={handleLanguageChange}
                    >
                        <option className='bg-secondary w-fit p-2 px-4 rounded-lg border-none outline-none' value='English'>English</option>
                        <option className='bg-secondary w-fit p-2 px-4 rounded-lg border-none outline-none' value='Amharic'>Amharic</option>
                    </select>
                </div>
            </div>
        </div>
    );
}