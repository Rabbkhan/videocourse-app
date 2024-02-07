'use client'
import React, { useEffect } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import GlobalApi from './_utils/GlobalApi'

const page = () => {

  const router = useRouter();
  const {user,isLoaded} = useUser();
  useEffect(()=>{
if(user){
  router.push('/dashboard')
}
else{
  isLoaded&&router.push('/courses')
}

  },[user])

// user to check user membership




  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in"/>
    
    </div>
  )
}

export default page