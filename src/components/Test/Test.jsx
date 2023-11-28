import React from 'react'
import "./test.scss"

import {motion} from "framer-motion"
const Test = () => {

  const variants={
    initial:{
      x:-500,
      opacity:0.3

    },
    animate:{
      x:100,
      opacity:1,
      y:100,
      transition:{
        duration:1,
        staggerChildren:0.5,

      }
    }
  }

  const itemVariants={
    initial:{
    y:-100,
    opacity:0,
    }
,
    animate:{
      y:0,
      opacity:1,
      transition:{
        
        
      }
    }
  }

  return (
    <motion.div className='test' variants={variants} initial="initial" animate="animate">
    <motion.div className='children' variants={itemVariants}></motion.div>
    <motion.div className='children' variants={itemVariants}></motion.div>
    <motion.div className='children' variants={itemVariants}></motion.div>
      
    </motion.div>
  )
}

export default Test
