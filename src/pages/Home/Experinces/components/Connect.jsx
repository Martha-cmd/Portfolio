import React from 'react'
import { FaDribbble, FaLinkedin, FaGithub, FaWhatsapp, FaHandshakeSimple } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const Connect = () => {
  return (
    <>
         <div className='bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-5 pb-5 px-8 lightgrey lg:w-fit w-full flex flex-col justify-between'>

            <div>
                        {/* Header */}
                        <p className='text-lg font-medium'>Connect</p>

                        <div className='mt-8 flex flex-col gap-8'>
                            <div className='w-full flex items-center gap-5 lightgrey'>
                                <FaDribbble size={18}/>

                                <a href="https://dribbble.com/marthadev" target='_blank'
                                rel='noopener noreferrer'>
                                <p className='font-light lightgrey text-[14px]'>Dribbble</p>
                                </a>
                            </div>   

                                <div className='w-full flex items-center gap-5 lightgrey'>
                                <FaLinkedin size={18}/>
                                <a href="https://www.linkedin.com/in/marthaln/" target='_blank'
                                rel='noopener noreferrer'>
                                <p className='font-light text-[14px] lightgrey'>LinkedIn</p>
                                </a>
                                </div>

                                <div className='w-full flex items-center gap-5 lightgrey'>
                                <FaGithub size={18}/>

                                <a href="https://github.com/Martha-cmd" target='_blank'
                                rel='noopener noreferrer'>
                                <p className='font-light text-[14px] lightgrey'>GitHub</p>
                                </a>
                                </div>

                                {/* <div className='w-full flex items-center gap-5 lightgrey'>
                                <FaWhatsapp size={18}/>
                                <p className='font-light text-[14px] lightgrey'>Whatsapp</p>
                                </div> */}


                        </div>
            </div>

             <div>
                    <div className='w-full h-[0.5px] border-[0.2px] border-[#363636]'></div>
                    <div className='mt-5 flex gap-5 items-center'>
                        <div className='bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 w-fit py-1 px-1 h-fit'>
                             <FaHandshakeSimple size={27}/>
                        </div>
                        <div className='flex flex-col'>
                               <p className='font-light grey text-[12px]'>Available for work</p>
                               <div className='flex items-center gap-2 font-light grey text-[12px]'>Send Email <GoArrowRight /></div>
                               <p className='font-light text-[14px]'>techma397@gmail.com</p>
                        </div>
                    </div>
             </div>
             
        </div>

               
    </>
  )
}

export default Connect