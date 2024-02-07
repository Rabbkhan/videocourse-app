'use client'


import { useUser } from '@clerk/nextjs'
import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

const {user} = useUser()

    const menu =[
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard',
            auth:user

        },
        {
            id:2,
            name:'All Courses',
            icon:BookOpen,
            path:'/courses',
            auth:true
        },
        {
            id:3,
            name:'Membership',
            icon:BadgeIcon,
            path:'/videcourse-pro',
            auth:true

        },
        {
            id:4,
            name:"Store",
            icon:LayoutGrid,
            path:'/store',
            auth:true
        },
        {
            id:5,
            name:'Be Instructor',
            icon:GraduationCap,
            path:'/instructor',
            auth:true

        },
        {
            id:6,
            name:'Newsplater',
            icon:Mail,
            path:'/newletter',
            auth:true

        },
       
        
    ]

const path = usePathname();

useEffect(()=>{
console.log("path", path)
},[])

  return (
    <div className='p-5 bg-white shadow-lg border h-screen'>
       <Image src="/logo.png" alt="logo"
       width={170}  height={80} />
<hr className='mt-7'></hr>
       {/* Menu List  */}
<div className='mt-5'>
{menu.map((item,index)=>item.auth&&(

<Link key={index} href={item.path}>

    
<div key={index} className={`group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md
transition-all ease-in-out duration-200
${path.includes(item.path) && 'bg-blue-700 text-white'} `}>
    <item.icon className='group-hover:animate-bounce' />
    <h2>{item.name}</h2>
    </div>
    </Link>

))}

    </div>

    </div>
  )
}

export default SideNav