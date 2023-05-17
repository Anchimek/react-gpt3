import React from 'react'
import { logoSVG, menu } from '../assets'
import { navLinks } from '../constants/index'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
      <nav className='flex w-full py-6 flex jusify-between items-center'>
        <img src={logoSVG} alt='logo' className='w-[62.56px] h-[16px] mr-10'/>

        <ul className='list-none md:flex hidden justify-start items-center flex-1'>
          {navLinks.map( (nav, index) => (
            <li 
              key={index}
              className={`
                font-Monroe font-normal text-white 
                text-[16px] leading-[25px]
                ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
              `}
            >
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='
              md:flex hidden justify-center items-center
              
        '>
          <span className='
            font-Monroe font-normal text-white 
            text-[16px] leading-[25px] mr-5
          '>
            Sign in
          </span>
          <Button content='Sign up'/>
        </div>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={menu} alt='menu' className='w-[28px] h-[28px] object-contain'/>


        </div>
      </nav>
    </div>
  )
}

export default Navbar