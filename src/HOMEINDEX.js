// import React, { useState,useEffect }  from 'react';
import TariSathe from './Images/TariSathe.jpg';
import LoveNiStory from './Images/LoveNiStory.jpg';
import babubhai from './Images/babubhai.jpg';
import aaron from "./Images/aaron.jpg";
import pani from "./Images/pani.jpg";
import firangi from "./Images/firangi.jpg";
import dahavi from "./Images/dahavi.jpg";
import shortcircuit from "./Images/shortcircuit.jpg";
import anokhee from "./Images/anokhee.jpg";
import fairlady from "./Images/fairlady.jpg";
import fikarnot from "./Images/fikarnot.jpg";
import SHANNISHAN from "./Images/SHANNISHAN.jpg";
import category from "./IMGDATA.js";
import './App.css';

// import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function HOMEINDEX() {

    let imageGallery = [
      { src: { anokhee }, title: "img1" },
      { src: { fairlady }, title: "img2" },
      { src: { fikarnot }, title: "img3" },
      { src: { SHANNISHAN }, title: "img4" },
    ];
  // const [tages, setTages] = useState("all");
  // const [filteredImages, setFilteredImages] = useState([]);

  // useEffect(() => {
  //   tages === "all"
  //     ? setFilteredImages(Photolist)
  //     : setFilteredImages(Photolist.filter((Photolist) => Photolist.tages === tages));
  // }, [tages]);

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
                class="object-fill  md:w-screen md:h-screen"
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
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div>
            {imageGallery.map((images) => (
              <img
                src={images.src}
                title={images.title}
                alt="Images"
                class="inline-grid content-center h-52 w-52"
              />
            ))}
          </div>
          {/* <div>
            <TagButton
              name="upcomming"
              tagActive={tages === "upcomming" ? true : false}
              handleSetTag={setTages}
            />
            <TagButton
              name="relesed"
              tagActive={tages === "relesed" ? true : false}
              handleSetTag={setTages}
            />
          </div>

          <div>
            {filteredImages.map((Photolist) => (
              <div key={Photolist.id}>
                <a href={`/Images/${Photolist.imageName}`}>
                  <img src={`/Images/${Photolist.imageName}`} alt="/" />
                </a>
              </div>
            ))}
            </div>*/}
        </div>

        {category.map((values) => {
          return (
            <div className="img">
              <div className="image">
                <img src={values.imgs} alt="" />
                <h3>{values.text}</h3>
                <h3>{values.price}</h3>
              </div>
            </div>
          );
        })}
      </section>

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

// const TagButton = ({ name, handleSetTag, tagActive }) => {
//   return (
//     <button
//       class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       className={`tag ${tagActive ? "active" : null}`}
//       onClick={() => handleSetTag(name)}
//     >
//       {name.toUpperCase()}
//     </button>
//   );
// };

export default HOMEINDEX;
