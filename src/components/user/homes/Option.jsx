import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Mousewheel } from 'swiper/modules';



const Option = () => {
    const [hasBorder, setHasBorder] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setHasBorder(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`p-[10px] h-[60px] transition-all duration-500  w-full flex gap-[15px]  rounded-md ${hasBorder ? 'shadow-lg' : ''}`}>
            <Swiper
                spaceBetween={10}
                slidesPerView='8'
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }}
                mousewheel={true}
                modules={[Mousewheel]}
            >
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full bg-Yellow text-Yellow p-[5px] bg-opacity-15 rounded-md border-[2px] border-Yellow">started</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">breakfast</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">lunch</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">supper</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">dessert</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="capitalize font-medium font-Roboto h-full p-[5px] bg-opacity-15 rounded-md">evarage</button>
                </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
        </div>
    );
};

export default Option;
