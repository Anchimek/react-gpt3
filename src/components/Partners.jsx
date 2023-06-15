import React from 'react'
import { clients } from '../constants/index'
import styles from '../styles'

const Partners = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex flex-wrap w-full items-center justify-center gap-10`}>
        {
          clients.map( client => (
            <div
              key={client.id}
              className={`${styles.flexCenter} min-w-[70px]`}
            >
              <img 
                src={client.logo}
                alt='client'
                className='w-[70px] object-contain'
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Partners