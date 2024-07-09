import React from 'react';
import './contact.css';
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="heading">
            <h2>Contact</h2>
            </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact At</h2>
          <p>For any inquiries or questions, please email me at:</p>
          <p><strong>Email  <SiMinutemailer/> : </strong> selvavigneshvijayan1405@gmail.com</p>
          <p><strong>Phone  <FaPhoneAlt/> : </strong> +91 9994545284</p>
          <p><strong>Address  <FaMapLocationDot/> : </strong> 28 Ganapathy, Coimbatore, India</p>
        </div>
        <div className="contact-form-container">
          {/* <h2>Contact</h2> */}
          <form className="contact-form">
            <div className="form-group">
              {/* <label htmlFor="name">Your Name</label> */}
              <span className="input-icon">
                                <FaUserCircle />
                            </span>
               <input type="text" id="email" name="email" placeholder="Your Name" required />
                <br></br>
                <br></br>
                <br></br>
              {/* <label htmlFor="email">Your Email</label> */}
              <span className="input-icon">
                                <MdMarkEmailUnread />
                            </span>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
          <p className="instruction">Further instructions will be sent to your email with a questionnaire to fill out.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
