import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { MdMenu, MdClose } from 'react-icons/md'; // Import hamburger menu and close icons
import img1 from '../assets/images/image2.png';
import img2 from '../assets/images/image3.png';
import img3 from '../assets/images/image4.png';
import person from '../assets/images/person.jpg';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to handle sidebar visibility

    const linkStyle = 'text-sm font-medium';
    const activeStyle = 'border-b-2 border-black pb-1'; // Underline style for active link (Desktop)
    const sidebarActiveStyle = 'bg-[#C8C3A7] rounded-lg p-4 rpl-o py-2'; // Custom style for active sidebar links

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility

    return (
        <div className='pl-8 text-black pt-4 pr-8 flex justify-between items-center'>
            <div className='font-extrabold text-3xl'>Furnish</div>

            <div className='flex items-center gap-32'>
                {/* Desktop Navigation Links */}
                <div className='lg:flex items-center hidden gap-8'>
                    <NavLink to="/" end className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/shop" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        Shop
                    </NavLink>
                    <NavLink to="/aboutUs" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        About Us
                    </NavLink>
                    <NavLink to="/contactUs" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        Contact Us
                    </NavLink>
                    <NavLink to="/blog" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}>
                        Blog
                    </NavLink>
                </div>

                {/* Profile Icons */}
                <div className='flex gap-6 items-center'>
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
                className={`fixed z-50 top-0 right-0 h-full w-[50%] bg-[#b4ad8d] p-8 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className='flex flex-col gap-6'>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/"
                        end
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/shop"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/aboutUs"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/contactUs"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        onClick={toggleSidebar}
                        to="/blog"
                        className={({ isActive }) => `${linkStyle} ${isActive ? sidebarActiveStyle : ''}`}
                    >
                        Blog
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
