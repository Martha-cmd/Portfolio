import React, { useState } from 'react'

const Works = () => {
   const [ activeTab, setActiveTab ] = useState("mobile");

   const renderContext = () => {
        switch (activeTab) {
            case "mobile": 
                return (
                  <div className='spaceBtwItems w-full flex justify-between'>
                    <div className='mt-5'>
                      <div className='w-72 h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex'></div>
                      <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Music Streaming App
                        <p className='text-sm font-regular grey'>A music streaming and subscription based app</p>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='w-72 h-40 bg-green-600 rounded-tr-lg rounded-tl-lg flex'></div>
                      <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Food Delivery App
                        <p className='text-sm font-regular grey'>A food delivery app that connects customers, restaurants and riders</p>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <div className='w-72 h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex'></div>
                      <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                        Online Course App
                        <p className='text-sm font-regular grey'>An online course app for a Fashion Academy</p>
                      </div>
                    </div>
                  </div>
                );
                case 'web':
                      return (
                        <div className='spaceBtwItems w-full flex justify-between'>
                          <div className='mt-5'>
                            <div className='w-72 h-40 bg-red-600 rounded-tr-lg rounded-tl-lg flex'></div>
                            <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              E-commerce Website
                              <p className='text-sm font-regular grey'>A comprehensive e-commerce platform for various products</p>
                            </div>
                          </div>
                          <div className='mt-5'>
                            <div className='w-72 h-40 bg-yellow-600 rounded-tr-lg rounded-tl-lg flex'></div>
                            <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              Portfolio Website
                              <p className='text-sm font-regular grey'>A personal portfolio website showcasing projects and skills</p>
                            </div>
                          </div>

                          <div className='mt-5'>
                            <div className='w-72 h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex'></div>
                            <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                              Portfolio Website
                              <p className='text-sm font-regular grey'>A personal portfolio website showcasing projects and skills</p>
                            </div>
                          </div>
                        </div>
                      );
                  case 'uiux':
                    return (
                      <div className='spaceBtwItems w-full flex justify-between'>
                        <div className='mt-5'>
                          <div className='w-72 h-40 bg-pink-600 rounded-tr-lg rounded-tl-lg flex'></div>
                          <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            Travel App Design
                            <p className='text-sm font-regular grey'>A user-centric travel app design with intuitive navigation</p>
                          </div>
                        </div>
                        <div className='mt-5'>
                          <div className='w-72 h-40 bg-teal-600 rounded-tr-lg rounded-tl-lg flex'></div>
                          <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
                            E-commerce UI Kit
                            <p className='text-sm font-regular grey'>A complete UI kit for e-commerce applications</p>
                          </div>
                        </div>
                        <div className='mt-5'>
                          <div className='w-72 h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex'></div>
                          <div className='w-72 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2'>
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
         <main className='py-10 pb-16 px-10 bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 mt-32 w-full flex flex-col items-center'>

              <p className='lightgrey cursor-pointer'>Works & Projects</p>

              <div className='w-full flex spaceBtwItems gap-10 justify-center cursor-pointer'>
                  <p
                    className={`grey ${activeTab === 'mobile' && 'underline underline-offset-[1rem] decoration-purple-600 text-white'}`}
                    onClick={() => setActiveTab('mobile')}
                  >
                    Mobile App projects
                  </p>
                  <p
                    className={`grey ${activeTab === 'web' && 'underline underline-offset-[1rem] decoration-purple-600 text-white'}`}
                    onClick={() => setActiveTab('web')}
                  >
                    Web App projects
                  </p>
                  <p
                    className={`grey ${activeTab === 'uiux' && 'underline underline-offset-[1rem] decoration-purple-600 '}`}
                    onClick={() => setActiveTab('uiux')}
                  >
                    UI/UX projects
                  </p>
             </div>

                    
                   {renderContext()}



         </main>
    </>
  )
}

export default Works