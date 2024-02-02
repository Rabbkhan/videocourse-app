'use client'
import React, { useEffect } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

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
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in"/>
    
    </div>
  )
}

export default page