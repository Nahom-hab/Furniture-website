// import React, { useEffect, useState } from 'react';
// import { MdShoppingCart } from 'react-icons/md';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// import Footer from '../components/Footer';
// import useLanguage from '../zustand/useConversationStore';
// import { useParams } from 'react-router-dom';

// export default function Product() {
//     const params = useParams();
//     const { isEng } = useLanguage();
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             setLoading(true);
//             try {
//                 const res = await fetch(`/api/product/${params.id}`);
//                 if (res.ok) {
//                     const data = await res.json();
//                     setProduct(data);
//                     setSelectedImage(data.images[0]);
//                 } else {
//                     throw new Error('Product not found');
//                 }
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [params.id]); // Dependency array to run effect only when params.id changes

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div>
//             <div className='md:p-[11%] md:pt-3 p-[2%] flex flex-wrap items-center gap-16 pt-10 pb-10'>
//                 {/* Product Image & Thumbnails */}
//                 <div className='flex flex-col items-center gap-6 lg:w-[45%] h-[550px] pt-16 pb-24 rounded-3xl bg-secondary relative'>
//                     <span className="absolute top-2 left-2 bg-[#a2a781] text-center text-xl w-[70px] h-[70px] text-white rounded-full font-bold px-2 py-1">
//                         {isEng ? `${product.discount}% OFF` : `${product.discount}% ቅናሽ`}
//                     </span>
//                     <img src={selectedImage} className='lg:w-[60%] w-[70%] mt-8 mb-10' alt="Product" />

//                     {/* Thumbnail Images */}
//                     <div className='flex gap-3'>
//                         {product.images.map((thumbnail, index) => (
//                             <div
//                                 key={index}
//                                 className={`rounded-2xl flex justify-center items-center h-[80px] bg-third w-[80px] cursor-pointer ${selectedImage === thumbnail ? 'ring-2 ring-primary' : ''}`}
//                                 onClick={() => setSelectedImage(thumbnail)}
//                             >
//                                 <img src={thumbnail} className='w-[50%]' alt={`Thumbnail ${index + 1}`} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className='text-black md:mt-[50px] mt-[-40px] p-[5%] pt-0 lg:p-[0] lg:w-[45%]'>
//                     <div className='lg:text-[38px] text-[25px] mb-3 font-semibold'>
//                         {isEng ? product.name : product.nameAMH}
//                     </div>
//                     <p className='text-[#6a6d54] text-[15px]'>
//                         {isEng ? product.description : product.descriptionAMH}
//                     </p>

//                     {/* Price & Discount */}
//                     <div className='flex items-end gap-3 mt-4'>
//                         <div className='lg:text-[38px] text-[30px] text-[#74775d] font-semibold'>
//                             {product.price}<span className='text-[16px]'> birr</span>
//                         </div>
//                         <div className='text-[20px] mb-[4px] line-through text-[#7b7e61]'>{product.originalPrice} birr</div>
//                     </div>

//                     {/* Stock Availability */}
//                     <div className='flex gap-3'>
//                         <div>
//                             <div className="mt-4 text-sm text-green-600 font-semibold">
//                                 <span className='font-bold'>{isEng ? 'In Stock:' : 'በእቃ ውስጥ:'}</span>
//                                 {isEng ? `Only ${product.stock} left!` : `የቀረው ${product.stock} ብቻ ነው!`}
//                             </div>
//                             <div className="mt-1 text-sm text-gray-500">{isEng ? 'Ships within 3-5 business days' : 'በ3-5 ዕለት ውስጥ ይላካል'}</div>
//                         </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className='flex mt-4 gap-5'>
//                         <button className='bg-secondary text-[24px] px-6 mt-4 hover:opacity-80 text-white rounded-2xl py-2'>
//                             {isEng ? 'Order Now' : 'አሁን ግዥ'}
//                         </button>
//                         <button className='bg-secondary px-5 text-[24px] mt-4 flex hover:opacity-80 gap-3 items-center text-white rounded-2xl py-2'>
//                             {isEng ? 'Add to cart' : 'ወደ ጭነት ያክሉ'} <MdShoppingCart />
//                         </button>
//                     </div>

//                     <div className='flex items-start gap-20'>
//                         <details className="mt-4 h-[160px] w-[160px] cursor-pointer">
//                             <summary className="font-semibold text-[#525344] text-lg">
//                                 {isEng ? 'Product Details' : 'የምርት ዝርዝር'}
//                             </summary>
//                             <div className="text-sm mt-2 text-gray-700">
//                                 <p><strong>{isEng ? 'Material:' : 'እቃ ዝርዝር:'}</strong> {product.material}</p>
//                                 <p><strong>{isEng ? 'Dimensions:' : 'መጠን:'}</strong> {product.dimensions}</p>
//                                 <p><strong>{isEng ? 'Available Colors:' : 'የሚገኙ ቀለሞች:'}</strong> {product.availableColors.join(', ')}</p>
//                             </div>
//                         </details>
//                         <div className="flex gap-3 mt-6">
//                             <button className="bg-secondary text-white w-[40px] h-[40px] rounded-lg flex justify-center items-center ">
//                                 <FaFacebookF />
//                             </button>
//                             <button className="bg-secondary text-white w-[40px] h-[40px] rounded-lg flex justify-center items-center ">
//                                 <FaTwitter />
//                             </button>
//                             <button className="bg-secondary text-white w-[40px] h-[40px] rounded-lg flex justify-center items-center ">
//                                 <FaInstagram />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='p-[11%] pt-0 pb-5'>
//                 <hr className='border-gray-600' />
//                 <Footer />
//             </div>
//         </div>
//     );
// }