import React from 'react'
import { GoPerson } from "react-icons/go";
import { FiMonitor, FiFile } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Martha  from '../../assets/images/Apple_Memojis-portfolio.png'

const Nav = () => {
        return (
                <>
                        <main className='w-full flex justify-center cursor-pointer fixed mb-52 top-16 z-50 lg:px-0 px-[20px]'>

                                <div className='md:w-[26.5rem] w-fit h-20 px-5 py-5 bg-grey rounded-[50px] flex items-center md:gap-4 gap-3 justify-center'>

                                        {/* Nav with buttons */}
                                        <div className='flex justify-center md:gap-5 gap-3'>
                                                <Link to='/' className='flex flex-col items-center justify-center'>
                                                        <div className='md:w-10 w-7 md:h-10 h-7 bg-gray-950 rounded-full flex items-center justify-center'>
                                                                <img src={ Martha } alt="Martha" className='w-full'/>
                                                        </div>
                                                        <p className='grey text-[12px]'>Home</p>
                                                </Link>

                                                <Link to="/about" className='flex flex-col items-center justify-center'>
                                                        <div className='md:w-10 w-7 md:h-10 h-7 bg-gray-950 rounded-full flex items-center justify-center'>
                                                                <GoPerson />
                                                        </div>
                                                        <p className='grey text-[12px]'>About</p>
                                                </Link>

                                                <Link to='/projects' className='flex flex-col items-center justify-center'>
                                                        <div className='md:w-10 w-7 md:h-10 h-7 bg-gray-950 rounded-full flex items-center justify-center'>
                                                                <FiMonitor />
                                                        </div>
                                                        <p className='grey text-[12px]'>Projects</p>
                                                </Link>

                                                <Link to='/cv' className='flex flex-col items-center justify-center'>
                                                        <div className='md:w-10 w-7 md:h-10 h-7 bg-gray-950 rounded-full flex items-center justify-center'>
                                                                <FiFile />
                                                        </div>
                                                        <p className='grey text-[12px]'>CV</p>
                                                </Link>
                                        </div>

                                        {/* Divider */}
                                        <div className='w-[0.5px] h-10 border-[0.5px] border-gray-700'></div>

                                        {/* Buttons */}
                                        <button className='py-2 px-3 bg-white md:text-normal text-[12px] text-black rounded-full font-medium'>
                                                Hire me! 👋
                                        </button>
                                </div>
                        </main>
                </>
        )
}

export default Nav