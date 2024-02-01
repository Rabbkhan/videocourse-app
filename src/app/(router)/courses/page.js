'use client'

import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5">
      <div className="col-span-3">
        {/* left Container  */}
      <WelcomeBanner/>
        
        {/* course List  */}
        
        <CourseList/>
        </div>
      <div>
        {/* Right Constainer */}
        Right Section
        </div>
    </div>
  );
};

export default Courses;
