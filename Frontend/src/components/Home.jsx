import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCorousel from './CategoryCorousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import UseGetAllJobs from '@/customhook/useGetAllJobs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'
function Home() {

    UseGetAllJobs();
    const { user } = useSelector(store => store.auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.role === 'recruiter')
            navigate('/admin/companies');
    }, [])
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CategoryCorousel />
            <LatestJobs />
            <Footer />

        </div>

    )
}

export default Home
