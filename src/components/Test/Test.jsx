import React from 'react'
import "./test.scss"
import {motion} from "framer-motion"

const Test = () => {
  return (
    <motion.div
      className="test"
      initial={{ opacity: 0.5, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 2 }}
      transition={{ duration: 2 }}
      whileHover={{opacity:1,scale:2}}
      drag

    ></motion.div>
  );
}

export default Test
