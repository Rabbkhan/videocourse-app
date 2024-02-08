'use client'

import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SideBanner = () => {

    const [SideBannerList, setSideBannerList] = useState([])


const getSideBanner = async() =>{
    try {
       const res = await GlobalApi.getSideBanner();
    //    console.log(res)
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
{SideBannerList.length >0 ?

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
 :

 <div className='flex flex-wrap justify-center items-start'>
 {[1, 2, 3].map((item, index) => (
     <div key={index} className='w-auto h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse gap-5 p-5 flex flex-col justify-between'>
         <div className='bg-slate-400 rounded-lg w-80 h-[220px] p-10 pt-6'></div>
         
     </div>
 ))}
 </div>
}
    </div>
 
  )
}

export default SideBanner