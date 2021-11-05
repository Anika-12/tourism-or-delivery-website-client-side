import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
     <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>Online Food Services</h1>
                  <div className="icons-container d-flex text-center ">
                    <div className="icon">
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                  </div>
                  <p className="mt-4 ">
                    <small>
                    Online food servicing is the process of ordering food from a website or other application. 
                    The product can be either ready-to-eat food or food that has not been specially prepared for direction consumption.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>© 2021, All Right Reserved - by Anika</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                    <h2>Useful Links </h2>
                  <ul>
                    <li className="footer-menu">* About Us</li>
                    <li className="footer-menu">*Our Menues</li>
                    <li className="footer-menu">*Services</li>
                    <li className="footer-menu">*Foods</li>
                    <li className="footer-menu"> *Customers</li>
                    <li className="footer-menu"> *Privacy Policy</li>
                    <li className="footer-menu"> *FAQ</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3><FontAwesomeIcon icon={faTwitterSquare} />Looking For Ordering Food?</h3>
                 
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="foter-phone-icon">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div>
                      <h5>(+6) 23 555 0892<br></br>
                          05-753-4437</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div>
                      <p>
                      Contact us for all questions and thinks those. We will proud to you
                      </p>
                      <br></br>
                      <button className="btn btn-dark">Get Contact & Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
