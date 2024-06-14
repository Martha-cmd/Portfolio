import React, { useState } from 'react'

const Works = () => {
   const [ activeTab, setActiveTab ] = useState("mobile");

   const renderContext = () => {
        switch (activeTab) {
            case "mobile": 
                return (
                  <div className='spaceBtwItems w-full lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:justify-center items-center gap-10 lg:gap-3'>
                    <div className='mt-5 w-full'>
                      <div className='md:w-72 w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex'></div>
                      <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Music Streaming App
                        <p className='text-sm font-regular grey'>A music streaming and subscription based app</p>
                      </div>
                    </div>
                    <div className='mt-5 w-full'>
                      <div className='md:w-72 w-full h-40 bg-green-600 rounded-tr-lg rounded-tl-lg flex'></div>
                      <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Food Delivery App
                        <p className='text-sm font-regular grey'>A food delivery app that connects customers, restaurants and riders</p>
                      </div>
                    </div>
                    <div className='mt-5 w-full'>
                      <div className='md:w-72 w-full h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex'></div>
                      <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Online Course App
                        <p className='text-sm font-regular grey'>An online course app for a Fashion Academy</p>
                      </div>
                    </div>
                  </div>
                );
                case 'web':
                      return (
                        <div className='spaceBtwItems w-full lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:justify-center items-center gap-10 lg:gap-3'>
                          <div className='mt-5 w-full'>
                            <div className='md:w-72 w-full h-40 bg-red-600 rounded-tr-lg rounded-tl-lg flex'></div>
                            <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              E-commerce Website
                              <p className='text-sm font-regular grey'>A comprehensive e-commerce platform for various products</p>
                            </div>
                          </div>
                          <div className='mt-5 w-full'>
                            <div className='md:w-72 w-full h-40 bg-yellow-600 rounded-tr-lg rounded-tl-lg flex'></div>
                            <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              Portfolio Website
                              <p className='text-sm font-regular grey'>A personal portfolio website showcasing projects and skills</p>
                            </div>
                          </div>

                          <div className='mt-5 w-full'>
                            <div className='md:w-72 w-full h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex'></div>
                            <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              Portfolio Website
                              <p className='text-sm font-regular grey'>A personal portfolio website showcasing projects and skills</p>
                            </div>
                          </div>
                        </div>
                      );
                  case 'uiux':
                    return (
                      <div className='spaceBtwItems w-full lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:justify-center items-center gap-10 lg:gap-3'>
                        <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-pink-600 rounded-tr-lg rounded-tl-lg flex'></div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            Travel App Design
                            <p className='text-sm font-regular grey'>A user-centric travel app design with intuitive navigation</p>
                          </div>
                        </div>
                        <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-teal-600 rounded-tr-lg rounded-tl-lg flex'></div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            E-commerce UI Kit
                            <p className='text-sm font-regular grey'>A complete UI kit for e-commerce applications</p>
                          </div>
                        </div>
                        <div className='mt-5 w-full'>
                          <div className='md:w-72 w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex'></div>
                          <div className='md:w-72 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            E-commerce UI Kit
                            <p className='text-sm font-regular grey'>A complete UI kit for e-commerce applications</p>
                          </div>
                        </div>
                      
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