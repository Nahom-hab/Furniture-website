import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import useLanguage from '../zustand/useConversationStore';
const blogPosts = [
    {
        id: 1,
        title: 'Sustainable Furniture: Why It Matters',
        amharicTitle: 'የተረጋጋ ቤት ቁሳቁስ: ለምን ይኖር አለ?',
        content: [
            {
                title: 'Introduction',
                amharicTitle: 'መግቢያ',
                text: 'Sustainable furniture not only looks good but also helps the environment. In a world increasingly aware of environmental issues, making eco-friendly choices in our homes has never been more important. This blog will guide you on how to select sustainable furniture that aligns with your values and beautifies your living space.',
                amharicText: 'የተረጋጋ ቤት ቁሳቁስ በጣም ውብ ይመስላል እና እንዲሁም ወቅታዊ ነው። በአካባቢ ጉዳዮች ላይ የተመለከተ ዓለም ውስጥ በቤቶች ውስጥ የአንዳንድ ባለኝነት ምርጫዎች እንደ መለኪያ ተመልክቶ ምን እንደሚሆን ይገናኝ።'
            },
            {
                title: 'Why This Blog',
                amharicTitle: 'ይህ ብሎግ ለምን?',
                text: 'This blog aims to raise awareness about the importance of sustainable furniture and its benefits for our planet. By understanding the impact of our purchasing decisions, we can contribute to a healthier planet. Sustainable furniture reduces waste, minimizes the use of harmful materials, and supports ethical production practices. Our goal is to inspire readers to think critically about their furniture choices and consider the long-term effects on the environment.',
                amharicText: 'ይህ ብሎግ የተረጋጋ ቤት ቁሳቁስ እና ምርቶች ላይ ውይይቶችን እንዲሰጠው ይመለከታል። ወገን እዚህ ያደርጋሉ በየዋነኛ ወጋዎች ላይ ጥቂት ምርጫዎች አሉ።'
            },
            {
                title: 'About Us',
                amharicTitle: 'ስለ እኛ',
                text: 'At [Your Furniture Brand], we believe in promoting sustainable practices in the furniture industry. Our mission is to provide eco-friendly furniture options that do not compromise on style or comfort. We curate a selection of furniture made from responsibly sourced materials, ensuring that each piece contributes positively to both your home and the environment. Join us on this journey towards a more sustainable future, where you can furnish your space beautifully while caring for the earth.',
                amharicText: 'በ[የእርስዎ የቤት ቁሳቁስ ምርት] ውስጥ ውቅትን ይወዳድሩ የሚባል የተረጋጋ ቤት ቁሳቁስ ምርቶችን እንዲደረግ እንተው እኛ አነሱት። ይህ የእርስዎ ቦታ ያለውን ይወዳድሩ ይህም በዚህ የተረጋጋ ቤት ቁሳቁስ ብሎግ ውስጥ ይስማማለች።'
            }
        ],
        date: 'September 15, 2024',
        image: 'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
    },
    {
        id: 2,
        title: 'Sustainable Furniture: Why It Matters',
        amharicTitle: 'የተረጋጋ ቤት ቁሳቁስ: ለምን ይኖር አለ?',
        content: [
            {
                title: 'Introduction',
                amharicTitle: 'መግቢያ',
                text: 'Sustainable furniture not only looks good but also helps the environment. In a world increasingly aware of environmental issues, making eco-friendly choices in our homes has never been more important. This blog will guide you on how to select sustainable furniture that aligns with your values and beautifies your living space.',
                amharicText: 'የተረጋጋ ቤት ቁሳቁስ በጣም ውብ ይመስላል እና እንዲሁም ወቅታዊ ነው። በአካባቢ ጉዳዮች ላይ የተመለከተ ዓለም ውስጥ በቤቶች ውስጥ የአንዳንድ ባለኝነት ምርጫዎች እንደ መለኪያ ተመልክቶ ምን እንደሚሆን ይገናኝ።'
            },
            {
                title: 'Why This Blog',
                amharicTitle: 'ይህ ብሎግ ለምን?',
                text: 'This blog aims to raise awareness about the importance of sustainable furniture and its benefits for our planet. By understanding the impact of our purchasing decisions, we can contribute to a healthier planet. Sustainable furniture reduces waste, minimizes the use of harmful materials, and supports ethical production practices. Our goal is to inspire readers to think critically about their furniture choices and consider the long-term effects on the environment.',
                amharicText: 'ይህ ብሎግ የተረጋጋ ቤት ቁሳቁስ እና ምርቶች ላይ ውይይቶችን እንዲሰጠው ይመለከታል። ወገን እዚህ ያደርጋሉ በየዋነኛ ወጋዎች ላይ ጥቂት ምርጫዎች አሉ።'
            },
            {
                title: 'About Us',
                amharicTitle: 'ስለ እኛ',
                text: 'At [Your Furniture Brand], we believe in promoting sustainable practices in the furniture industry. Our mission is to provide eco-friendly furniture options that do not compromise on style or comfort. We curate a selection of furniture made from responsibly sourced materials, ensuring that each piece contributes positively to both your home and the environment. Join us on this journey towards a more sustainable future, where you can furnish your space beautifully while caring for the earth.',
                amharicText: 'በ[የእርስዎ የቤት ቁሳቁስ ምርት] ውስጥ ውቅትን ይወዳድሩ የሚባል የተረጋጋ ቤት ቁሳቁስ ምርቶችን እንዲደረግ እንተው እኛ አነሱት። ይህ የእርስዎ ቦታ ያለውን ይወዳድሩ ይህም በዚህ የተረጋጋ ቤት ቁሳቁስ ብሎግ ውስጥ ይስማማለች።'
            }
        ],
        date: 'September 15, 2024',
        image: 'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
    },
    {
        id: 3,
        title: 'Sustainable Furniture: Why It Matters',
        amharicTitle: 'የተረጋጋ ቤት ቁሳቁስ: ለምን ይኖር አለ?',
        content: [
            {
                title: 'Introduction',
                amharicTitle: 'መግቢያ',
                text: 'Sustainable furniture not only looks good but also helps the environment. In a world increasingly aware of environmental issues, making eco-friendly choices in our homes has never been more important. This blog will guide you on how to select sustainable furniture that aligns with your values and beautifies your living space.',
                amharicText: 'የተረጋጋ ቤት ቁሳቁስ በጣም ውብ ይመስላል እና እንዲሁም ወቅታዊ ነው። በአካባቢ ጉዳዮች ላይ የተመለከተ ዓለም ውስጥ በቤቶች ውስጥ የአንዳንድ ባለኝነት ምርጫዎች እንደ መለኪያ ተመልክቶ ምን እንደሚሆን ይገናኝ።'
            },
            {
                title: 'Why This Blog',
                amharicTitle: 'ይህ ብሎግ ለምን?',
                text: 'This blog aims to raise awareness about the importance of sustainable furniture and its benefits for our planet. By understanding the impact of our purchasing decisions, we can contribute to a healthier planet. Sustainable furniture reduces waste, minimizes the use of harmful materials, and supports ethical production practices. Our goal is to inspire readers to think critically about their furniture choices and consider the long-term effects on the environment.',
                amharicText: 'ይህ ብሎግ የተረጋጋ ቤት ቁሳቁስ እና ምርቶች ላይ ውይይቶችን እንዲሰጠው ይመለከታል። ወገን እዚህ ያደርጋሉ በየዋነኛ ወጋዎች ላይ ጥቂት ምርጫዎች አሉ።'
            },
            {
                title: 'About Us',
                amharicTitle: 'ስለ እኛ',
                text: 'At [Your Furniture Brand], we believe in promoting sustainable practices in the furniture industry. Our mission is to provide eco-friendly furniture options that do not compromise on style or comfort. We curate a selection of furniture made from responsibly sourced materials, ensuring that each piece contributes positively to both your home and the environment. Join us on this journey towards a more sustainable future, where you can furnish your space beautifully while caring for the earth.',
                amharicText: 'በ[የእርስዎ የቤት ቁሳቁስ ምርት] ውስጥ ውቅትን ይወዳድሩ የሚባል የተረጋጋ ቤት ቁሳቁስ ምርቶችን እንዲደረግ እንተው እኛ አነሱት። ይህ የእርስዎ ቦታ ያለውን ይወዳድሩ ይህም በዚህ የተረጋጋ ቤት ቁሳቁስ ብሎግ ውስጥ ይስማማለች።'
            }
        ],
        date: 'September 15, 2024',
        image: 'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
    },
    // Additional posts...
];
export default function BlogDetail() {
    const { id } = useParams();
    const { isEng } = useLanguage();
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div className="p-6">{isEng ? 'Post not found!' : 'መዝገብ አልተገኘም!'}</div>;
    }

    return (
        <div>
            <div className="max-w-4xl mt-10 mx-auto p-6">
                <h1 className="text-4xl  font-bold md:text-5xl text-gray-700 mb-8">
                    {isEng ? post.title : 'የምርት መነሻ: ምን እንደሚኖር'}
                </h1>
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                <p className="text-gray-600 mb-5 text-lg">{post.date}</p>
                <div className="text-gray-700 leading-relaxed text-lg">
                    {post.content.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">
                                {isEng ? section.title : section.amharicTitle} {/* Placeholder translation */}
                            </h2>
                            <p>{isEng ? section.text : section.amharicText}</p> {/* Placeholder translation */}
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-[6%] pt-10 bg-secondary'>
                <Footer />

            </div>
        </div>
    );
}