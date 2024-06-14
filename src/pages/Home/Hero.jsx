import React from 'react'
import Martha  from '../../assets/images/Apple_Memojis-portfolio.png'


const Hero = () => {
  return (
    <>
         <main className='w-fit mt-52 flex lg:flex-row flex-col sm:gap-32  justify-between items-center cursor-pointer lg:px-[180px] md:px-[100px] px-[50px]'>
            
            <div className='lg:w-[38rem] w-full flex flex-col'>
                  <p className='lightgrey '>Software Engineer</p>
                  {/* <p className='spaceBtwSentences font-medium text-[2.2rem]'>I'm Martha, A Software Engineer specializing in <span className=''>Mobile Development, Web Development</span> and <span className=''>UI/UX Design</span></p> */}
                  <p className='pt-[1px] font-bold lg:text-[5rem] text-[3rem]'>Hello I'm</p>
                  <p className='font-bold text-purple-600 lg:text-[5rem] text-[3rem]'>Martha Agu</p>
                  {/* <p className='pt-[-10rem] font-bold text-lg lightgrey'>A Full-Stack Software Engineer</p> */}
                  {/* <p className='spaceBtwSentences font-bold text-xl underline underline-offset-8 decoration-purple-600'>Mobile Developer + Web Developer</p>
                  <p className='pt-5 font-bold text-xl underline underline-offset-8 decoration-purple-600'>+ UI/UX Designer</p> */}
                  <ul className='list-disc flex flex-col gap-5 spaceBtwSentences pl-5 lg:text-2xl text-xl lg-mt-0 mt-10'>
                      <li>Mobile Developer</li>
                      <li>Web Developer</li>
                      <li>UI/UX Designer</li>
                  </ul>
            </div>

            <div className='w-full lg:w-fit'>
                 <img src={ Martha } alt="" className='w-96 lg-mt-0 mt-20'/>
            </div>
      </main>
    </>
  )
}

export default Hero