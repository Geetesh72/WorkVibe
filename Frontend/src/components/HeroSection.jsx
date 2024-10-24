import { Search } from 'lucide-react'
import React from 'react'

function HeroSection() {
    return (

        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Welcome to WorkVibe</span>
                <h1 className='text-5xl font-bold'> Discover Apply & <br /> Get your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-2xl font-semibold'>WorkVibe: Your faster, streamlined portal to discover, apply for, and land your dream job!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Have you search on WorkVibe ???'
                        className='outline-none border-none w-full py-2 text-lg'

                    />
                    <button className='rounded-r-full bg-[#6A38C2] py-3 px-4'>
                        <Search className='h-5 w-5' />
                    </button>
                </div>
            </div>


        </div>

    )
}

export default HeroSection
