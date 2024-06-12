import React from 'react'
import { GoPerson } from "react-icons/go";
import { FiMonitor, FiFile } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
         <main className='w-full flex justify-center cursor-pointer'>
 
 <div className='w-[26.5rem] h-20 px-5 py-5 bg-grey rounded-[50px] flex items-center gap-4 justify-center'>
             {/* Nav with buttons */}
         <div className='flex justify-center gap-5'>
                     <Link to='/' className='flex flex-col items-center justify-center'>
                             <div className='w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center text-[27px]'>
                               👩‍💻
                             </div>
                             <p className='grey text-[12px]'>Home</p>
                     </Link>

                     <Link to="/about" className='flex flex-col items-center justify-center'>
                             <div className='w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center'>
                                 <GoPerson />
                             </div>
                             <p className='grey text-[12px]'>About Me</p>
                     </Link>

                     <Link to='/projects' className='flex flex-col items-center justify-center'>
                             <div className='w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center'>
                                 <FiMonitor />
                             </div>
                             <p className='grey text-[12px]'>Projects</p>
                     </Link>

                     <div className='flex flex-col items-center justify-center'>
                             <div className='w-10 h-10 bg-gray-950 rounded-full flex items-center justify-center'>
                                 <FiFile />
                             </div>
                             <p className='grey text-[12px]'>CV</p>
                     </div>
         </div>

         {/* Divider */}
         <div className='w-[0.5px] h-10 border-[0.5px] border-gray-700'></div>

         {/* Buttons */}
         <button className='py-2 px-3 bg-white text-black rounded-full font-medium'>
                 Hire me! 👋
         </button>
 </div>
</main>
    </>
  )
}

export default Nav