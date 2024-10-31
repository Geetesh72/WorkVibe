import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/customhook/useGetAppliedJobs'





// const skills = ["DSA", "JAVASCRIPTS", "REACT", "NODEJS", "MONGODB", "EXPRESS"]
// const skills = ["DSA", "HGT", "KJH"]

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth)


    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://imgs.search.brave.com/cMeR-TEzSzc3L_T_t4c0ZKSZu5B4BxkMPGrZ48urikE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc" alt="Profile Photo" />

                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>

                </div>
                <div className='my-4'>
                    <div className='flex items-center gap-3 my-2'>

                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>

                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div >
                </div>
                <div className='my-5'>
                    <h1 className='text-xl font-bold '>Skills</h1>
                    <div className='flex items-center gap-2 my-3'>
                        {
                            user?.profile?.skills.length !== 0 ?
                                user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
                                : <span>NA</span>

                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? (<a target='blank' href={user?.profile?.resume} className='text-blue-800 w-full hover:underline cursor-pointer '>
                            {user?.profile?.resumeOriginalName || "View Resume"}</a>)
                            : <span>Please upload Resume</span>
                    }
                </div>



            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='text-xl font-bold my-5'>Applied Jobs</h1>
                <AppliedJobTable />

            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>

    )
}

export default Profile
