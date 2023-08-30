import React from "react";
import "../style/GetInTouch.css";

export default function GetInTOuch() {
  return (
    <div className="container">
      <div className="get-in-touch">
        <div className="get-in-touch-text">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="contact">
          <div className="contact-info">
            <div className="info-item">
              <img id="img-1" alt="" src="./images/point.png" />
              <div>
                <h4>Address</h4>
                <p>236 5th SE Avenue,</p>
                <p>New York NY10000,</p>
                <p>United States</p>
              </div>
            </div>
            <div className="info-item">
              <img id="img-2" alt="" src="./images/bxs_phone.png" />
              <div>
                <h4>Phone</h4>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="info-item">
              <img id="img-3" alt="" src="./images/bi_clock-fill.png" />
              <div>
                <h4>Working Time</h4>
                <p>Monday-Friday: 9:00 - 22:00 </p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="contact-input">
            <div className="input-item">
              <p>Your name</p>
              <input placeholder="Abc" />
            </div>
            <div className="input-item">
              <p>Email address</p>
              <input placeholder="Abc@def.com" />
            </div>
            <div className="input-item">
              <p>Subject</p>
              <input placeholder="This is an optional" />
            </div>
            <div className="input-item">
              <p>Subject</p>
              <textarea placeholder="Hi! i’d like to ask about" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
