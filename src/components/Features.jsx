import React from 'react'
import { features } from '../constants'

const Features = () => {
  return (
    <div className='flex flex-col lg:flex-row relative'>
      <div>
        <h2 className='text-[24px] lg:text-[30px] bgText-lightPurple-gradient font-Manrope font-extrabold sm:w-2/3'>
          The Future is Now and You Just Need To Realize It. 
          Step into Future Today & Make it Happen.
        </h2>
        <p className='text-[12px] text-salmon font-Manrope my-12 cursor-pointer hover:font-bold'>
          Request Early Access to Get Started
        </p>
        <div className='absolute w-[80%] h-[80%] rounded-full blue-gradient-2'/>
      </div>

      <div className='flex flex-col py-4'>
        {features.map( feature => (
            <div key={feature.id} className='flex flex-col lg:flex-row my-6'>
              <div className='min-w-[180px] mb-4 mr-28 relative'>
                <h3 className='text-[18px] text-white font-Manrope font-extrabold'>{feature.title}</h3>
                <div className='heading-panel absolute w-[10%] h-[10%] top-[-10px]'></div>
              </div>
              <p className='font-Manrope text-[12px] font-medium leading-[24px] text-secondary mr-8'>
                {feature.content}
              </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Features