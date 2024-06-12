import React from 'react'
import Exp from './components/Exp';
import Skills from './components/Skills';
import Connect from './components/Connect';


const Experinece = () => {

  return (
    <>
       <main className='py-5 w-full flex gap-3'>


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