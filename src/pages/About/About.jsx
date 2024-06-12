import React from 'react'
import Exp from '../Home/Experinces/components/Exp'
import Education from './components/Education'
import ReadCV from './components/ReadCV'

const About = () => {
  return (
    <>
        <main className='my-24 w-full h-full px-5'>

            <p className='grey font-regular text-xl mb-4 tracking-widest'> ABOUT ME </p>
              <p className='font-bold text-2xl'>
                    Hello there! 👋 I'm Martha Agu, a Software Engineering graduate, driven by a passion for creating innovative and impactful projects. My journey in software development has been fueled by a love for building and a constant curiosity to learn and grow.

                    <p className='mt-5 grey font-regular'>As a full-stack developer, I specialize in both web and mobile development, ensuring seamless user experiences across all platforms. My expertise extends to UI/UX design, where I focus on creating intuitive and visually appealing interfaces that delight users.</p>

                    <p className='mt-5 grey font-regular'>
                        Throughout my academic and professional career, I've had the opportunity to work on a diverse range of projects, honing my skills in various programming languages and frameworks. Whether it's developing robust back-end solutions, crafting responsive front-end designs, or designing user-friendly interfaces, I thrive on turning ideas into reality.
                    </p>

                    <p className='mt-5 grey font-regular'>I'm always excited to take on new challenges and collaborate with others who share a passion for technology and innovation. If you have a project in mind feel free to reach out!</p>
                    
              </p>

              <div className='w-full flex mt-16 gap-3'>
                   <Exp />
                   <Education />
                   <ReadCV />

              </div>
        </main>
    </>
  )
}

export default About