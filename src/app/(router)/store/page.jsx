'use client';
import React, { Suspense } from 'react'
import WelcomeBannerStore from './_components/WelcomeBannerStore'
import SideBanner from '../courses/_components/SideBanner'
import CommingSoon from './_components/CommingSoon'
import { useSearchParams } from 'next/navigation'

const Store = () => {
  // Wrap useSearchParams() with Suspense
  const params = useSearchParams()

  // You can use params here as needed

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5">
        <div className="col-span-3">
          {/* left Container */}
          <WelcomeBannerStore />
          {/* Inprogress List */}
          <CommingSoon />
        </div>
        <div className="p-5 bg-white rounded-xl">
          {/* Right Constainer */}
          <SideBanner />
        </div>
      </div>
    </Suspense>
  )
}

export default Store
