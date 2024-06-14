import React from 'react'
import Exp from './components/Exp';
import Skills from './components/Skills';
import Connect from './components/Connect';


const Experinece = () => {

  return (
    <>
       <main className='py-5 w-full flex lg:flex-row flex-col gap-3 lg:px-[180px] md:px-[50px] px-[20px]'>


           {/* Experience  */}
           <Exp />
           
           {/* Skills  */}
           <Skills />

           {/* Connect */}
           <Connect />

           
       </main>
    </>
  )
}

export default Experinece