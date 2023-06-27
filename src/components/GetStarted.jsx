import React from 'react'
import { possibility } from '../assets/index'
import styles from '../styles'

const GetStarted = () => (
    <div className='flex flex-col md:flex-row  jusify-between lg:mt-4'>
      <div className={`
        flex-1 flex ${styles.flexCenter} 
        relative 
        lg:mr-24
      `}>
        <img src={possibility} alt='possibility' className='w-[100%] h-[100%] relative z-[5] object-contain'/>
      </div>
      
      <div className={`
        flex-1 
        ${styles.flexStart} 
        flex-col 
        xl:px-0 
        relative
        justify-center
        mt-8
        lg:mt-52
      `}>
        <p className='text-turqoise text-[12px] lg:text-[16px] text-salmon font-Manrope cursor-pointer hover:font-bold'>
          Request Early Access to Get Started
        </p>
        <h2 className='text-[24px] lg:text-[30px] bgText-lightPurple-gradient font-Manrope font-extrabold mt-4'>
          The possibilities are beyond your imagination
        </h2>
        <p className='text-[12px] sm:text-[16px] text-secondary py-[20px] lg:py-[34px] leading-[27px] sm:pr-[35px]'>
          Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all exercise blessing. Indulgence way everything 
          joy alteration boisterous the attachment. Party we years to order 
          allow asked of.
        </p>
        <p className='text-[12px] lg:text-[16px] text-salmon font-Manrope cursor-pointer hover:font-bold '>
          Request Early Access to Get Started
        </p>
      </div>

    </div>
)

export default GetStarted