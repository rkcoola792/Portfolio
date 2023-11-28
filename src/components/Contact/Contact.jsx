import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>
          Let's work <br></br>together
        </h1>
        <div className="item">
          <h2>Mail</h2>
          <span>rkcool@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Dwarka sec 1, New Delhi</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>8178102316</span>
        </div>
      </div>

      <div className="formContainer">
        <form action="">
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
