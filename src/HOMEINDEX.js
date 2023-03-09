// import React, { useState,useCallback }  from 'react';
import TariSathe from './Images/TariSathe.jpg';
import LoveNiStory from './Images/LoveNiStory.jpg';
import babubhai from './Images/babubhai.jpg';
import aaron from "./Images/aaron.jpg";
import pani from "./Images/pani.jpg";
import firangi from "./Images/firangi.jpg";
import dahavi from "./Images/dahavi.jpg";
import shortcircuit from "./Images/shortcircuit.jpg";

import './App.css';

// import { Link } from "gatsby";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import Photolist from "./IMGDATA";

function HOMEINDEX() {
        
        // const IMAGES = useCallback((value) => {
        //   const Photolist = [...Photolist];
        //   Photolist.map((item, i) => {
        //     if (value.target.id === item.category) {
        //       item.active = true;
        //     } else {
        //       item.active = false;
        //     }
        //   });
        //   // setPhotolist(Photolist);
        // });
        

  return (
    <div>
      {/* Slideshow / Corusal Section */}

      {/* <div
        id="carouselExampleSlidesOnly"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img src={TariSathe} class="block w-full" alt="Wild Landscape" />
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div> */}

      <section class="mt-20">
        <div class="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={TariSathe}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={LoveNiStory}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={shortcircuit}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={babubhai}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={aaron}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={pani}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={dahavi}
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fill md:w-screen md:h-screen"
                src={firangi}
                alt="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Upcomming and Released Button Section */}

      {/* <div class="content-center">
        <button
          class="text-white content-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg "
          id="upcomming"
          onClick={(e) => IMAGES(e)}
        >
          UPCOMMING
        </button>
        <button
          class="text-white content-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg"
          id="relesed"
          onClick={(e) => IMAGES(e)}
        >
          RELESED
        </button>
      </div> */}
      <div>
        {/* {Photolist.map((item, i) => {
          return (
            <Link
              to={item.path}
              className={
                item.active ? "project-tile active" : "project-tile hidden"
              }
              key={i}
            >
              <div className="grid__cell">
                <img src={item.backgroundUrl} alt={item.title} />
                <div className="grid__cell__title">
                  <h4>{item.title}</h4>
                </div>
              </div>
            </Link>
          );
        })} */}
      </div>

      {/* Distribution Section */}

      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              style={{ fontSize: "xxx-large", color: "khaki" }}
            >
              Distribution
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={TariSathe}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={babubhai}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={dahavi}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={firangi}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={pani}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={aaron}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto mb-28 px-5 py-2 lg:px-32 lg:pt-12">
          <div class="flex flex-col text-center w-full mb-20">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-4 mt-10 text-gray-900"
              style={{ fontSize: "xxx-large", color: "khaki" }}
            >
              Marketing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={TariSathe}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={LoveNiStory}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={babubhai}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={shortcircuit}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={pani}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={dahavi}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
    </div>
  );
}

export default HOMEINDEX;
