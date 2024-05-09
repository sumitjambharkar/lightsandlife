"use client";
import { useState } from "react";
import "./Contact.css";
import config from "../../config";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const result  = await axios.post(`${config}/api/contact`, {
        name: formData.Name,
        number: formData.Email,
        message: formData.Message,
      });
      Swal.fire({
        title: `Enquiry Send Successfully`,
        text: "You clicked the button!",
        icon: "success"
      });
      setFormData({Name: "",
      Email: "",
      Message: ""})
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };

  return (
    <div class="contact_w3agile" id="contact">
      <div class="container wow fadeInUp animated animated">
        <h3 class="title-w3">Contact Us</h3>

        <form onSubmit={sendData}>
          <div className="input_form">
            <input
              value={formData.Name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Name"
              name="Name"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="Message"
            placeholder="Message"
            value={formData.Message}
            onChange={handleChange}
            required
          ></textarea>
          <div class="con-form text-center">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
