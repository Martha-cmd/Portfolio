import React, { useState } from 'react'
import KeduApp from '../../assets/images/Kedu.png'
import FoodieApp from '../../assets/images/Group 1.png'
import SWIJApp from '../../assets/images/Group 1-2.png'
import SaintBridges from '../../assets/images/Screenshot 2024-06-14 at 11.08.26 PM.png'
import FoodieSite from '../../assets/images/Frame 255.png'
import SpearAca from '../../assets/images/Frame 49.png'
import HS from '../../assets/images/Frame 5.png'
import { FaHeadphones } from "react-icons/fa";
import { MdOutlineElectricBike, MdPayments } from "react-icons/md";
import { Link } from 'react-router-dom'


const Works = () => {
   const [ activeTab, setActiveTab ] = useState("mobile");

   const renderContext = () => {
        switch (activeTab) {
            case "mobile": 
                return (
                  <div className='spaceBtwItems w-full lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:justify-center items-center gap-10 lg:gap-3'>

                    
                    <Link to="/kedu" className='mt-5 w-full'>

                      <div className='md:w-72 w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex px-10 items-center justify-center gap-5'>
                           <img src={ KeduApp } alt="music-streaming" className='w-16 h-32'/>
                           <FaHeadphones className='' size={30}/>
                      </div>
                      <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Music Streaming App
                        <p className='text-sm font-regular grey'>A music streaming and subscription based app</p>
                      </div>
                    </Link>

                    <Link to='/foodie' className='mt-5 w-full'>
                      <div className='md:w-72 w-full h-40 bg-orange-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center'>
                                   <img src={ FoodieApp } alt="music-streaming" className='w-32 h-42'/>

                      </div>
                      <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Food Delivery App
                        <p className='text-sm font-regular grey'>A food delivery app that connects customers, restaurants and riders</p>
                      </div>
                    </Link>

                    <Link to='/swifa' className='mt-5 w-full'>
                      <div className='md:w-72 w-full h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center'>
                                 <img src={ SWIJApp } alt="music-streaming" className='w-42 h-32'/>
                      </div>
                      <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Online Course App
                        <p className='text-sm font-regular grey'>An online course app for a Fashion Academy</p>
                      </div>
                    </Link>
                  </div>
                );
                case 'web':
                      return (
                        <div className='spaceBtwItems w-full lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col 
                        lg:justify-center items-center gap-10 lg:gap-3'>

                               <a href="https://7aintbridges.online"
                                target='_blank'
                                rel='noopener noreferrer'
                                >
                          <div className='mt-5 w-full'>
                            <div className='md:w-72 w-full lg:h-40 h-fit bg-black-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center'>
    
                                <img src={ SaintBridges } alt="7aintBridges" className='w-full'/>
                          
                            </div>
                            <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              E-commerce Website

                              <p className='text-sm font-regular grey'>
                                A newsletter sign up page for an ecommerce website
                                {/* A comprehensive e-commerce platform for various products */}
                                </p>

                            </div>
                          </div>
                          </a> 
                          <div className='mt-5 w-full'>
                            <div className='md:w-72 w-full lg:h-40 h-fit rounded-tr-lg rounded-tl-lg flex bg-gradient-to-tr from-[#FED8CE] to-[#FBA68F] justify-center'>
                                     <img src={ FoodieSite } alt="Foodie Landing Page" className='w-full'/>
                            </div>
                            <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              Food Delivery Landing Page
                              <p className='text-sm font-regular grey'>A food delivery landing page showcasing their services and app features</p>
                            </div>
                          </div>

                          
                          <a href="https://spear-academy.netlify.app"
                                target='_blank'
                                rel='noopener noreferrer'
                                >  
                          <div className='mt-5 w-full'>
                            <div className='md:w-72 w-full lg:h-40 h-fit bg-purple-600 rounded-tr-lg rounded-tl-lg flex'>
                               <img src={ SpearAca } alt="Foodie Landing Page" className='w-full'/>

                            </div>
                            <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              Coding School Website
                              <p className='text-sm font-regular grey'>
                                {/* A personal portfolio website showcasing projects and skills */}
                                A coding school website
                                </p>
                            </div>
                          </div>
                          </a>
                        </div>
                      );
                  case 'uiux':
                    return (
                      <div className='spaceBtwItems w-full lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:justify-center items-center gap-10 lg:gap-3'>
                        <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-pink-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1'>
                                      {/* <MdPayments size={55}/> */}
                                      <img src={ HS } alt="" className='w-10 '/>
                                      <p className='text-[1.5rem] font-black pt-5'>House of Satika</p>
                          </div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              E-commerce UI Kit  
                            <p className='text-sm font-regular grey'> A complete UI kit for e-commerce applications</p>
                          </div>
                        </div>

                        <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-teal-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-2'>

                                <MdOutlineElectricBike size={60}/>
                                 <p className='text-[2rem] font-black'>Foodie</p>
                    
                          </div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            Food Delivery App Design
                            <p className='text-sm font-regular grey'>A food delivery app that connects customers, restaurants and riders </p>
                          </div>
                        </div>

                        <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1'>
                                  <MdPayments size={50}/>
                                  <p className='text-[2rem] font-black pt-5'>Budify</p> 
                          </div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                           Budify
                            <p className='text-sm font-regular grey'>A finance app for budgeting goals and fulfilling bucket lists</p>
                          </div>
                        </div>

                        {/* <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1'>
                                  <MdPayments size={55}/>
                                  <p className='text-[2rem] font-black pt-5'>Budify</p> 
                          </div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            Travel App Design
                            <p className='text-sm font-regular grey'>A user-centric travel app design with intuitive navigation</p>
                          </div>
                        </div> */}
                      
                      </div>
                    );
                  default:
                    return null;
                }
                    }
        

  return (
    <>
        <section className='w-full lg:px-[180px] md:px-[50px] px-[20px]'>

                <main className='py-10 pb-16 md:px-10 px-5 bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 mt-32 flex flex-col items-center lg:w-fit w-full'>

                                    <p className='lightgrey cursor-pointer'>Works & Projects</p>

                                    <div className='w-full flex spaceBtwItems gap-10 justify-center cursor-pointer'>
                                        <p
                                          className={`grey md:text-base text-[13px] ${activeTab === 'mobile' && 'md:underline md:underline-offset-[1rem] decoration-purple-600 text-white'}`}
                                          onClick={() => setActiveTab('mobile')}
                                        >
                                          Mobile App projects
                                        </p>
                                        <p
                                          className={`grey md:text-base text-[13px] ${activeTab === 'web' && 'md:underline underline-offset-[1rem] decoration-purple-600 text-white'}`}
                                          onClick={() => setActiveTab('web')}
                                        >
                                          Web App projects
                                        </p>
                                        <p
                                          className={`grey md:text-base text-[13px] ${activeTab === 'uiux' && 'md:underline underline-offset-[1rem] decoration-purple-600 text-white'}`}
                                          onClick={() => setActiveTab('uiux')}
                                        >
                                          UI/UX Design projects
                                        </p>
                                    </div>

                                          
                                        {renderContext()}



                </main>
        </section>
    </>
  )
}

export default Works