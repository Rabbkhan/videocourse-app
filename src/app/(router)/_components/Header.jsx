
'use client'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const {user,isLoaded} = useUser()
    return (
        <div className='p-4 bg-white flex justify-between'>
    {/* search bar  */}
            <div className='flex gap-2 border p-2 rounded-md w-full max-w-96 '>

                <Search className='h-5 w-5'/>
                <input type='text' placeholder='Search'className='outline-none' />
            </div>
{/* Get started button and bel icon  */}

<div className='flex items-center gap-4'>
<BellDot className='text-gray-500 cursor-pointer hidden md:block'/>
{isLoaded&&user?
<UserButton afterSignOutUrl='/courses'/>
:
<Link href={'/sign-in'}>

<Button>Get Started</Button>
</Link>}
</div>

        </div>
    )
}

export default Header