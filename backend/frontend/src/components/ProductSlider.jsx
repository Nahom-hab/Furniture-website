import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sliderData from '../assets/data/datane'; // Import the slider data
import ProductCard from './ProductCard'; // Import your ProductCard component
import nav from '../assets/images/nav1.png';
import nav_sel from '../assets/images/nav-sel.png';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

export default function ProductSlider() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Number of items per page
    const totalPages = Math.ceil(sliderData.length / itemsPerPage);
    const [inProp, setInProp] = useState(true); // State for transition

    // Get the current items for the page
    const currentItems = sliderData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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

    // Create pages array for navigation
    const pages = Array.from({ length: totalPages }, (_, index) => index);

    return (
        <div className='flex flex-col mb-10 mt-5'>
            {/* Product Cards with Fade Animation */}
            <CSSTransition
                in={inProp}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <TransitionGroup className='flex flex-wrap iphone:px-[6%] justify-between'>
                    {currentItems.map(product => (
                        <CSSTransition
                            key={product.id}
                            timeout={300}
                            classNames="fade"
                        >
                            <ProductCard img={product.img} name={product.name} price={product.price} description={product.description} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </CSSTransition>

            {/* Pagination Controls */}
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
                                    onClick={() => {
                                        setCurrentPage(page);
                                        setInProp(false); // Prevent transition on page change
                                        setTimeout(() => {
                                            setInProp(true); // Start enter transition after delay
                                        }, 0); // Trigger enter transition immediately
                                    }}
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