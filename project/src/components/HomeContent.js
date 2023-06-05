import { useNavigate, Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen-xl mx-auto mt-32">
      <div>
        <h2 className="text-2xl pb-4 border-b border-b-gray-400">추천 도서</h2>
        <Swiper
          className="mt-8"
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
        >
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 1</div>
            <h3 className="mt-2">
              <Link>제목 1</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 2</div>
            <h3 className="mt-2">
              <Link>제목 2</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 3</div>
            <h3 className="mt-2">
              <Link>제목 3</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 4</div>
            <h3 className="mt-2">
              <Link>제목 4</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 5</div>
            <h3 className="mt-2">
              <Link>제목 5</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 6</div>
            <h3 className="mt-2">
              <Link>제목 6</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 7</div>
            <h3 className="mt-2">
              <Link>제목 7</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 8</div>
            <h3 className="mt-2">
              <Link>제목 8</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 9</div>
            <h3 className="mt-2">
              <Link>제목 9</Link>
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-neutral-900 h-60">이미지 10</div>
            <h3 className="mt-2">
              <Link>제목 10</Link>
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl pb-4 border-b border-b-gray-400 relative">
          응원 받은 챌린지
          <button
            type="button"
            className="absolute right-0"
            onClick={() => {
              navigate("challenge");
            }}
          >
            + 더 보기
          </button>
        </h2>
        <ul className="mt-8 flex gap-8">
          <li className="flex-1">
            <div className="border border-neutral-900 h-60">이미지 1</div>
            <div className="flex justify-between">
              <h3>챌린지 이름 1</h3>
              <span>👍🏻 100</span>
            </div>
          </li>
          <li className="flex-1">
            <div className="border border-neutral-900 h-60">이미지 2</div>
            <div className="flex justify-between">
              <h3>챌린지 이름 2</h3>
              <span>👍🏻 95</span>
            </div>
          </li>
          <li className="flex-1">
            <div className="border border-neutral-900 h-60">이미지 3</div>
            <div className="flex justify-between">
              <h3>챌린지 이름 3</h3>
              <span>👍🏻 67</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeContent;
