import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function JobDescription() {
    const isApplied = true;
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between' >
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={"text-blue-700 font-bold"} variant="ghost">Positions</Badge>
                        <Badge className={"text-red-600 font-bold"} variant="ghost">Part Time</Badge>
                        <Badge className={"text-purple-700 font-bold"} variant="ghost">34LPA</Badge>
                    </div>

                </div>

                <Button disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-500 cursor-not-allowed' : "bg-[#7209b6] hover:bg-[#5F32ad]"}`} > {isApplied ? "Applied" : "Apply Now"}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-1'>
                <h1 className='font-bold my-1'> Role :<span className='pl-4 font-normal text-gray-800'>Backend Developer</span></h1>
                <h1 className='font-bold my-1'> Location :<span className='pl-4 font-normal text-gray-800'>Gurugram</span></h1>
                <h1 className='font-bold my-1'> Description :<span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet.</span></h1>
                <h1 className='font-bold my-1'> Experience :<span className='pl-4 font-normal text-gray-800'>Fresher</span></h1>
                <h1 className='font-bold my-1'> Package :<span className='pl-4 font-normal text-gray-800'>88LPA</span></h1>
                <h1 className='font-bold my-1'> Total Applicants :<span className='pl-4 font-normal text-gray-800'>450</span></h1>
                <h1 className='font-bold my-1'> Posted Date:<span className='pl-4 font-normal text-gray-800'>24-10-2024</span></h1>

            </div>


        </div>







    )
}

export default JobDescription
