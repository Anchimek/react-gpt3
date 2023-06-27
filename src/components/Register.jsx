import React from 'react'

const Register = () => (
    <div className='flex flex-col lg:flex-row items-center justify-between w-full bg-lightPurple-gradient rounded-xl my-20 p-8'>
        <div className='lg:p-6'>
            <p className='text-[10px] sm:text-[14px] text-gray font-medium font-Manrope self-start'>
                Request Early Access to Get Started
            </p>
            <h2 className='text-[20px] sm:text-[24px] text-gray font-extrabold font-Manrope my-2 mb-10 lg:mb-0'>
                Register today & start exploring 
                the endless possiblities.
            </h2>
        </div>
        <div className=' flex justify-center items-center bg-black w-[190px] h-[60px] rounded-[40px] text-white cursor-pointer hover:text-secondary'>
            Get Started
        </div>
    </div>
)

export default Register