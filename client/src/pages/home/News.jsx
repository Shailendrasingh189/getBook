import { Swiper, SwiperSlide } from "swiper/react";
import news from "../../assets/news.js";
console.log(news);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const News = () => {
  // console.log(news)
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-12">
              <div className="py-4">
                <Link to="/">
                  <h3 className="text-lg font-medium hover:text-blue-500">
                    {item.title}
                  </h3>
                </Link>
                <div className="w-10 h-1 bg-primary mb-4"></div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="flex-shrink-0">
                <img src={item.image} className=" w-full object-cover" alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
