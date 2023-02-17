import React from "react";
import { Link } from "react-router-dom";
import proto from "./Images/proto.jpg";
import "./Footer.css";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
const Footer = () => (
  <div className="footer">
    <div className="vl"></div>
    <div className="fo1">
      <p>
        "We are 360* Integrated Marketing,Digital Distribution and Production
        Company"
      </p>
    </div>
    <div className="row">
      <div className="col1">
        <h1>Company</h1>
        <p>
          <Link className="active" to="/">
            Home
          </Link>
          <Link className="active" to="/aboutus">
            About Us
          </Link>
          <Link className="active" to="/service">
            Services
          </Link>
          <Link className="active" to="/contactus">
            Contact us
          </Link>
        </p>
      </div>
      <div className="col2">
        <h1>Business</h1>
        <p>Projects</p>
      </div>
      <div className="col3">
        <h1>Get In Touch</h1>
        <p>
          <ImLocation /> 1108, Tivoli, Goderj Garden City,Ahmedabad
        </p>
        <p>
          <MdEmail /> Connect@Protonindia.in
        </p>
        <p>
          <AiFillPhone /> +916355004990
        </p>
        <p>
          <IoLogoWhatsapp /> +916355004990
        </p>
      </div>
    </div>

    <div className="fo2">
      <div className="row2">
        <img src={proto} alt="" />
        <p className="fa1">
          copyright @ 2023 proton India | All Rights Reserved
        </p>
        <p className="fa2">
          <p>
            <AiOutlineInstagram />
          </p>
          <p>
            {" "}
            <ImFacebook />
          </p>
          <p>
            <ImTwitter />
          </p>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
