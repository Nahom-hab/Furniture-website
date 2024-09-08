import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';
import Footer from '../components/Footer';
import fullStar from '../assets/star.png'


export default function Product() {
    const tags = ['Furniture', 'CouchEasy', 'BestDesign', 'Space', 'Luxury'];
    const [quantity, setQuantity] = useState(1); // Adding quantity functionality
    const [selectedImage, setSelectedImage] = useState(product2); // Manage the selected image for preview

    const thumbnails = [product2, product3, product2]; // List of product thumbnail images

    return (
        <div>
            <div className='p-[11%] flex items-center gap-16 pt-10 pb-10'>
                {/* Product Image & Thumbnails */}
                <div className='flex flex-col items-center gap-6 w-[45%] h-[550px] pt-16 pb-24 rounded-3xl bg-secondary relative'>
                    <span className="absolute top-2 left-2 bg-[#a2a781] text-center  text-xl  w-[70px] h-[70px] text-white rounded-full font-bold px-2 py-1">50% OFF</span>
                    <img src={selectedImage} className='w-[60%] mb-16' alt="Product" />

                    {/* Thumbnail Images */}
                    <div className='flex gap-3'>
                        {thumbnails.map((thumbnail, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl flex justify-center items-center h-[80px] bg-third w-[80px] cursor-pointer ${selectedImage === thumbnail ? 'ring-2 ring-primary' : ''
                                    }`}
                                onClick={() => setSelectedImage(thumbnail)} // Change main image on thumbnail click
                            >
                                <img src={thumbnail} className='w-[50%]' alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className='text-black mt-[-30px] w-[45%]'>
                    <div className='text-[38px] font-semibold'>Easy Gray Couch</div>
                    <p className='text-[#6a6d54] text-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    {/* Price & Discount */}
                    <div className='flex items-end gap-3 mt-4'>
                        <div className='text-[38px] text-[#74775d] font-semibold'>12000<span className='text-[16px]'> birr</span></div>
                        <div className='text-[20px] mb-[4px] line-through text-[#7b7e61]'>18000 birr</div>
                    </div>

                    {/* Stock Availability */}
                    <div className='flex gap-3'>
                        <div>
                            <div className="mt-4 text-sm text-green-600 font-semibold">In Stock: Only 5 left!</div>
                            <div className="mt-1 text-sm text-gray-500">Ships within 3-5 business days</div>
                        </div>
                    </div>

                    {/* Ratings and Reviews */}
                    <div className='mt-4 flex items-center gap-2'>
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <img src={fullStar} className='w-7' alt="" />
                            ))}
                        </div>
                        <div className='text-sm text-gray-600'>(24 customer reviews)</div>
                    </div>
                    <div className='flex items-center gap-10'>
                        {/* Product Details (Collapsible Section) */}

                        <details className="mt-4 cursor-pointer">
                            <summary className="font-semibold text-[#525344] text-lg">Product Details</summary>
                            <div className="text-sm mt-2 text-gray-700">
                                <p><strong>Material:</strong> 100% Leather</p>
                                <p><strong>Dimensions:</strong> 200cm x 90cm x 85cm</p>
                                <p><strong>Available Colors:</strong> Gray, Black, White</p>
                            </div>
                        </details>

                        {/* Social Sharing */}
                        <div className="flex gap-3 mt-6">
                            <button className="bg-secondary text-white w-[40px] h-[40px] rounded-lg  flex justify-center items-center ">
                                <FaFacebookF />
                            </button>
                            <button className="bg-secondary text-white w-[40px] h-[40px] rounded-lg  flex justify-center items-center ">
                                <FaTwitter />
                            </button>
                            <button className="bg-secondary text-white w-[40px] h-[40px] rounded-lg  flex justify-center items-center ">
                                <FaInstagram />
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex mt-4 gap-5'>
                        <button className='bg-secondary text-[24px] px-6 mt-4 hover:opacity-80 text-white rounded-2xl py-2'>Order Now</button>
                        <button className='bg-secondary px-5 text-[24px] mt-4 flex hover:opacity-80 gap-3 items-center text-white rounded-2xl py-2'>
                            Add to cart <MdShoppingCart />
                        </button>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className='p-[11%] pt-10 pb-5'>
                <hr className='border-gray-600' />
                <Footer />
            </div>
        </div>
    );
}
