import React from 'react'
import { posts } from '../constants/index'

const Blog = () => {
  return (
    <div>
      <h2 className='text-[24px] lg:text-[30px] bgText-lightPurple-gradient font-Manrope font-extrabold mb-8'>
        A lot is happening, 
        We are blogging about it.
      </h2>
      <div className='flex flex-col gap-8 sm: blog-grid'>
        {posts.map( post => (
          <div key={post.id} className={post.id === 'post-1' ? 'row-start-1 row-end-3 ' : 'row-span-1'}>
            <img src={post.photo} alt={post.id}/>
            <div className='flex flex-col justify-between bg-darkBlue rounded-tl-lg text-white p-6'>
              <p className='text-[12px] sm:text-[16px]'>{post.date}</p>
              <h3 className='sm:text-[18px]'>{post.title}</h3>
              <p className='text-[12px] sm:text-[16px]' >Read Full Article</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog