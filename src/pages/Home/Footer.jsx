import React from 'react'
import { TiStarburst } from "react-icons/ti";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  return (
    <>
         <main className='w-full lg:px-[180px] md:px-[50px] px-[20px]'>

              <div className='bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-16 md:px-16 px-8 flex flex-col items-center min-w-full'>

                   <p className='font-bold text-2xl'>Got a vision for your next big project? Let's build it together!</p>

                      <div className='flex md:flex-row flex-col items-center gap-[0.5px] font-light text-[14px] mt-3'>Reach out let's make it happen <HiSparkles className='lightgrey' size={13}/>. <p className='pl-1 grey'>I am also available for full time and part time opportunities.</p></div>

                      <button className='bg-gradient-to-b from-fuchsia-500 to-violet-500 py-2 px-3 rounded-full font-medium mt-10'>Contact me 🤩</button>
              </div>
  

         </main>
    </>
  )
}

export default Footer