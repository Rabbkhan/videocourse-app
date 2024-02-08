'use client'
import React, { useEffect, useState } from 'react'
import WelcomeBannerDasboard from './_components/WelcomeBannerDasboard'
import SideBanner from '../courses/_components/SideBanner'
import InprogressList from './_components/InprogressList'
import { useUser } from '@clerk/nextjs'
import GlobalApi from '@/app/_utils/GlobalApi'
const Dashboard = () => {
  const {user} =useUser();
const [userenrollCourses, setUserEnrollCourses] = useState([])
  useEffect(()=>{
    user&&getAllUserEnrolledCourses()

  },[user])


  //  Get all User enrolled course list
  const getAllUserEnrolledCourses = async() =>{

    try {
      const res = await GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress)
      // console.log(res)
      setUserEnrollCourses(res.userEnrollCourses)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
    <div className="col-span-3">
      {/* left Container  */}
    <WelcomeBannerDasboard user ={user}/>
      
      {/* Inprogress List */}
<InprogressList userenrollCourses={userenrollCourses}/>
      </div>
    <div className="p-5 bg-white rounded-xl">
      {/* Right Constainer */}
     <SideBanner/>
      </div>
  </div>

    )
}

export default Dashboard