import React from 'react'
import { CiFileOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";

const Resume = () => {
  return (
    <>
    <main className='w-full lg:px-[180px] px-[50px] mt-52 mb-20'>
           <p className='lightgrey font-bold text-5xl mb-4'>CV </p>
           <p className='grey font-light md:text-2xl text-lg'>Explore my professional journey and accomplishments, including my projects and key skills.</p>

           <div className='w-full h-full bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-20 px-20 lightgrey flex justify-center items-center mt-20'>

                      <div className='w-72 h-80 rounded-tl-[30px] flex flex-col justify-center items-center'>
                            <CiFileOn size={400} className=''/>
                            <button className='px-5 py-3 bg-gray-800 border-[0.2px] border-gray-700 rounded-[10px] flex items-center justify-center gap-2 mt-10'>Download <MdOutlineFileDownload size={20}/></button>
                      </div>
           </div>
    </main>
</>
  )
}

export default Resume
