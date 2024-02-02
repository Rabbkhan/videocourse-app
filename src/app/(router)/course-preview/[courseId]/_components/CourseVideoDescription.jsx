import React from 'react'
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';

const CourseVideoDescription = ({courseInfo}) => {
 
  // checked if courseinfo is defined 
  if (!courseInfo) {
    return <div>Loading...</div>; 
  }
 
  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
      <h2 className='text-gray-500 text-[14px]mb-3'>{courseInfo.author}</h2>
{/* video palyer */}
<VideoPlayer videoUrl={courseInfo.chapter[0]?.video?.url}/>
{/* Description  */}
<h2 className='mt-5 text-[17px] font-semibold'>About this course</h2>
<div>
  <Markdown className='text-[12px] font-light mt-2 leading-6'>{courseInfo.description}</Markdown>
</div>

    </div>
  )
}

export default CourseVideoDescription  