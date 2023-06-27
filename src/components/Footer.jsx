import React from 'react'
import { footerLinks } from '../constants/index'

const Footer = () => {
  return (
    <div className='bg-darkBlue w-full mt-20 my-20 relative bg-gpt3 p-8'>

    <div className='flex flex-col justify-between items-center text-center my-10 w-full gap-8'>
      <h2 className='text-[24px] lg:text-[30px] bgText-lightPurple-gradient font-Manrope font-extrabold sm:w-2/3'>
        Do you want to step in to the future before others
      </h2>
      <div className='
          w-[190px] h-[70px] 
          text-white 
          border-solid border border-white font-Manrope
          flex items-center justify-center
          cursor-pointer hover:text-secondary
      '>
        Request Early Access
      </div>
    </div>
    
    <div className='w-full p-8 md:flex md:flex-row md:justify-evenly items-start gap-8'>
    <h3 className='text-[28px] md:text-[32px] text-white font-Manrope font-extrabold mb-6 mt-10 md:mt-0'>
      GPT-3
    </h3>
      {footerLinks.map( link => (
          <div key={link.title} className='mb-6 flex flex-col justify-center'>
            <h4 className='bgText-lightPurple-gradient text-[16px] md:text-[20px] font-bold font-Manrope mb-2'>
              {link.title}
            </h4>
            <nav>
              <ul>
                {link.links.map(link => (
                  <li key={link.name} className='text-white text-[10px] md:text-[12px] font-extralight mb-2 cursor-pointer hover:text-secondary'>
                    {link.name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
      ))}
    </div>

  </div>
)
}

export default Footer