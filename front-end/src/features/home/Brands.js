import React, { useRef } from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

const SlideContainer = () => {
  const slidesContainerRef = useRef(null);
  const slideWidth = slidesContainerRef.current?.querySelector('.slide')?.clientWidth;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNextClick = () => {
    slidesContainerRef.current.scrollLeft += slideWidth * 2;
  };

  const handlePrevClick = () => {
    slidesContainerRef.current.scrollLeft -= slideWidth * 2;
  };

  return (
    <div className="slide-container">
      <div className="shop-by-brand">
        <h1 className="section-title brands">Shop by Brands</h1>
        <div
          id="app"
          className="max-w-screen-lg mx-auto px-4 md:px-8 py-12 transition-all duration-500 ease-linear"
        >
          <div className="relative">
            <div
              ref={slidesContainerRef}
              className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
            >
              <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/samsung.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/apple.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/beatslogo.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/hp.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/lenevologo.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/logi.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/samsung.jpeg"
                    alt="mountain_image"
                  />
                </div>
                <div class="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    src="assets/imgs/sony.jpeg"
                    alt="mountain_image"
                  />
              </div>
              {/* Add more slides here */}
            </div>

            <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
              <button
                role="button"
                className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                aria-label="prev"
                onClick={handlePrevClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
              <button
                role="button"
                className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                aria-label="next"
                onClick={handleNextClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideContainer;
