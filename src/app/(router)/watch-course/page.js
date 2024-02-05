'use client'

import React from "react";
// import SideBanner from "./_components/SideBanner";
import WatchCourse from "./[enrollId]/page";
const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
      <div className="col-span-3">
        {/* left Container  */}
        
        {/* course List  */}
        
        <WatchCourse/>
        </div>
      <div className="p-5 bg-white rounded-xl">
        {/* Right Constainer */}
       {/* <SideBanner/> */}
        </div>
    </div>
  );
};

export default Courses;
