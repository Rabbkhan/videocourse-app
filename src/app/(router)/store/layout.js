import React from 'react'
import Header from '../_components/Header'
import SideNav from '../_components/SideNav'

const layout = ({children}) => {
  return (
    <div>
      <div className='sm:w-64 sm:block hidden fixed'>
        <SideNav/>
      </div>
      <div className='sm:ml-64'>
      <Header/>
      {children}
      </div>
      </div>
  )
}

export default layout