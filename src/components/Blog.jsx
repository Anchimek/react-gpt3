import React from 'react'
import { posts } from '../constants/index'

const Blog = () => {
  return (
    <div>
      <h2 className='text-[24px] lg:text-[30px] bgText-lightPurple-gradient font-Manrope font-extrabold mb-8'>
        A lot is happening, 
        We are blogging about it.
      </h2>
      <div className='flex flex-col gap-8 md:grid md:gap-12 md:grid-cols-3 md:grid-rows-2'>
        {posts.map( post => (
          <div key={post.id} className={`${post.id === 'post-1' ? 'row-start-1 row-end-3 ' : 'row-span-1'}`}>
            <img src={post.photo} alt={post.id} className='h-[40%] w-[100%]'/>
            <div className='flex flex-col justify-between bg-darkBlue rounded-tl-lg text-white p-6 h-[60%] gap-8 sm:gap-2'>
              <div>
                <p className='text-[12px] sm:text-[12px] lg:text-[16px] mb-2'>{post.date}</p>
                <h3 className='sm:text-[16px] font-bold'>{post.title}</h3>
              </div>
              <p className='text-[12px] sm:text-[12px] lg:text-[16px] cursor-pointer hover:text-secondary' >Read Full Article</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog