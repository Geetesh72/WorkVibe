import { Bookmark, Divide } from 'lucide-react'
import React from 'react'
import { Button } from "./ui/button"
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'

function Job() {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200' >
            <div className='flex items-center justify-between'>

                <p text-sm text-gray-500> 2 days ago </p>
                <Button variant="outline" className="rounded-full" size="icon"> <Bookmark /> </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6 " variant="outline" size="icon">
                    <Avatar >
                        <AvatarImage src='https://imgs.search.brave.com/cMeR-TEzSzc3L_T_t4c0ZKSZu5B4BxkMPGrZ48urikE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc' />
                    </Avatar>
                </Button>

                <div>
                    <h1 className='font-medium text-lg' >Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex dignissimos suscipit sit hic eum.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">Positions</Badge>
                <Badge className={"text-red-600 font-bold"} variant="ghost">Part Time</Badge>
                <Badge className={"text-purple-700 font-bold"} variant="ghost">34LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save for Later</Button>

            </div>

        </div>

    )
}

export default Job
