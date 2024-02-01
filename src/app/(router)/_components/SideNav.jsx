'use client'


import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {

    const menu =[
        {
            id:1,
            name:'All Courses',
            icon:BookOpen,
            path:'/all'
        },
        {
            id:2,
            name:'Membership',
            icon:BadgeIcon,
            path:'/membership'

        },
        {
            id:4,
            name:"Store",
            icon:LayoutGrid,
            path:'/store'
        },
        {
            id:3,
            name:'Be Instructor',
            icon:GraduationCap,
            path:'/instructor'
        },
        {
            id:5,
            name:'Newsplater',
            icon:Mail,
            path:'/newletter'
        },
        
    ]

  return (
    <div className='p-5 bg-white shadow-lg border h-screen'>
       <Image src="/logo.png" alt="logo"
       width={170}  height={80} />
<hr className='mt-7'></hr>
       {/* Menu List  */}
<div className='mt-5'>
{menu.map((item,index)=>(


    
<div key={index} className=' group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md
transition-all ease-in-out duration-200
'>
    <item.icon className='group-hover:animate-bounce' />
    <h2>{item.name}</h2>
    </div>
))}
    </div>

    </div>
  )
}

export default SideNav