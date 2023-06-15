import React from 'react'
import { improvements } from '../constants'

const About = () => {
  function writeImprovements() {
    
  }
  return (
      <div className='bg-darkBlue w-full mt-20 my-20 relative bg-gpt3'>

      <div className='flex flex-col sm:flex-row py-4'>
        <div className='min-w-[180px] mb-4 mr-8 relative'>
          <h3 className='text-[20px] text-white font-Manrope font-extrabold '>What is GPT-3</h3>
          <div className='heading-panel absolute w-[10%] h-[10%] top-[-10px]'></div>
        </div>
        <p className='font-Manrope text-[12px] font-medium leading-[24px] sm:leading-[30px] text-secondary lg:px-20'>
          We so opinion friends me message as delight. 
          Whole front do of plate heard oh ought. 
          His defective nor convinced residence own. 
          Connection has put impossible own apartments boisterous. 
          At jointure ladyship an insisted so humanity he. 
          Friendly bachelor entrance to on by.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 w-full'>
        <h2 className='text-[24px] lg:text-[30px] bg-lightPurple-gradient font-Manrope font-extrabold sm:w-2/3'>The possibilities are beyond your imagination</h2>
        <p className='text-[12px] text-salmon font-Manrope font-medium my-6'>Explore The Library</p>
      </div>

      <div className='flex flex-col sm:flex-row py-4'>
        {improvements.map( improvement => (
            <div key={improvement.id} className='my-10'>
              <div className='min-w-[180px] mb-4 mr-8 relative'>
                <h3 className='text-[20px] text-white font-Manrope font-extrabold '>{improvement.title}</h3>
                <div className='heading-panel absolute w-[10%] h-[10%] top-[-10px]'></div>
              </div>
              <p className='font-Manrope text-[12px] font-medium leading-[24px] sm:leading-[30px] text-secondary lg:px-20'>
                {improvement.content}
              </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default About