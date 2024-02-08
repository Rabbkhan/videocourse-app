'use client'
import React, { useEffect, useState } from 'react'
import WelcomeBannerStore from './_components/WelcomeBannerStore'
import SideBanner from '../courses/_components/SideBanner'
import CommingSoon from './_components/CommingSoon'

const Instructor = () => {
  

  //  Get all User enrolled course list

 

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
    <div className="col-span-3">
      {/* left Container  */}
    <WelcomeBannerStore />
      
      {/* Inprogress List */}
      <CommingSoon/>
      </div>
    <div className="p-5 bg-white rounded-xl">
      {/* Right Constainer */}
     <SideBanner/>
      </div>
  </div>

    )
}

export default Instructor