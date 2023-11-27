import React from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      // delay:0.1
    },
  },
};
 


const Services = () => {
   
 
  return (
    <motion.div
      className="services"
      // variants={variants}
    >
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <p>
          I focus on helping your brand grow <br />
          and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="title">
          <img src="people.webp"></img>
          <h1>
            <b>Unique </b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For your </b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="box">
          <h2>Branding</h2>
          <p>
            lorem ipsum dolor fhas njkasdui fjdf lorem ipsum dolor fhas njkasdui
            fjdf
          </p>
          <button>GO</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            lorem ipsum dolor fhas njkasdui fjdf lorem ipsum dolor fhas njkasdui
            fjdf
          </p>
          <button>GO</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            lorem ipsum dolor fhas njkasdui fjdf lorem ipsum dolor fhas njkasdui
            fjdf
          </p>
          <button>GO</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            lorem ipsum dolor fhas njkasdui fjdf lorem ipsum dolor fhas njkasdui
            fjdf
          </p>
          <button>GO</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
