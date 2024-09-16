import React from 'react';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import MostProductcCard from '../components/MostProductcCard';
import shop from '../assets/images/shop.jpeg';
import Products from '../components/ShopProducts';
import ProductSlider from '../components/ProductSlider';
import useLanguage from '../zustand/useConversationStore';

export default function Shop() {
    const { isEng } = useLanguage();

    return (
        <div className='mt-10'>
            <div className='lg:p-[11%] p-0 w-fit lg:pt-0'>
                <Products />
                <div className='flex flex-wrap mt-20 gap-[10px]'>
                    <CountdownTimer />
                    <div className='hidden lg:flex lg:w-[40%]   gap-[8px]  items-center '>
                        <ProductCard
                            img={product3}
                            name={isEng ? 'Sleek Bar Stool' : 'የውስጥ ቡና ቦታ'}
                            price={12000}
                            discription={isEng ? 'Add a touch of sophistication with modern bar stools.' : 'የውስጥ ቡና ቦታ ጋር የውስጥ አስተዳደር ይጨምሩ።'}
                        />
                        <ProductCard
                            img={product2}
                            name={isEng ? 'Sleek Bar Stool' : 'የውስጥ ቡና ቦታ'}
                            price={12000}
                            discription={isEng ? 'Add a touch of sophistication with modern bar stools.' : 'የውስጥ ቡና ቦታ ጋር የውስጥ አስተዳደር ይጨምሩ።'}
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ProductSlider />
                </div>
            </div>

            <div className='md:p-[11%] p-[6%] pb-10 mb-5 bg-third pt-10'>
                <div className=''>
                    <div className='text-4xl text-black font-semibold'>
                        {isEng ? 'Our Best Selling Products' : 'የምርጥ የሚሸጡ ምርቶች'}
                    </div>
                    <div className='flex  w-full justify-between mt-10 flex-wrap'>
                        <MostProductcCard
                            img={'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232'}
                            name={isEng ? 'Sleek Bar Stool' : 'የውስጥ ቡና ቦታ'}
                            price={12000}
                            discountedPrice={8000}
                            star={4.5}
                        />
                        <MostProductcCard
                            img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJh4nYvUAFlEgTZgmguoqoZwD9rUEWx5LKw&s'}
                            name={isEng ? 'Sleek Bar Stool' : 'የውስጥ ቡና ቦታ'}
                            price={12000}
                            discountedPrice={8000}
                            star={4.5}
                        />
                        <MostProductcCard
                            img={shop}
                            name={isEng ? 'Sleek Bar Stool' : 'የውስጥ ቡና ቦታ'}
                            price={12000}
                            discountedPrice={8000}
                            star={4.5}
                        />
                        <MostProductcCard
                            img={'https://www.crownasia.com.ph/wp-content/uploads/2023/08/What-Kind-of-Furniture-Would-Suit-Your-Cavite-House-and-Lot.jpg'}
                            name={isEng ? 'Sleek Bar Stool' : 'የውስጥ ቡና ቦታ'}
                            price={12000}
                            discountedPrice={8000}
                            star={4.5}
                        />
                    </div>
                </div>
            </div>

            <div className='p-[11%]  pt-0 pb-10'>
                <Footer />
            </div>
        </div>
    );
}