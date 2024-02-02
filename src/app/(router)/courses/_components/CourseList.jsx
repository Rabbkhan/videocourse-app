
import GlobalApi from '@/app/_utils/GlobalApi'
import { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem'
import Link from 'next/link'

const CourseList = () => {

    const [courseList, setCourseList] = useState([])


    const getAllCourses = async () => {
        try {
            const res = await GlobalApi.getAllCourseList();
            console.log(res)
            setCourseList(res?.courseLists)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllCourses()
    }, [])


    return (
        <div className='p-5 bg-white rounded-lg mt-5'>
            {/* Title and Filter  */}
            <div className='flex items-center justify-between outline-none'>
                <h2 className='text-[20px] font-bold text-blue-700'>All Courses</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">ALL</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">Free</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            {/* display Course List */}
            {courseList?.length > 0 ?

                <div className='grid grid-col-2 lg:grid-cols-3 gap-3'>
                    {courseList.map((item, index) => (

<Link href={'/course-preview/'+ item.slug}>


                        <div key={index}>
                            <CourseItem course={item} />
                        </div>
</Link>
                    ))}
                </div>
                :
                <div className='flex flex-wrap justify-center items-start'>
                {[1, 2, 3, 4,5,6].map((item, index) => (
                    <div key={index} className='w-auto h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse gap-5 p-5 flex flex-col justify-between'>
                        <div className='bg-slate-400 rounded-lg w-80 h-40 p-10 pt-6'></div>
                        <div className='bg-slate-500 w-40 pt-3 mt-3 h-8'></div>
                        
                    </div>
                ))}

            </div>
            
            
            }

        </div>
    )
}

export default CourseList