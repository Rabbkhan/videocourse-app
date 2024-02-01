import Image from 'next/image'
import React from 'react'

const CourseItem = ({course}) => {
  return (
    <div className='border rounded-xl hover:shadow-md hover:shadow-purple-300'>
<Image src={course?.banner?.url}
width={500}
height={150}
alt='banner'
className='rounded-t-xl'
/>
<div className='flex flex-col gap-2 p-1'>
    <h2 className='font-medium'>{course.name}</h2>
    <h2 className='text-[12px] text-gray-400'>{course.author}</h2>

{course?.chapter?.length ==0 ? 

<div className='flex items-center gap-2'>
<Image src='/youtube.webp'
alt='youtube'
width={20}
height={20}
/>
<h2 className='text-[14px] text-gray-400'>
    Watch On Youtube
</h2>
</div>
:
<div className='flex items-center gap-2'>

<Image src='/chapter.webp'
alt='chapter'
width={20}
height={20}
/>
<h2 className='text-[14px] text-gray-400'>
   {course.chapter} chapters
</h2>
</div>}
<h2 className='text-[15px]'>{course?.free?'free':'paid'}</h2>
</div>

    </div>
  )
}

export default CourseItem