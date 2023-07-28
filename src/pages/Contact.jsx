import React from "react";
import './Contact.css';
import Socials from "../Components/Socials";

const Contact = () => {
  return (
    <div className="main-contact">
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <div class="container">
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>

            <div class="social-media">
              <p>Connect with me :</p>
              <div class="social-icons">
              <Socials/>
              </div>
            </div>
          </div>
          <div class="contact-info-form">
            {" "}
            <span class="circle one"></span> <span class="circle two"></span>
            <form action="https://formspree.io/f/xpzeevnd" method="POST">
              <h3 class="title">Contact me</h3>
              <div class="social-input-containers">
                {" "}
                <input placeholder="Name" type="text" name="name" class="input"  required />{" "}
                <label for=""></label> {" "}
              </div>
              <div class="social-input-containers">
                {" "}
                <input placeholder="Email" type="email" name="email" class="input"  required />{" "}
                <label for=""></label> {" "}
              </div>
              <div class="social-input-containers textarea">
                {" "}
                <textarea placeholder="Message" name="message" class="input"  required ></textarea>{" "}
                <label></label>{" "}
              </div>{" "}
              <input type="submit" value="Send" class="contact-btn" />
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Contact;
