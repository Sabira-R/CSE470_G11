import React from 'react'
import HeroSection from '../components/Hero'
import ResponsiveNavbar from '../components/Navbar'

export const Home = () => {
    return (
        <div className='w-full h-screen bg-[#e1dae4] '>
            <ResponsiveNavbar />
            <HeroSection />
        </div>
    )
}
