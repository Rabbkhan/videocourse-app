'use client'

import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import SideBanner from "./_components/SideBanner";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        {/* left Container  */}
      <WelcomeBanner/>
        
        {/* course List  */}
        
        <CourseList/>
        </div>
      <div className="p-5 bg-white rounded-xl">
        {/* Right Constainer */}
       <SideBanner/>
        </div>
    </div>
  );
};

export default Courses;
