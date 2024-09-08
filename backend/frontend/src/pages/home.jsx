import React from 'react';
import { MdArrowForward } from 'react-icons/md'; // Impor

import homeimg from '../assets/images/home.jpeg';
import homePhone from '../assets/images/homePhone.jpeg';

import couch from '../assets/images/p2.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import home3 from '../assets/images/home3.jpg';
import img1 from '../assets/images/couch.png';
import shipingBag from '../assets/images/shopping-bag.png';
import car from '../assets/images/fast-delivery.png';
import customers from '../assets/images/customers.png';
import moneyba from '../assets/images/moneyba.png';
import ProductCard from '../components/ProductCard';
import ProductCardType from '../components/ProductCardType2';
import ImageSlider from '../components/imageSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <div className='sm:h-fit h-[700px]'>
                <img src={homeimg} className='w-full sm:block hidden mt-8 rounded-3xl' alt="" />
                <img src={homePhone} className='w-full sm:hidden block mt-8' alt="" />

                <h1 className='sm:flex text-black sm:mt-0 mt-10   text-5xl sm:text-6xl font-bold items-center relative bottom-[500px] flex-col justify-center'>
                    <div className='flex justify-center items-center flex-col'>
                        <span className='sm:flex text-center'>
                            <span>Discover your</span>
                            <span className='sm:ml-3 sm:flex sm:mt-0 sm-mb-0 mt-3 mb-3 block'>Perfect</span>
                        </span>
                        <span className='block'>Space</span></div>

                </h1>
            </div>
            <div className='sm:p-[11%] mt-[-30px] p-[1%] pb-5 pt-0'>
                <div className='flex flex-wrap items-center justify-center sm:justify-normal gap-4 mt-[-100px]'>
                    <div className='text-black mb-5 sm:mb-0 sm:w-[250px] w-[90%]'>
                        <div className='text-[35px]  font-semibold'>
                            Our Trending<span className='sm:block'> Products</span>
                        </div>
                        <p className='text-slate-600 mt-1 text-[15px]'>
                            Explore our top-selling furniture collections that combine modern elegance with timeless appeal. The Urban Elegance Collection features sleek.
                        </p>
                        <button className='bg-secondary px-10 mt-4 gap-2 flex items-center text-white rounded-2xl py-2'>View All <MdArrowForward /></button>
                    </div>
                    <ProductCard hidden={false} img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard hidden={false} img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard hidden={false} img={couch} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard hidden={true} img={couch} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />

                </div>

                <div className='pt-10 flex flex-wrap gap-4 sm:gap:0 justify-between'>
                    <img className='sm:w-[52%] rounded-2xl h-[380px]' src={home3} alt="" />
                    <div className='sm:w-[46%] pt-16 px-5 text-white bg-secondary rounded-2xl h-[380px]'>
                        <h1 className='text-[34px] pb-5'>Get your own Furniture </h1>
                        <p className='text-slate-200 text-[14px]'>
                            Furniture is the foundation of any living space, playing a crucial role in both comfort and functionality. It not only provides the necessary support for daily activities but also defines the aesthetic of a room.
                        </p>
                        <button className='bg-gray flex items-center px-10 gap-2 mt-4 text-white rounded-2xl py-2'>View All  <MdArrowForward /></button>
                    </div>
                </div>

                <div className='flex sm:mt-0 mt-5 mb-5 sm:mb-0 sm:gap-28 gap-5 justify-center'>
                    <div className='sm:w-32 w-24'>
                        <div className='sm:w-12 w-6 z-0 sm:h-12 h-6 relative sm:top-[86px] top-[46px] sm:left-14 left-9 rounded-full bg-[#a7aa8e]'></div>
                        <img className='z-50 ml-4 relative w-10 sm:w-20' src={shipingBag} alt="" />
                        <div className='text-black pt-4 whitespace-nowrap sm:text-lg text-[10px]'>Easy For Shipping</div>
                    </div>
                    <div className='mt-4'>
                        <div className='sm:w-12 w-6 z-0 sm:h-12 h-6 relative sm:top-[66px] top-[34px] sm:left-14 left-9  rounded-full bg-[#a7aa8e]'></div>
                        <img className='z-50  ml-4 relative right-3 sm:top-2 w-12 sm:w-20' src={car} alt="" />
                        <div className='text-black sm:text-lg whitespace-nowrap mt-3 sm:mt-8  text-[10px]'>Fast Shipping</div>
                    </div>

                    <div className=''>
                        <div className='sm:w-12 w-6 z-0 sm:h-12 h-6 relative sm:top-[86px] top-[46px] sm:left-14 left-9 rounded-full bg-[#a7aa8e]'></div>
                        <img className='z-50 ml-4 relative w-10 sm:w-20' src={customers} alt="" />
                        <div className='text-black pt-4  whitespace-nowrap  sm:text-lg text-[10px]'>24/7 support</div>
                    </div>
                    <div className=''>
                        <div className='sm:w-12 w-6 z-0 sm:h-12 h-6 relative sm:top-[86px] top-[46px] sm:left-14 left-9 rounded-full bg-[#a7aa8e]'></div>
                        <img className='z-50 ml-4 relative w-10 sm:w-20' src={moneyba} alt="" />
                        <div className='text-black pt-4  whitespace-nowrap  sm:text-lg text-[10px]'>Hassle Free Returns</div>
                    </div>
                </div>

                <div className='mt-10  '>
                    <h1 className='text-4xl mb-5  font-pextrabold text-black'>Our Products</h1>
                    <div className='flex sm:justify-between justify-center flex-wrap'>
                        <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                        <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                        <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                        <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                        <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                        <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                    </div>
                </div>

                <div className="mt-20 flex sm:flex-row items-center flex-col gap-10">
                    <div className='text-black w-[330px]'>
                        <div className='text-[32px] pb-5 font-bold'>70+ Unique Furniture Designs</div>
                        <p className='w-[90%] text-[15px] text-gray-600'>
                            Explore our top-selling furniture collections that combine modern elegance with timeless appeal.
                            The Urban Elegance Collection features sleek, minimalist designs perfect for contemporary spaces.
                        </p>
                        <button className='bg-gray flex items-center gap-2  px-10 sm:text-2xl text-xl mt-4 text-white rounded-3xl py-4'>Explore More  <MdArrowForward className='mt-2' /></button>
                    </div>
                    <ImageSlider />
                </div>
            </div>
            <div className='p-[11%] pb-5 bg-secondary pt-0'>
                <div className='flex mt-20 flex-wrap sm:pt-0 pt-10 justify-between items-center'>
                    <div className='sm:w-[40%] text-black'>
                        <div className=' text-4xl mb-4'>Testimonials</div>
                        <p className='text-sm'>Don’t just take our word for it—see what our satisfied customers have to say. Discover
                            why we’re a trusted name in quality and service. Learn more about us toda</p>
                    </div>
                    <div className='sm:w-[55%] w-[100%]'>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
            <div className='p-[11%] pb-10  pt-0'><Footer /></div>

        </div>
    );
}