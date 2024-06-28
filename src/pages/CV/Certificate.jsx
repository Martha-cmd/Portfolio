import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import Cert from '../../assets/Files/Schoolcert.jpg';
import CertDeet from '../../assets/Files/MARTHA AGU.pdf';


const Certificate = () => {
  return (
    <>
          <main className='w-full lg:px-[180px] md:px-[50px] scroll-px-20 mt-52 mb-20'>
           <p className='lightgrey font-bold text-5xl mb-4'>CV </p>
           <p className='grey font-light md:text-2xl text-lg'>Explore my professional journey and accomplishments, including my projects and key skills.</p>

           <div className='w-full h-full bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-20 px-20 lightgrey flex justify-center items-center mt-20'>


                      <div className='lg:w-72 h-full w-full rounded-tl-[30px] flex flex-col justify-center items-center'>
                            {/* <CiFileOn size={400} className=''/> */}

                            <img src={ Cert } alt="" />

                            <p>School Cert</p>

                            <a
                              href={Cert}
                              download
                              // className='flex items-center gap-2 font-light bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 px-3 py-3 lightgrey w-fit mt-10 hover:bg-gray-800'
                            >

                            
                            <button className='flex items-center gap-2 font-light bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 px-3 py-3 lightgrey w-fit mt-10 hover:bg-gray-800'>Download <MdOutlineFileDownload size={20}/></button>
                      </a>
                      </div>
           </div>

           <div className='w-full h-full bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-20 px-20 lightgrey flex justify-center items-center mt-20'>

            <div className='lg:w-72 h-full w-full rounded-tl-[30px] flex flex-col justify-center items-center'>
                {/* <CiFileOn size={400} className=''/> */}

                <iframe 
                            src={ CertDeet }
                            className="w-full h-full"
                            style={{ border: 'none', height: '400px' }}
                            title="Resume"
                            >
                            </iframe>

                            <p>Transript</p>

                <a
                    href={ CertDeet }
                    download
                    // className='flex items-center gap-2 font-light bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 px-3 py-3 lightgrey w-fit mt-10 hover:bg-gray-800'
                >

                
                <button className='flex items-center gap-2 font-light bg-gray-600 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 px-3 py-3 lightgrey w-fit mt-10 hover:bg-gray-800'>Download <MdOutlineFileDownload size={20}/></button>
            </a>
            </div>
</div>
    </main>
    </>
  )
}

export default Certificate