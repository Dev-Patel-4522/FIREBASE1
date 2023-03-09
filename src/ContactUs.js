import React from 'react'
import './Contact.css';
import contact from './Images/contact.jpg'



export default function ContactUs() {
  return (
    <div className="abc">
      <section
        class="text-gray-400    body-font "
        style={{ marginTop: "100px" }}
      >
        <img src={contact} alt="" style={{ marginTop: "-20px" }}></img>
        <div
          class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items justify-start relative"
          style={{ height: "700px", width: "1688px" }}
        >
          <iframes
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?q=harekrishna%20complex%3BBopal%3B%20380058&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            aria-label="harekrishna complex;Bopal; 380058"
          ></iframes>
        </div>
        <div
          class="container px-5 py-24 mx-auto flex"
          style={{ marginTop: "-300px" }}
        >
          <div class="lg:w-1/3 md:w-1/2 bg-black shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative ">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Shreenik Outreach
            </h2>
            <p class="leading-relaxed mb-5 text-white">
              4,5 Harikrishna Complex Opp.Sales India;Bopal;
              Ahmedabad,Gujarat-380058
            </p>
          </div>
        </div>

        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    For info shreenikoutreach queries email us on<br></br>{" "}
                    shreenikoutreach@shreenik.com
                  </h2>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    For licensing queries email us on<br></br>{" "}
                    licensing@shreenik.com
                  </h2>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    For marketing queries email us on<br></br>{" "}
                    marketing@shreenik.com
                  </h2>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg title-font font-medium mb-3">
                    For info distribution queries email us on<br></br>{" "}
                    distribution@shreenik.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <section class="text-gray-600 body-font relative">
                        <div class="absolute inset-0 bg-gray-300">
                        <iframe
                            width="100%"
                            height="100%"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            title="map"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469981.774074309!2d72.467649!3d23.033588000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9c02234b37%3A0x6498b64a5eeaebe5!2sHarekrishna%20Complex%2C%20Bopal%2C%20Ahmedabad%2C%20Gujarat%20380058%2C%20India!5e0!3m2!1sen!2sus!4v1678176615506!5m2!1sen!2sus"
                        ></iframe>
                        </div>
                        <div class="container px-5 py-24 mx-auto flex">
                        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                            Feedback
                            </h2>
                            <p class="leading-relaxed mb-5 text-gray-600">
                            Post-ironic portland shabby chic echo park, banjo fashion axe
                            </p>
                            <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            </div>
                            <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                            </div>
                            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                            </button>
                            <p class="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled brook viral
                            artisan.
                            </p>
                        </div>
                        </div>
                    </section> */}

        {/* <div >
    
   <div class="lg:w-1/3 md:w-1/2  shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full  mt-auto md:mt-0 relative " >
      <h2 class="text-white text-lg mb-1 font-medium title-font">Shreenik Outreach</h2>
      <p class="leading-relaxed mb-5 text-white"></p>
       
    </div>
    <div class="lg:w-1/3 md:w-1/2  shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative " style={{marginRight:"250px",marginTop:"-120px"}}>
      <h2 class="text-white text-lg mb-1 font-medium title-font">Shreenik Outreach</h2>
      <p class="leading-relaxed mb-5 text-white"></p>
       
    </div>
    <div class="lg:w-1/3 md:w-1/2  shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative " style={{marginRight:"900px",marginTop:"50px"}}>
      <h2 class="text-white text-lg mb-1 font-medium title-font">Shreenik Outreach</h2>
      <p class="leading-relaxed mb-5 text-white"></p>
       
    </div>
    <div class="lg:w-1/3 md:w-1/2  shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative " style={{marginRight:"250px",marginTop:"-115px"}}>
      <h2 class="text-white text-lg mb-1 font-medium title-font">Shreenik Outreach</h2>
      <p class="leading-relaxed mb-5 text-white"></p>
       
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
   */}
      </section>

      {/* <div>
    <br></br>
    <br></br>
    <br></br>
    
    
        <h1 style={{textAlign:"center",fontSize:"xxx-large",color:"khaki",marginTop:"80px"}}>Contact Us</h1>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap" style={{marginLeft:"100px"}}>
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items justify-start relative">
    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=harekrishna%20complex%3BBopal%3B%20380058&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label="harekrishna complex;Bopal; 380058"></iframe>
      
    </div>
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md"style={{marginTop:"0px",marginLeft :" 50px"}}>
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">4,5 Harikrishna Complex Opp.Sales India;Bopal;<br></br>
                         Ahmedabad,Gujarat-380058</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">distribution@shreenik.com</a><br></br>
          <a class="text-indigo-500 leading-relaxed">marketing@shreenik.com</a><br></br>
          <a class="text-indigo-500 leading-relaxed">icensing@shreenik.com</a><br></br>
          <a class="text-indigo-500 leading-relaxed">shreenikoutreach@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">Mr. Vishal Bhatt :     09408485145 / 09978651091</p>
          <p class="leading-relaxed">Mr. Miral Shah :         09408289703 / 08849599389</p>

        </div>
      </div>

  </div>
</section>
    </div> */}
    </div>
  );
}




