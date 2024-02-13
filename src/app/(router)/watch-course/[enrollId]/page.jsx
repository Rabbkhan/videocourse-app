'use client'
// Importing necessary modules
import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection';
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription';
import { toast } from 'sonner';

const WatchCourse = ({ params }) => {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0)
  const[completedChapter, setCompletedChapter]= useState([])

  // Fetch course details when params and user are available
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        if (params && user) {
          const res = await GlobalApi.getUserEnrollCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress);
          setCompletedChapter(res.userEnrollCourses[0].completedChapter);

          setCourseInfo(res.userEnrollCourses[0].courseList);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
    fetchCourseDetails();
  }, [params, user]);


// Get User Enrolled Course Details by Id+Email 


  // save completed chapter id 

const onChapterComplete = async(chapterId)=>{

  try {
    const res =  await GlobalApi.markChapterCompleted(params.enrollId, chapterId)
// console.log(res)
if(res){
  toast('Chapter Mark as a completed!')
  getUserEnrollCourseDetails()
}
  } catch (error) {
    // console.log(error)
  }
}
  return (
    courseInfo && (
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title, Video, Description */}
        <div className='col-span-2 bg-white p-3'>
          <CourseVideoDescription
            courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex}
            watchMode={true}
            setChapterCompleted={(chapterId)=>onChapterComplete(chapterId)}
          />
        </div>

        {/* Course content */}
        <div>
          <CourseContentSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={true}
            watchMode={true}
            completedChapter={completedChapter}
            setActiveChapterIndex={(index) => setActiveChapterIndex(index)}
          />
        </div>
      </div>
    )
  );
};

export default WatchCourse;
