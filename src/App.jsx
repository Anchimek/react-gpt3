import React from 'react'
import styles from './styles'

import { About, Blog, Features, Footer, Hero, Navbar, Register } from './components'

const App = () => (
          <div className='bg-primary w-full overflow-hidden m-[0] px-8 sm:px-16'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
    </div>
  </div>
)

export default App