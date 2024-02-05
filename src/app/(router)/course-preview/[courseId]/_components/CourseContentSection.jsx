import { Lock, Play } from 'lucide-react';
import React, { useState } from 'react'

const CourseContentSection = ({courseInfo,isUserAlreadyEnrolled,watchMode=false,setActiveChapterIndex,completedChapter}) => {

const [activeIndex, setActiveIndex]= useState(0);

    if (!courseInfo) {
        return <div>Loading...</div>; 
      }

// use to check the chapter completed or not 

const CheckisChapterCompleted =(chapterId) =>{
return completedChapter.find(item=> item.chapterId == chapterId)

}

  return (
    <div className='p-3 bg-white rounded-sm mt-2'>
<h2>contents</h2>
{courseInfo.chapter.map((item,index)=>(
    <div key={index}>
        <h2 className={`
        p-2 text-[14px] flex justify-between m-2 hover:bg-gray-200 bg:text-gray-500 items-center border rounded-sm px-4 cursor-pointer ${activeIndex==index&& 'bg-blue-700 text-white'}
        ${isUserAlreadyEnrolled&& 'hover:bg-blue-700 hover:text-white'}
        ${watchMode&&CheckisChapterCompleted(item.id)&& 'border-green-800 bg-green-400'}
        `}
        onClick={()=>{watchMode&&setActiveChapterIndex(index);
          watchMode&&setActiveIndex(index)}}
        > {index+1}. {item.name}

        {activeIndex ==index ||isUserAlreadyEnrolled?
        <Play className='h-4 w-4'/> :
        <Lock className='h-4 w-4'/>    }

        </h2>
        </div>
))}

    </div>
  )
}

export default CourseContentSection