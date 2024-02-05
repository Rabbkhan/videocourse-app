import Image from 'next/image'
import React from 'react'
import InProgressCoursesList from './InProgressCoursesList'

const InprogressList = ({userenrollCourses}) => {


    
  return (
    <div className='bg-white mt-3 rounded-sm p-5'>

<h2 className='text-blue-700 text-[18px] font-semibold'>Recent Enrolled Courses </h2>
<div className="grid grid-cols-1 md:grid-cols-3 mt-3">
{userenrollCourses.map((item,index)=>(
<InProgressCoursesList key={index}
course={item}
/>

))}

</div>
    </div>
  )
}

export default InprogressList