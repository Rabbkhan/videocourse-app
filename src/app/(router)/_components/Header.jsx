import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='p-4 bg-white flex justify-between'>
    {/* search bar  */}
            <div className='flex gap-2 border p-2 rounded-md'>

                <Search className='h-5 w-5'/>
                <input type='text' placeholder='Search'className='outline-none' />
            </div>
{/* Get started button and bel icon  */}

<div className='flex items-center gap-4'>
<BellDot className='text-gray-500 cursor-pointer'/>
<Button>Get Started</Button>
</div>

        </div>
    )
}

export default Header