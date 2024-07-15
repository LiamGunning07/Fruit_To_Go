'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';;
import { Autoplay, Pagination, Navigation } from 'swiper';
import styles from '../styles/FruitCarousel.module.css'


const images = [
    'https://tse1.mm.bing.net/th?id=OIP.22XOhxYrd_Pu__NkrGadMgHaEo&pid=Api&P=0&h=180',
    'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?cs=srgb&dl=sliced-kiwi-fruits-867349.jpg&fm=jpg',
    'https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business-1024x683.jpg',
    
];

const FruitCarousel = () => {
    return (
        <>
        <div className={styles.container}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className={styles.Swiper}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} className={styles.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>     
        </>
    );
};

 
export default FruitCarousel;