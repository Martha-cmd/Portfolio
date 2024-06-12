import React from 'react'
import Martha  from '../../assets/images/Apple_Memojis-portfolio.png'


const Hero = () => {
  return (
    <>
         <main className='w-full mt-24 flex justify-between items-center'>
            
            <div className='w-[38rem]'>
                  <p className='lightgrey '>Software Engineer</p>
                  {/* <p className='spaceBtwSentences font-medium text-[2.2rem]'>I'm Martha, A Software Engineer specializing in <span className=''>Mobile Development, Web Development</span> and <span className=''>UI/UX Design</span></p> */}
                  <p className='pt-[1px] font-bold text-[5rem]'>Hello I'm</p>
                  <p className='font-bold text-purple-600 text-[5rem]'>Martha Agu</p>
                  {/* <p className='pt-[-10rem] font-bold text-lg lightgrey'>A Full-Stack Software Engineer</p> */}
                  {/* <p className='spaceBtwSentences font-bold text-xl underline underline-offset-8 decoration-purple-600'>Mobile Developer + Web Developer</p>
                  <p className='pt-5 font-bold text-xl underline underline-offset-8 decoration-purple-600'>+ UI/UX Designer</p> */}
                  <ul className='list-disc flex flex-col gap-5 spaceBtwSentences pl-5 text-2xl'>
                      <li>Mobile Developer</li>
                      <li>Web Developer</li>
                      <li>UI/UX Designer</li>
                  </ul>
            </div>

            <div>
                 <img src={ Martha } alt="" className='w-96'/>
            </div>
      </main>
    </>
  )
}

export default Hero