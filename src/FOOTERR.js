import React from "react";
import logo from "./Images/logo.jpeg";

function Footer (){
    return (
      <div>
        <footer class="text-gray-400 bg-black body-font">
          <div class="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <img
                src={logo}
                style={{ width: "200px", height: "130px", marginLeft: "-50px" }}
                alt=""
              ></img>

              <p
                class="mt-2 text-lg text-red-500"
                style={{ marginLeft: "-20px" }}
              >
                Shreenik Outreach
              </p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div
                class="lg:w-1/4 md:w-1/2 w-full px-4"
                style={{ marginLeft: "-80px" }}
              >
                <h2
                  class="title-font  text-white tracking-widest text-sm mb-3"
                  style={{ fontSize: "larger" }}
                >
                  Company
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-white hover:text-white" href="Home">
                      Home
                    </a>
                  </li>

                  <li>
                    <a class="text-white hover:text-white" href="Aboutus">
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white
             hover:text-white"
                      href="Distribution"
                    >
                      Distribution
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white
             hover:text-white"
                      href="Marketing"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white
             hover:text-white"
                      href="Licensing"
                    >
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white
             hover:text-white"
                      href="contactus"
                    >
                      contact us
                    </a>
                  </li>
                </nav>
              </div>
              <div
                class="lg:w-1/4 md:w-1/2 w-full  px-4"
                style={{ marginLeft: "600px" }}
              >
                <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                  Get In Touch
                </h2>
                <nav class="list-none mb-10">
                  <p class="mt-2 text-lg text-white">
                    4,5 Harikrishna Complex Opp.Sales India;Bopal
                    Ahmedabad,Gujarat-380058
                  </p>
                  <li>
                    <a href="/" class="text-white hover:text-white">
                      shreenikoutreach@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="/" class="text-white hover:text-white">
                      {" "}
                      +919978651091
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div class="bg-black-800 bg-opacity-75">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p
                class="text-white text-lg text-center "
                style={{ marginLeft: "520px" }}
              >
                Copyright © www.shreenik.com all rights reserved
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a href="%" class="text-white">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="%" class="ml-3 text-white">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="/" class="ml-3 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href="/" class="ml-3 text-white">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>

        {/* <footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
     
   
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white">First Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Second Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 bg-opacity-75">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-400 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-500 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer> */}
      </div>
    );
};

export default Footer;