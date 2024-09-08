import React, { useState } from 'react'
import Footer from '../components/Footer'
import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import nav from '../assets/images/nav1.png';
import nav_sel from '../assets/images/nav-sel.png';
import { MdArrowBack, MdArrowForward, MdForward } from 'react-icons/md';
import MostProductcCard from '../components/MostProductcCard';
import shop from '../assets/images/shop.jpeg'
import Products from '../components/ShopProducts';
import ProductSlider from '../components/ProductSlider';



export default function Shop() {


    return (
        <div className='mt-10'>
            <div className='lg:p-[11%] p-[2%]  w-fit  lg:pt-0'>
                <Products />
                <div className='flex  flex-wrap mt-20 justify-between'>
                    <CountdownTimer />
                    <div className='flex justify-center w-full gap-[13px]  items-center iphone:gap-6'>
                        <ProductCard img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                        <ProductCard img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    </div>
                </div>
                <ProductSlider />
            </div>
            <div className='lg:p-[11%] p-[6%] pb-10 mb-5 bg-third pt-10  '>
                <div className=''>
                    <div className='text-4xl text-black font-semibold'>Our Best Selling Products</div>
                    <div className='flex justify-between iphone:px-[6%] mt-10 flex-wrap'>
                        <MostProductcCard img={shop} name={'Sleek Bar Stool'} price={12000} discountedPrice={8000} star={4.5} />
                        <MostProductcCard img={shop} name={'Sleek Bar Stool'} price={12000} discountedPrice={8000} star={4.5} />
                        <MostProductcCard img={shop} name={'Sleek Bar Stool'} price={12000} discountedPrice={8000} star={4.5} />
                        <MostProductcCard img={shop} name={'Sleek Bar Stool'} price={12000} discountedPrice={8000} star={4.5} />

                    </div>

                </div>
            </div>


            <div className='p-[11%]  pt-0  pb-10'>
                <Footer />
            </div>

        </div>
    )
}
