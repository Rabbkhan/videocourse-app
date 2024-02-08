import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InProgressCoursesList = ({course}) => {

const getTotalCompletedChapterPerc =(item) =>{
  // perc= (totalCompletedChapter/totalChapter)*100

  const perc = (item.completedChapter?.length/item?.courseList?.chapter?.length)*100
  return perc
}


  return (
    <Link href={"/course-preview/"+course?.courseList?.slug}>

    <div className='border rounded-xl hover:shadow-md hover:shadow-purple-300 mx-5'>
    <Image
        src={course?.courseList?.banner?.url || '/placeholder.png'}
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-xl'
      />
    <div className='flex flex-col gap-2 p-1'>
        <h2 className='font-medium'>{course.courseList?.name}</h2>
        <h2 className='text-[12px] text-gray-400'>{course.courseList?.author}</h2>
        <h2 className="text-[12px] text-gray mt-3">{getTotalCompletedChapterPerc(course)}% <span className='float-right'>{course.completedChapter?.length}/{course?.courseList?.chapter?.length}</span></h2>
        <Progress value={getTotalCompletedChapterPerc(course)}  className="h-[7px]"/>

   
    </div>
    
        </div>
    </Link>
  )
}

export default InProgressCoursesList