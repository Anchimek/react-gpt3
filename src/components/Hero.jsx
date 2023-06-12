import React from 'react'
import styles from '../styles'
import Button from './Button'
import { ai } from '../assets/index'

const Hero = () => (
    <section id="" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className='flex flex-row jusify-between'>
        <div className='flex flex-col'>
          <h1 className='text-[62px] leading-[75px] bg-lightPurple-gradient'>
            Let’s Build Something
            amazing with GPT-3
            OpenAI
          </h1>
          <p className='text-secondary py-[33px]'>
            Yet bed any for travelling assistance indulgence unpleasing. 
            Not thoughts all exercise blessing. Indulgence way everything 
            joy alteration boisterous the attachment. Party we years to 
            order allow asked of.
          </p>
          <div className='flex'>
            <input
              placeholder='Your Email Address'
              className='w-[200px] h-[50px] bg-input'
            />
            <Button content='Get Started'/>
          </div>
        </div>
        <div>
          <img src={ai} alt='ai' className='w-[1280px] h=[700px]'/>
        </div>
      </div>
      <div></div>
    </section>
)

export default Hero