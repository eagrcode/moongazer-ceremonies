// data
import testamonials from "../../testamonials";

// react
import { useState } from "react";

// styles
import "./TestamonialSwiper.css";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

function TestamonialSwiper() {
  // state
  const [testamonialsData, setTestamonialsData] = useState(testamonials);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {testamonialsData.map((item) => (
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

export default TestamonialSwiper;
