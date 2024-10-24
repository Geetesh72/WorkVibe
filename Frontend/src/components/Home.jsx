import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCorousel from './CategoryCorousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
function Home() {
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
