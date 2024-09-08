import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import img1 from '../assets/images/couch.png';
import nav from '../assets/images/nav1.png';
import nav_sel from '../assets/images/nav-sel.png';
import ProductCardType from './ProductType';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Productdata from '../assets/data/data';

export default function Products() {
    const [Selected, setSelected] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const [inProp, setInProp] = useState(true);

    // Filter the products based on the selected type
    const filteredData = Productdata.filter(product => {
        const types = ['Dining Room', 'Living Room', 'Outdoor', 'Kitchen', 'Bedroom'];
        return product.type === types[Selected];
    });

    // Get the current items for the page
    const currentItems = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Create pages array
    const pages = Array.from({ length: totalPages }, (_, index) => index);

    const handleNext = () => {
        if ((currentPage + 1) < totalPages) {
            setInProp(false); // Start exit transition
            setTimeout(() => {
                setCurrentPage(prev => prev + 1);
                setInProp(true); // Start enter transition after delay
            }, 300); // Match the timeout to the CSS transition duration
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setInProp(false); // Start exit transition
            setTimeout(() => {
                setCurrentPage(prev => prev - 1);
                setInProp(true); // Start enter transition after delay
            }, 300); // Match the timeout to the CSS transition duration
        }
    };

    return (
        <div className='flex justify-center items-center flex-col'>
            {/* Category Navigation */}
            <div className='flex font-pbold text-black gap-3 mb-4'>
                {['Dining Room', 'Living Room', 'Outdoor', 'Kitchen', 'Bedroom'].map((type, index) => (
                    <div
                        key={index}
                        className={`${Selected === index ? 'border-b-2 border-black' : ''} lg:text-lg lg:mx-2 text-[12px] whitespace-nowrap cursor-pointer`}
                        onClick={() => { setSelected(index); setCurrentPage(0); }}
                    >
                        {type}
                    </div>
                ))}
            </div>

            {/* Product Cards with Animation */}
            <CSSTransition
                in={inProp}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <TransitionGroup className='flex mt-6 md:justify-between justify-center  flex-wrap'>
                    {currentItems.map((product, index) => (
                        <CSSTransition
                            key={index}
                            timeout={300}
                            classNames="fade"
                        >
                            <ProductCardType name={product.name} img={product.img} price={product.price} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </CSSTransition>

            {/* Navigation Controls */}
            <div className='flex mt-10 w-[100%] lg:justify-end'>
                <div className='lg:w-[56%] w-full'>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            {pages.map((page) => (
                                <img
                                    key={page}
                                    src={page === currentPage ? nav_sel : nav}
                                    alt={`Page ${page + 1}`}
                                    className="cursor-pointer"
                                    onClick={() => setCurrentPage(page)}
                                />
                            ))}
                        </div>
                        <div className='flex gap-2'>
                            <button
                                className='bg-secondary px-4 text-2xl py-2 rounded-2xl text-white'
                                onClick={handleBack}
                                disabled={currentPage === 0}
                            >
                                <MdArrowBack />
                            </button>
                            <button
                                className='bg-secondary px-4 text-2xl py-2 rounded-2xl text-white'
                                onClick={handleNext}
                                disabled={(currentPage + 1) === totalPages}
                            >
                                <MdArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}