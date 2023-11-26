import React, { useState } from "react";
import "./test.scss";
import { motion } from "framer-motion";

const Test = () => {
  const [animation ,setAnimation]=useState(false)

  const variants={
    hidden:{
      x:0,
      opacity:0.5
    },
    visible:{
      opacity:1,
      x:300,
      transition:{delay:1,duration:0.5}

    }
  }
  const itemVariants = {
    hidden: {
      x: 0,
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
      staggerChildren:1
    },
  };

  return (
    <>
      <motion.div
        onClick={() => setAnimation(!animation)}
        className="test"
        initial={{ x: 0, opacity: 0.1 }}
        animate={{
          x: animation ? 1000 : 0,
          opacity: animation ? 1 : 0.5,
          rotate: animation ? 360 : 0,
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="test"
        initial={{ x: 100, opacity: 0.5 }}
        animate={{
         x:200,
         staggerChildren:0.2
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.ul>
          <motion.li>1</motion.li>
          <motion.li>2</motion.li>
          <motion.li>3</motion.li>
        </motion.ul>
      </motion.div>

      <motion.div
        className="test"
        initial={{ x: 100 }}
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 0, 270, 270, 0],
        }}
        transition={{ duration: 5 }}
      ></motion.div>
      <motion.div
        className="test"
        initial={{ x: -200, opacity: 0.1 }}
        animate={{ x: 1000, opacity: 1 }}
      ></motion.div>

      <motion.div
        variants={itemVariants}
        className="test"
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((ele) => (
          <h4>{ele}</h4>
        ))}
      </motion.div>
    </>
  );
};

export default Test;
