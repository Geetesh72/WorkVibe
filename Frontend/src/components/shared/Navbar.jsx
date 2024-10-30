import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { toast } from 'sonner'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { USER_API_END_POINT } from '@/utils/constant'

function Navbar() {

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();




    // logoutHandler
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.respose.data.message);


        }
    }



    return (
        <div className='bg-white'>
            <div className='flex items-centern justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Work<span className='text-[#F83002]'>Vibe</span></h1>
                </div>

                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {
                            user && user.role == 'recruiter' ?
                                (<>
                                    <li><Link to="/admin/campanies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>

                                </>
                                ) : (
                                    <>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/jobs"> Jobs</Link></li>
                                        <li><Link to="/browse"> Browse</Link></li>
                                    </>
                                )
                        }



                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>



                            </div>
                        ) : (
                            <Popover >
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src={user?.profile?.profilePhoto || "https://via.placeholder.com/40"} alt="User Avatar" className='w-10 h-10 rounded-full object-cover' />
                                        {/* console.log(user?.profile?.profilePhoto) */}
                                        <AvatarFallback className="w-10 h-10 bg-gray-200 text-gray-500 flex items-center justify-center rounded-full">
                                            {/* Use user's initials if available, or a default icon */}
                                            {user?.fullname ? user.fullname[0].toUpperCase() : "U"}
                                        </AvatarFallback>

                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='flex items-center gap-2'>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="User Avatar" className='w-10 h-10 rounded-full object-cover' />

                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm bg-white'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col my-2 text-grey-600'>
                                        {user && user.role == 'student' && (
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />

                                                <Button variant="link" > <Link to="/profile">View profile</Link></Button>
                                            </div>
                                        )}

                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />

                                            <Button onClick={logoutHandler} variant="link" >Logout</Button>
                                        </div>


                                    </div>




                                </PopoverContent>
                            </Popover>

                        )
                    }



                </div>
            </div>


        </div>
    )
}

export default Navbar
