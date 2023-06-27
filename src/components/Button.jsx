import React from 'react'

const Button = ({content, rounded}) => (
    <div className={`
        flex items-center justify-center py-3 px-8 bg-orange ${rounded}
        text-[16px] text-white outline-none font-Monroe font-normal
        cursor-pointer 
    `}>
        {content}
    </div>
  )

export default Button