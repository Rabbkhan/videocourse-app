'use client'

import { UserMemberContext } from '@/app/_context/UserMemberContext';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import Script from 'next/script';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

const MonthlyCard = () => {

const[subscriptionId, setSubscriptionId]= useState(null)
const [loader, setLoader] = useState(false);
const {isMember,setIsMember} = useContext(UserMemberContext)

const {user} = useUser()
// to create subscription id 
const createSubscription = async(planId)=>{
  setLoader(true)
 const res = await axios.post("/api/create-subscription", JSON.stringify({
plan_id:planId
 }))
 try {
  console.log(res.data)
  setLoader(false)
  setSubscriptionId(res.data.id)
  
 } catch (error) {
  
 }
  }

  useEffect(()=>{

   subscriptionId&&makePayment()

  },[subscriptionId])

  const makePayment =()=>{
    const options ={
      key:process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
      subscription_id:subscriptionId,
      name:'khan Academy',
      decription:'video course Pro Membership',
      image:'https://rzp-1415-prod-dashboard-activation.s3.ap-south-1.amazonaws.com/org_100000razorpay/main_logo/phplgbGKN',
      handler:async (res) =>{
        console.log(res)
        if(res){
       addNewMember(res?.razorpay_payment_id)
        }
      },
      theme:{
        color:'#7d41e1'
      }
    }

    const rzp= new window.Razorpay(options)
    rzp.open()
  }


  const addNewMember = async(paymentId)=>{
   
    try {
      const res = await GlobalApi.addNewMember(user.primaryEmailAddress.emailAddress,paymentId);
      console.log(res);
      if(res){
        toast("Payment Successfull")
      }
    } catch (error) {
      
      toast(error)
    }

  }

  return (
    <div className="flex justify-center items-center gap-5 ">

    <Script 
    id="razorpay-checkout-js"
    
    src="https://checkout.razorpay.com/v1/checkout.js">

    </Script>
      <div className="bg-white shadow-md p-8 border border-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Monthly</h1>
        <p className="text-xl mb-4 text-gray-700" >$4.99/month</p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg text-gray-700 mb-2">Access to All Courses</li>
          <li className="text-lg text-gray-700 mb-2">Free Source Code</li>
        </ul>
        <Button  onClick={()=>createSubscription('plan_NXUJAVeO3fuHqG')} className=
      {`  ${isMember ? 'bg-green-700 hover:green-500 ' :' bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded`}>
         {!isMember ? <p>Get Started</p> : <p>Already Enrolled</p>}        </Button>
      </div>

      <div className="bg-white shadow-md p-8 border border-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Yearly</h1>
        <p className="text-xl mb-4 text-gray-700">$39.99/month</p>
        <ul className="list-disc list-inside mb-6">
          <li className="text-lg text-gray-700 mb-2">Access to All Courses</li>
          <li className="text-lg text-gray-700 mb-2">Free Source Code</li>
        </ul>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MonthlyCard;
