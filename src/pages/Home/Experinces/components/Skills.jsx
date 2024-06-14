import React from 'react'
import Figma from '../../../../assets/images/7564187_figma_logo_brand_icon.png'
import JS from '../../../../assets/images/481ddfbb55fe64d824c1ee706c2afd3f.png'
import Java from '../../../../assets/images/24effd1102d26e7528b41425d8e2fd7c.png'
import ReactImg from '../../../../assets/images/iconreact.png'
import Flutter from '../../../../assets/images/pngwing.com.png'
import Firebase from '../../../../assets/images/1175532_developer_firebase_google_coding_programming_icon.png'
import AWS from '../../../../assets/images/pngwing.com-2.png'


const Skills = () => {
    const skills = [
        "UI/UX Design", "Web Development", "Mobile Development", "Design System", "Database Management", "Front-End Development", "Back-End Development"
   ]
  return (
    <>

        {/* Skills */}
        <div className='lg:w-96 w-full min-h-full flex flex-col gap-3'>
                    <div className='bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-5 pb-10 px-8 lightgrey w-full h-full'>
                            <p className='text-lg font-medium'>Skills & Expertise</p>

                            <div className='mt-8 w-full flex flex-wrap gap-2'>
                                <div className='scrolling-container'>
                                    <div className='scrolling-content'>
                                            {skills.map((skill, index) => (
                                                    <div key={index} className='skill-badge'>{skill}</div>
                                            ))}
                                            {skills.map((skill, index) => (
                                                <div key={`${index}-duplicate`} className='skill-badge'>{skill}</div>
                                            ))}
                                    </div>
                                </div>
                            </div>

                            <div className='scrolling-container mt-2'>
                                    <div className='scrolling-content reverse-scroll'>
                                            {skills.map((skill, index) => (
                                                    <div key={index} className='skill-badge'>{skill}</div>
                                            ))}
                                            {skills.map((skill, index) => (
                                                <div key={`${index}-duplicate`} className='skill-badge'>{skill}</div>
                                            ))}
                                    </div>
                                </div>
                    </div>

                    <div className='bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-5 pb-10 px-8 lightgrey lg:w-96 w-full h-full'>

                               <p className='text-lg font-medium'>Essential Stacks</p> 
                               <p className='font-light text-[14px] grey mt-4'>A comprehensive collection of some of the languages and tools I use in devloping.</p> 

                               <div className='w-full flex flex-wrap mt-8 items-center justify-center gap-2'>
                                    <div className='py-1 px-1 pb-3 w-9 h-9 bg-white flex rounded-[10px]' title="Figma">
                                        <img src={ Figma } alt="Figma" className='w-7 h-7'/>
                                    </div>

            
                                    {/* <div className='py-1 px-1 pb-3 w-9 h-9 bg-white flex rounded-[10px]'> */}
                                        <img src={ JS } alt="Javascript" className='w-10 h-10 rounded-[50px] ' title="Javascript"/>
                                    {/* </div> */}

                                    <div className='py-1 px-1 pb-3 w-9 h-9 bg-white flex justify-center rounded-[10px]' title="Java">
                                        <img src={ Java } alt="Java" className='w-5 h-7'/>
                                    </div>

                                    <div className='py-1 px-1 pb-3 w-9 h-9 bg-blue-950 flex justify-center rounded-[10px]' title="React">
                                        <img src={ ReactImg } alt="React" className='w-7 h-7'/>
                                    </div>

                                    <div className='py-1 px-1 pb-3 w-9 h-9 bg-white flex justify-center rounded-[10px]' title="Flutter">
                                        <img src={ Flutter } alt="Flutter" className='w-7 h-7'/>
                                    </div>

                                    <img src={ Firebase } alt="Firebase" className='w-10 h-10 rounded-[50px]' title="Firebase"/>

                                    <div className='py-1 px-1 pb-3 w-9 h-9 bg-blue-950 flex justify-center rounded-[10px]' title="AWS">
                                        <img src={ AWS } alt="AWS" className='w-6 h-6 pt-1.5'/>
                                    </div>

                               </div>
                    </div>
           </div>

    </>
  )
}

export default Skills