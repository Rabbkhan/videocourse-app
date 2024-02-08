'use client'

import React, { useContext, useEffect } from 'react'
import Header from './_components/Header';
import SideNav from './_components/SideNav';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import { UserMemberContext } from '../_context/UserMemberContext';
const layout = ({children}) => {

    const {user} = useUser();
    // const [toogle, setToogle] =useState(false)
const {isMember,setIsMember} = useContext(UserMemberContext)
    useEffect(()=>{
      user&&chcekUserMembership();
    },[user])
    
    const chcekUserMembership = async() =>{
    
      try {
       const res = await GlobalApi.checkForMemberShip(user.primaryEmailAddress.emailAddress);
     
      // console.log(res)
     if(res?.memberships?.length>0){
      //  console.log('He is Member')
       setIsMember(true)
     }
     
      } catch (error) {
       console.log(error)
      }
     }
    //  const ToogleHandler = (e) =>{
    //   e.preventDefault()
    //   setToogle(true)
      
    //  }

  return (
    <div>
      {/* <button onClick={ToogleHandler}>click</button> */}
     <div className='sm:w-64 sm:block hidden fixed' >
        <SideNav/>
      </div>
      <div className='sm:ml-64'>
      <Header/>
      {children}
      </div>
    </div>
  )
}

export default layout






















