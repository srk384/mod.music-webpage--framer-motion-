import React from 'react'
import { motion } from 'motion/react'

const Home = () => {
  const features = [...Array(2)].map((_, index) => {
    return <>
      <img src="./feature1.svg" alt="" />
      <img src="./feature2.svg" alt="" />
    </>
  })

  const bgText1 = [...Array(5)].map((_, index) => <span key={index} className={`font-[Cute_Font] text-4xl sm:text-9xl pr-2 sm:pr-6 last:pr-0 opacity-20 ${index === 1 && "opacity-100"} p-0`}>A MODERN</span>)
  const bgText2 = [...Array(5)].map((_, index) => <span key={index} className={`font-[Cute_Font] text-4xl sm:text-9xl pr-2 sm:pr-6 last:pr-0 opacity-20 ${index === 1 && "opacity-100"} p-0`}>{index === 0 ? "USIC AGENCY" : "MUSIC AGENCY"}</span>)
  return (
    <div>
      <section className='text-white pt-35 sm:pt-40 relative pb-35 sm:pb-40'>
        <div className='w-screen overflow-hidden '>
          <div className='w-[3200px] h-10 sm:h-31'>
            {bgText1}
          </div>
        </div>
        <motion.img
          animate={{ y: [0, -50, 0], x: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeOut" }}
          src='./mic.svg' alt='' className='absolute sm:top-5 right-0 sm:left-1/2 w-76 sm:w-158 z-10'
        />
        <div className='w-screen overflow-hidden absolute z-20'>
          <div className='w-[3200px] h-15 sm:h-32'>
            {bgText2}
          </div>
        </div>
      </section>

      <section className='relative'>
        <button className='bg-white text-blue-800 sm:px-5 sm:py-3 sm:text-md px-3 py-2 text-sm font-bold rounded-md shadow-xl font-[poppins] absolute right-1/2 translate-x-1/2 -top-6 hover:text-white hover:bg-[#002FA8] cursor-pointer z-30 border-2'>Share your music</button>
      </section>

      <section className='py-15 sm:py-22 bg-[#002FA8] flex items-center overflow-hidden'>
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className='flex sm:gap-30 sm:w-100 w-50 gap-15'>
          {features}
          {features}
        </motion.div>
      </section>
      <section className='h-20 bg-[#101C3B] w-full absolute bottom-0 z-20'></section>
    </div>
  )
}

export default Home