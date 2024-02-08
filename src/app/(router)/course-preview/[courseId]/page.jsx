"use client"

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnrollSection from './_components/CourseEnrollSection'
import CourseContentSection from './_components/CourseContentSection'
import { useUser } from '@clerk/nextjs'



const CoursePreview = ({params}) => {

  const [courseInfo, setCourseInfo] = useState()
  const[isUserAlreadyEnrolled, setIsUserAlreadyEnrolled]= useState()
const {user} = useUser()
  // used to get courseinfo by using slug name 
  const getCourseInfoById= async()=>{

    try {
    const res= await  GlobalApi.getCourseById(params?.courseId)
// console.log(res)
setCourseInfo(res?.courseList)
    } catch (error) {
      
      console.log(error)
    }
  }

  useEffect(()=>{
   courseInfo&&user&&checkUserEnrolledToCourse();


  },[courseInfo,user])

  useEffect(()=>{
    params&&getCourseInfoById()
      },[params])

      const checkUserEnrolledToCourse = async() =>{
try {
  const res = await GlobalApi.checkUserEnrollToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress)
  
  if(res?.userEnrollCourses){
  // console.log(res)
setIsUserAlreadyEnrolled(res?.userEnrollCourses[0]?.id)
}

} catch (error) {
  console.log(error)
}

      }



  return (
  
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      {/* Title, Video , Desciption  */}
      <div className='col-span-2 bg-white p-3'>
<CourseVideoDescription courseInfo={courseInfo}/>
      </div>
      
      {/* course content  */}
     
     <div>
      <CourseEnrollSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
      <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
     </div>
       </div>
  
  )
}

export default CoursePreview