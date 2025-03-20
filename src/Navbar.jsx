import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false)

  const navLinks = ['Home', 'Artist', 'Platform', 'Shows', 'Contact'].map((item, index) => (
    isOpen ?
      <a href='/' key={index}><li className=' hover:cursor-pointer font-semibold active:bg-[#101C3B] w-full text-center p-3'>{item}</li></a> :
      <li key={index} className='hover:cursor-pointer hover:font-bold w-30'>{item}</li>
  ))
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className='text-white h-18 sm:h-25 flex sm:justify-around justify-between items-center px-2 sm:px-0'>
      <div className='flex gap-3 sm:gap-8'>
        <div className='font-[Cute_Font] text-3xl sm:text-5xl'>mod.<span className='text-xl sm:text-3xl'>music</span></div>
        <div className=' flex items-center justify-center group relative'>
          <div className='bg-black opacity-30 sm:px-9 sm:py-6 px-7 py-5 rounded-full group-hover:bg-white group-hover:opacity-100 sm:group-active:px-40 group-active:px-25 absolute left-0'></div>
          <svg className='absolute sm:left-5 left-4 fill-white group-hover:fill-[#0036C2] sm:w-8 w-6' viewBox="0 0 34 34" fill="" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.9333 33.5L19.3833 21.95C18.4667 22.6833 17.4125 23.2639 16.2208 23.6917C15.0292 24.1194 13.7611 24.3333 12.4167 24.3333C9.08611 24.3333 6.26767 23.1796 3.96133 20.872C1.655 18.5644 0.501223 15.746 0.500001 12.4167C0.498779 9.08733 1.65256 6.26889 3.96133 3.96133C6.27011 1.65378 9.08856 0.5 12.4167 0.5C15.7448 0.5 18.5638 1.65378 20.8738 3.96133C23.1838 6.26889 24.337 9.08733 24.3333 12.4167C24.3333 13.7611 24.1194 15.0292 23.6917 16.2208C23.2639 17.4125 22.6833 18.4667 21.95 19.3833L33.5 30.9333L30.9333 33.5ZM12.4167 20.6667C14.7083 20.6667 16.6566 19.8649 18.2613 18.2613C19.8661 16.6578 20.6679 14.7096 20.6667 12.4167C20.6654 10.1238 19.8637 8.17617 18.2613 6.57383C16.659 4.9715 14.7108 4.16911 12.4167 4.16667C10.1226 4.16422 8.17495 4.96661 6.57383 6.57383C4.97272 8.18106 4.17033 10.1287 4.16667 12.4167C4.163 14.7047 4.96539 16.6529 6.57383 18.2613C8.18228 19.8698 10.1299 20.6716 12.4167 20.6667Z" />
          </svg>
        </div>
      </div>
      <div className='sm:block hidden'>
        <ul className='font-[Poppins] flex'>
          {navLinks}
        </ul>
      </div>
      <div className='sm:hidden block'>
        <motion.img
          key={isOpen} // Forces re-animation on state change
          src={isOpen ? "x.svg" : "./menu.svg"}
          alt="Menu"
          className={`block sm:hidden ${isOpen ? "w-5" : "w-8"} cursor-pointer`}
          onClick={() => setisOpen(!isOpen)}
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: isOpen ? 90 : 0, scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}

        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-20 left-0 w-full  bg-[#101C3B]/60 backdrop-blur-lg z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}


            >
              <ul className="flex flex-col">{navLinks}</ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar