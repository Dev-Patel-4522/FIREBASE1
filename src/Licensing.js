import React from 'react'
import netflix1 from "./Images/netflix1.jpg";
import amazon from "./Images/amazon.jpg";
import mx from "./Images/mx.jpg";
import zee from "./Images/zee.jpg";
import colors2 from "./Images/colors.jpg";
import alt from "./Images/alt.jpg";
import shero from "./Images/shero.jpg";
import eros from "./Images/eros.jpg";


function Licensing() {
  return (
    <div>
        <section class="text-white body-font ">
  <div class="container px-5 py-24 mx-auto">
  <br></br>
    <br></br>
    <br></br>
    
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"style={{fontSize:"xxx-large",color:"khaki"}}>Content Licensing</h1><br></br><br></br><br></br>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80"style={{fontSize:"larger"}}>Rights pre-sale / Post sale are an important factor in enhancing revenue predictability for film business and are a vital part of diversification strategy to secure revenue visibility for film producers and financers. We bring production houses and acquisitions companies on common platform. We act as  consultancy service for acquiring or selling TV rights, audio rights, VOD other available options include Satellite rights, Cable TV Rights and IPTV Rights etc. of content belonging to a wide array of genres and formats.</p>
     <br></br><br></br>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80"style={{fontSize:"larger"}}>We are strategically aligned with major film, television and Internet platform brands such as, Zee TV, Ultra, Eros International, Vision Music, Venus, T- series, Shemaroo, Viacom, Colors, Sony, Netflix, Amazon Prime, Balaji Alt etc for licensing, acquiring and selling rights.</p>
    </div>

    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <img style={{marginLeft:"60px"}} src={netflix1} alt=""></img>  
        </div>
      </div>

      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"60px"}} src={amazon} alt=""></img>
        </div>
      </div>

      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"0px",marginTop:"30px",marginBottom:"30px"}} src={mx} alt=""></img>
        </div>
      </div>

      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"60px"}} src={zee} alt=""></img>
        </div>
      </div>

      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"60px", height:"168px", width:"300px"}} src={colors2} alt=""></img>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"60px", height:"168px", width:"300px"}} src={alt} alt=""></img>
        </div>
      </div>

      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"60px", height:"168px", width:"300px"}} src={shero} alt=""></img>
        </div>
      </div>

      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
        <img style={{marginLeft:"60px", height:"168px", width:"300px"}} src={eros} alt=""></img>
        </div>
      </div>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Licensing

