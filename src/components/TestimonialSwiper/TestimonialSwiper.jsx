// data
import testimonials from "../../testimonials";

// react
import { useState } from "react";

// styles
import "./TestimonialSwiper.css";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

function TestimonialSwiper() {
  // state
  const [testimonialsData, setTestimonialsData] = useState(testimonials);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {testimonialsData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="homepage-quote-container">
            <div>
              <em>
                <q>{item.text}</q>
              </em>
              <p>- {item.author}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialSwiper;
