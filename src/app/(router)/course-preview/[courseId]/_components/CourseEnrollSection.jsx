
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {useEffect}from 'react'
import { toast } from 'sonner';

const CourseEnrollSection = ({ courseInfo,isUserAlreadyEnrolled }) => {

if(!courseInfo) return <p>Loading..</p>

useEffect(() => {
 
console.log('isUserAlreadyEnrolled', isUserAlreadyEnrolled)
  
}, [])

  const membership = false;
  const { user } = useUser();
const router = useRouter();
  //Enroll to the Course
  const onEnrollCourse =async()=>{

    try {
      const res= await GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress.emailAddress);
      console.log(res)

      if(res){
// show Toast on Sucessful Eroll 
toast("User Enroll Succesful", {
  description: "User Enroll This Course",
  
})
// Redicrect to Watch Course 
        router.push('/watch-course/' + res.createUserEnrollCourse.id)
      }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='p-3 text-center rounded-sm bg-blue-700 flex flex-col gap-3'>
      <h2 className='text-[22px] font-bold text-white'>Enroll The Course</h2>

      {/* User has Membership and Already Login  */}
      {user && (membership || courseInfo.free)&&!isUserAlreadyEnrolled ? <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>EnrollNow to Start Learning and Building the Projects</h2>
        <Button className="bg-white text-blue-700 hover:bg-white hover:text-blue-700 "
        onClick={()=>onEnrollCourse()}
        >Enroll Now</Button>
      </div>
      :!user?
      <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>EnrollNow to Start Learning and Building the Projects</h2>
     <Link href={'/sign-in'}>   <Button className="bg-white text-blue-700 hover:bg-white hover:text-blue-700 ">Enroll Now</Button></Link>
      </div>
        :
       !isUserAlreadyEnrolled&& <div className='flex flex-col gap-3 mt-3'>
          {/* User Does not Have Membership or not signup/login */}
          <h2 className='text-white font-light'>Buy Monthly Membership and Get Access all Courses</h2>
          <Button className="bg-white text-blue-700 hover:bg-white hover:text-blue-700 ">Buy Membership $2.9</Button>
        </div>}
       {isUserAlreadyEnrolled && <div className='flex flex-col gap-3 mt-3'>
          {/* User Does not Have Membership or not signup/login */}
          <h2 className='text-white font-light'>Continue to Learn Your Course</h2>
         <Link href={'/watch-course/'+ isUserAlreadyEnrolled }> <Button className="bg-white text-blue-700 hover:bg-white hover:text-blue-700 ">Continue</Button></Link>
        </div>}
    </div>
  )
}

export default CourseEnrollSection