import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'




function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth)


    //
    const navigate = useNavigate();

    const changeEventtHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }

    // handeler
    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/register`,
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login")
                toast.success(res.data.message);
            }


        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)


        } finally {
            dispatch(setLoading(false))
        }


    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    {/* //fullname */}
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventtHandler}
                            placeholder="kumar"

                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventtHandler}
                            placeholder="workVibe@dtu.com"

                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input

                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventtHandler}
                            placeholder="00000000000"

                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventtHandler}
                            placeholder="@#$5tg"

                        />
                    </div>
                    {/* radio button */}
                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center space-x-2'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role == 'student'}
                                    onChange={changeEventtHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"

                                    value="Recruiter"
                                    checked={input.role == 'Recruiter'}
                                    onChange={changeEventtHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />

                        </div>

                    </div>

                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-bounce' /> Hold on </Button> :
                            <Button type="submit" className="w-full my-4">Sign up</Button>
                    }
                    <span>ALready have an account? <Link to="/login" className='text to-blue-700'>Login</Link></span>



                </form>
            </div>
        </div>

    )
}

export default Signup