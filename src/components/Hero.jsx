import React from 'react'
import styles from '../styles'
import Button from './Button'
import { ai, people } from '../assets/index'

const Hero = () => (
    <section id="" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className='flex flex-col md:flex-row  jusify-between md:mt-[-70px]'>
        <div className={`
          flex-1 
          ${styles.flexStart} 
          flex-col 
          xl:px-0 
          relative
          justify-center 
          items-center
        `}>
          <h1 className='text-[36px] lg:text-[48px] lgh:text-[58px] text-center sm:text-left leading-[50px] lg:leading-[75px] bgText-lightPurple-gradient font-Manrope font-extrabold'>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </h1>
          <p className='text-[12px] text-center sm:text-left sm:text-[16px] text-secondary py-[33px] leading-[27px] sm:pr-[35px]'>
            Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. Indulgence way everything 
            joy alteration boisterous the attachment. Party we years to 
            order allow asked of.
          </p>
          <div className='flex sm:w-full sm:h-[60px] justify-center sm:justify-start flex-col sm:flex-row'>
            <input
              placeholder='Your Email Address'
              className='w-[100%] sm:w-[60%] lgh:w-[70%] h-[50px] sm:h-[auto] rounded-t-md md:rounded-l-md bg-input sm:pl-[30px] text-center sm:text-left'
            />
            <Button content='Get Started' rounded={'sm:rounded-r-lg'}/>
          </div>
          <div className='absolute w-[80%] h-[80%] rounded-full blue-gradient-2'/>
          <div className='flex items-center flex-col sm:flex-row w-full my-8'>
            <img src={people} alt='people' className='object-contain min-w-[80px]' />
            <p className='text-white font-Manrope font-medium text-[11px] sm:text-[12px] font-normal mt-2 sm:ml-2 text-center'>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className={`
          flex-1 flex ${styles.flexCenter} 
          md:my-0 my-10 
          relative 
        `}>
          <img src={ai} alt='ai' className='w-[100%] h-[100%] relative z-[5] object-contain'/>
        </div>
      </div>
    </section>
)

export default Hero