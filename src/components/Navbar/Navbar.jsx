import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';
import HomeIcon from "@mui/icons-material/Home";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>

      <div className="wrapper">
        <motion.span className='left-icon'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Home
        </motion.span>
        <motion.div  
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="right-icons social"
        >
          <a href="#">
            <img src="/instagram.png"></img>
          </a>
          <a href="">
            <img src="/linkdin.png"></img>
          </a>
          <a href="">
            <img src="/email.png"></img>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar
