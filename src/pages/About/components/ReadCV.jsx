import React from 'react'
import { ImProfile } from "react-icons/im";
import { GoArrowUpRight } from "react-icons/go";


const ReadCV = () => {
  return (
    <>
       <div className='bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-5 pb-5 px-5 lightgrey w-full flex flex-col justify-between'>
             
       <p className='text-lg font-medium'>Resume</p>

       
              <div className='w-full flex justify-center mt-5'>
                   <ImProfile size={150} stroke='3' className='grey'/>
              </div>


       <div className='text-[12.5px] flex items-center gap-2 font-light bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 px-3 py-3 lightgrey w-fit mt-5'>View Resume <GoArrowUpRight size={18}/></div>

       </div>
    </>
  )
}

export default ReadCV