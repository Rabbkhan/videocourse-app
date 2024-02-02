import { Lock, Play } from 'lucide-react';
import React, { useState } from 'react'

const CourseContentSection = ({courseInfo}) => {

const [activeIndex, setActiveIndex]= useState(0);

    if (!courseInfo) {
        return <div>Loading...</div>; 
      }
  return (
    <div className='p-3 bg-white rounded-sm mt-2'>
<h2>contents</h2>
{courseInfo.chapter.map((item,index)=>(
    <div key={index}>
        <h2 className={`
        p-2 text-[14px] flex justify-between m-2 hover:bg-gray-200 bg:text-gray-500 items-center border rounded-sm px-4 cursor-pointer ${activeIndex==index&& 'bg-blue-700 text-white'}
        `}> {index+1}. {item.name}

        {activeIndex ==index?
        <Play className='h-4 w-4'/> :
        <Lock className='h-4 w-4'/>    }

        </h2>
        </div>
))}

    </div>
  )
}

export default CourseContentSection