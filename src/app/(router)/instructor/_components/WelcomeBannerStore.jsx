import Image from 'next/image'
import React from 'react'

const WelcomeBannerStore = () => {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>

        <Image src="/panda.webp" alt='panda' width={100} height={100} />
        <div>
            <h2 className='font-bold text-[27px]'>Welcome to <span className='text-blue-700'>CodingHub</span> Academy</h2>
            <h2 className='text-gray-500'>Explore, Learn and Build All Real Life Projects</h2>
        </div>
    </div>
  )
}

export default WelcomeBannerStore