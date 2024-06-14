import React from 'react'
import { FaCircle } from "react-icons/fa6";

const Exp = () => {
    const experiences = [
        { company: "Spear Academy", role: "UI/UX Designer", period: "Mar 2021 - Apr 2023" },
        { company: "7aint Bridges", role: "Full Stack Web Developer", period: "Jan 2022 - Dec 2023" },
        { company: "GOTH Hospital", role: "Front-End Developer & UI/UX Designer", period: "Mar 2022 - Sept 2023" },
        { company: "SAMBA Research", role: "Mobile Developer", period: "Dec 2023 - Apr 2024" },
        { company: "Foodie", role: "Mobile Developer & UI/UX Designer", period: "Dec 2023 - Jun 2024" }
    ]

    return (
        <>
            <div className='bg-gray-400 rounded-[30px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 py-5 pb-5 px-5 lightgrey md:min-w-96 w-full'>

                {/* Header */}

                <div className='flex gap-5 items-center'>
                    <p className='text-lg font-medium'>Experience</p>
                    <div className='text-[12.5px] font-light bg-gray-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 px-1 py-[0.2] grey'>5 years</div>
                </div>

                {/* Exps */}
                <div className='w-full flex flex-col items-start mt-8 gap-42'>

                    {experiences.map((experience, index) => (
                        <div key={index} className='flex items-start justify-start gap-4 w-full'>

                            <div className='flex flex-col items-center'>
                                <FaCircle size={8} className='fill-green-600' />
                                <div className={`w-[0.5px] h-16 border-[0.5px] border-gray-700`}>
                                     {/* h-${index === 4 ? 10 : 16} */}
                                </div>
                            </div>

                            <div className='w-full flex flex-col -mt-[5px]'>
                                <div className='w-full flex justify-between items-center'>
                                    <p className=''>{experience.company}</p>
                                    <p className='font-light grey text-[12px]'>{experience.period}</p>
                                </div>
                                <p className='font-light grey text-[12px]'>{experience.role}</p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

export default Exp