import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useLanguage from '../zustand/useConversationStore';

const blogPosts = [
    {
        id: 1,
        title: 'Choosing the Right Sofa for Your Living Room',
        excerpt: 'Discover tips on selecting the perfect sofa that complements your space and style.',
        date: 'September 10, 2024',
        image: 'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
    },
    {
        id: 2,
        title: 'Sustainable Furniture: Why It Matters',
        excerpt: 'Learn about the benefits of sustainable furniture and how it impacts the environment.',
        date: 'September 15, 2024',
        image: 'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
    },
    {
        id: 3,
        title: 'Top 10 Furniture Trends of 2024',
        excerpt: 'Stay updated with the latest trends in furniture design and decor for your home.',
        date: 'September 20, 2024',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGj1UdgpWgVTVMzdsXKRNc5sk7ppKC44_wYUYgkxf9I27LZEVe0GKN9LojrOKo2zNfG8&usqp=CAU',
    },
];

export default function Blog() {
    const { isEng } = useLanguage();

    return (
        <div>
            <div className='p-[8%] pt-16  max-w-7xl mx-auto '>
                <h1 className="text-4xl   text-gray-700 font-bold mb-12">
                    {isEng ? 'Your Home, Our Passion' : 'ቤታችን ፍቅር ይህ ነው'}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map(post => (
                        <Link key={post.id} to={`/blog/${post.id}`} className="bg-secondary rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-2xl text-white font-bold mb-2">
                                    {isEng ? post.title : 'የቤት ገበን ስርዓት ይወስዳል'} {/* Placeholder translation */}
                                </h2>
                                <p className="text-gray-200 mb-3">
                                    {isEng ? post.excerpt : 'የቤት ምርት እና የቤት ውስጥ ተመልክቶ ይወስዳል'} {/* Placeholder translation */}
                                </p>
                                <p className="text-gray-300 text-sm">{post.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='p-[6%] pt-10 bg-secondary'>
                <Footer />

            </div>
        </div>
    );
}