import React from 'react'
import { LuCopyright } from "react-icons/lu";

const Copyright = () => {
  return (
    <>
         <main className='w-full flex justify-between lightgrey mt-8 text-[13px] font-light lg:px-[180px] md:px-[50px] px-[20px]'>

            <div className='flex items-center gap-1'>
                <p><LuCopyright size={10}/></p>
                <p>2024, Martha Agu</p>
            </div>

            <p>2024</p>
         </main>
    </>
  )
}

export default Copyright