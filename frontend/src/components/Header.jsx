import React from 'react';
import { MdSearch, MdFavorite, MdNotifications, MdPerson } from 'react-icons/md';
import img1 from '../assets/image2.png'
import img2 from '../assets/image3.png'
import img3 from '../assets/image4.png'
import person from '../assets/person.jpg'


export default function Header() {
    return (
        <div className='pl-8 text-black pt-4 pr-8 flex justify-between'>
            <div className='font-extrabold text-3xl'>Furnish</div>
            <div className='flex gap-32'>
                <div className=' lg:flex hidden gap-8'>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Blog</p>
                </div>
                <div className='flex gap-6 items-center'>
                    <div title="Search">
                        <img src={img1} alt="" />
                    </div>
                    <div title="Favorite">
                        <img src={img2} alt="" />
                    </div>
                    <div title="Notifications">
                        <img src={img3} alt="" />
                    </div>
                    <div title="Profile">
                        <img className='w-8 h-8 rounded-full object-cover' src={person} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}