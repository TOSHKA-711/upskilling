import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import "./contactUs.css";

const ContactUs = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://upskilling-egypt.com:3000/contact";

    axios
      .post(url, payload)
      .then((res) => {
        console.log(res.data.message);
        // Clear form after successful submission
        setPayload({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch(() => {
        console.log("send failed");
      });
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="title">CONTACT US</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={payload.name}
              name="name"
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={payload.email}
              name="email"
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Phone Number"
              value={payload.phone}
              name="phone"
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <div className="links">
            <a href="#">
              <FaMessage className="icon" /> send ME
            </a>
            <a href="tel:+201021068752">
              <FaPhoneAlt className="icon" /> +201021068752
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
