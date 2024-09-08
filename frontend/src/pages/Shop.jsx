import React, { useState } from 'react'
import Footer from '../components/Footer'
import img1 from '../assets/couch.png';
import ProductCardType from '../components/ProductCardType2';
import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';
import nav from '../assets/nav1.png';
import nav_sel from '../assets/nav-sel.png';
import { MdArrowBack, MdArrowForward, MdForward } from 'react-icons/md';
import MostProductcCard from '../components/MostProductcCard';
import shop from '../assets/shop.jpeg'



export default function Shop() {
    const [Selected, setSelected] = useState(0)

    return (
        <div className='mt-10'>
            <div className='p-[11%]  pt-0'>
                <div className='flex font-pbold  text-black gap-6'>
                    <div className={`${Selected === 0 ? 'border-b-2 border-black' : ''}`} onClick={() => setSelected(0)}>Dining room</div>
                    <div className={`${Selected === 1 ? 'border-b-2 border-black' : ''}`} onClick={() => setSelected(1)}>Living Room</div>
                    <div className={`${Selected === 2 ? 'border-b-2 border-black' : ''}`} onClick={() => setSelected(2)}>OutDoor</div>
                    <div className={`${Selected === 3 ? 'border-b-2 border-black' : ''}`} onClick={() => setSelected(3)}>Kitchen</div>
                    <div className={`${Selected === 4 ? 'border-b-2 border-black' : ''}`} onClick={() => setSelected(4)}>Bed Room</div>
                </div>
                <div className='flex mt-6 justify-between flex-wrap'>
                    <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                    <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                    <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                    <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                    <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                    <ProductCardType name={'Gray Brown Couch'} img={img1} price={6000} />
                </div>
                <div className='flex justify-end'>
                    <div className='w-[53%] '>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src={nav} alt="" />
                                <img src={nav_sel} alt="" />
                                <img src={nav} alt="" />
                                <img src={nav} alt="" />
                            </div>
                            <div className='flex gap-2'>
                                <button className='bg-secondary px-4 text-2xl py-2 rounded-2xl text-white'><MdArrowBack /></button>
                                <button className='bg-secondary px-4 text-2xl py-2 rounded-2xl text-white '><MdArrowForward /></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex mt-20 justify-between'>
                    <CountdownTimer />
                    <ProductCard img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                </div>
                <div className='flex flex-wrap mt-5 justify-between'>
                    <ProductCard img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                </div>
                <div className='flex flex-wrap mt-5 justify-between'>
                    <ProductCard img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product3} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                    <ProductCard img={product2} name={'Sleek Bar Stool'} price={12000} discription={'Add a touch of sophistication with modern bar stools.'} />
                </div>
                <div className='flex  mt-10 justify-end'>
                    <div className='w-[53%] '>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src={nav} alt="" />
                                <img src={nav_sel} alt="" />
                                <img src={nav} alt="" />
                                <img src={nav} alt="" />
                            </div>
                            <div className='flex gap-2'>
                                <button className='bg-secondary px-4 text-2xl py-2 rounded-2xl text-white'><MdArrowBack /></button>
                                <button className='bg-secondary px-4 text-2xl py-2 rounded-2xl text-white '><MdArrowForward /></button>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
            <div className='p-[11%] pb-10 mb-5 bg-third pt-10  '>
                <div className=''>
                    <div className='text-4xl text-black font-semibold'>Our Best Selling Products</div>
                    <div className='flex justify-between mt-10 flex-wrap'>
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
