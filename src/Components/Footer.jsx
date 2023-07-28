import React from 'react'
import "./Footer.css"
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
    <div class="main-footer">
        <div className="quote">Together, let's paint a world filled with boundless opportunities and endless inspiration.</div>
          {/* <div className="footer-contact"><h4>Connect with me</h4></div> */}
          <div className="footer-links">
          <h4>Connect with me</h4>
            <Socials />
          </div>
          <p>© 2023 by Smriti Kumari</p>
        </div>
    </>
  )
}

export default Footer