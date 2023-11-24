import React from 'react'
import {motion} from "framer-motion"
const Links = () => {
  // const variants = {
  //   open: {
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //     close: {
  //       transition: {
  //         staggerChildren: 0.05,
  //         staggerDirection: -1,
  //       },
  //     },
  //   },
  // };
  // const itemVariants = {
  //   open: {
  //     transition: {
  //       y: 0,
  //       opacity: 1,
  //     },
  //     close: {
  //       transition: {
  //         y: 50,
  //         opacity: 0,
  //       },
  //     },
  //   },
  // };
  const items = ["homepage", "services","portfolio","contact","about",];
  return (
    <div className='links' >
      {items.map(item=>
      <a href={`#${item}`} >{item}</a>
      )}
    </div>
  )
}

export default Links
