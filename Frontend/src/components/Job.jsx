import { Bookmark, Divide } from 'lucide-react'
import React from 'react'
import { Button } from "./ui/button"
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

function Job({ job }) {
    const navigate = useNavigate()
    // const jobId = "dfgfdvlkm,rfv5"
    const dayAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timedifference = currentTime - createdAt;
        return Math.floor(timedifference / (1000 * 24 * 60 * 60));
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200' >
            <div className='flex items-center justify-between'>

                <p text-sm text-gray-500> {dayAgoFunction(job?.createdAt) == 0 ? "Today" : `${dayAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"> <Bookmark /> </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6 " variant="outline" size="icon">
                    <Avatar >
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>

                <div>
                    <h1 className='font-medium text-lg' >{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">{job?.positon}Position</Badge>
                <Badge className={"text-red-600 font-bold"} variant="ghost">{job?.jobType}</Badge>
                <Badge className={"text-purple-700 font-bold"} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save for Later</Button>

            </div>

        </div>

    )
}

export default Job
