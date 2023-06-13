import React from 'react'
import styles from '../styles'
import Button from './Button'
import { ai } from '../assets/index'

const Hero = () => (
    <section id="" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className='flex flex-col md:flex-row  jusify-between md:mt-[-70px]'>
        <div className={`
          flex-1 
          ${styles.flexStart} 
          flex-col 
          xl:px-0 
        `}>
          <h1 className='text-[36px] lg:text-[48px] lgh:text-[58px] leading-[50px] lg:leading-[75px] bg-lightPurple-gradient font-Manrope'>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </h1>
          <p className='text-secondary py-[33px] leading-[27px] pr-[35px]'>
            Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. Indulgence way everything 
            joy alteration boisterous the attachment. Party we years to 
            order allow asked of.
          </p>
          <div className='flex w-full h-[60px]'>
            <input
              placeholder='Your Email Address'
              className='w-[60%] lgh:w-[70%] bg-input pl-[30px]'
            />
            <Button content='Get Started' rounded={'rounded-r-lg'}/>
          </div>
        </div>
        <div className={`
          flex-1 flex ${styles.flexCenter} 
          md:my-0 my-10 
          relative 
        `}>
          <img src={ai} alt='ai' className='w-[100%] h-[100%] relative z-[5] object-cover'/>
        </div>
      </div>
      <div></div>
    </section>
)

export default Hero