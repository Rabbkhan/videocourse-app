'use client'

import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SideBanner = () => {

    const [SideBannerList, setSideBannerList] = useState([])


const getSideBanner = async() =>{
    try {
       const res = await GlobalApi.getSideBanner();
       console.log(res)
       setSideBannerList(res.sideBanners)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
getSideBanner();
},[])


  return (
    <div>
 {SideBannerList.map((item,index)=>(

    <div key={index}>

<Image src={item.banner.url}
 alt="bannerUrl"
width={500}
height={300}
onClick={()=>window.open(item?.url)}
className='rounded-xl cursor-pointer'
 />
        </div>
 ))}

    </div>
  )
}

export default SideBanner