import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar, Clock, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()

    return (
        <div className='relative bg-[url("/backgroundImage.png")] bg-cover bg-center bg-no-repeat min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden'>
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent'></div>
            
            {/* Animated Background Elements */}
            <div className='absolute inset-0'>
                <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
            </div>

            <div className='relative max-w-7xl mx-auto w-full space-y-6 sm:space-y-8 lg:space-y-12'>
                {/* Logo with hover effect */}
                <div className='transform transition-all duration-500 hover:scale-105 hover:translate-x-2 inline-block'>
                    <img 
                        src={assets.marvelLogo} 
                        alt='Marvel Logo' 
                        className='h-8 sm:h-10 lg:h-12 w-auto mb-4 sm:mb-6 lg:mb-8 filter drop-shadow-2xl'
                    />
                </div>

                {/* Title with gradient text and animation */}
                <h1 className='text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight'>
                    <span className='bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent animate-gradient-x'>
                        Guardians
                    </span>
                    <br className='hidden sm:block'/>
                    <span className='bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent animate-gradient-x delay-200'>
                        of the Galaxy
                    </span>
                </h1>

                {/* Details Section with glass morphism */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                    {/* Genre */}
                    <span className='text-white text-sm sm:text-base lg:text-lg font-medium bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105'>
                        Action | Adventure | Sci-Fi
                    </span>
                    
                    <div className='flex items-center gap-4 sm:gap-6 lg:gap-8'>
                        {/* Year */}
                        <div className='flex items-center gap-2 text-white text-sm sm:text-base lg:text-lg bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-2xl hover:bg-white/20 transition-all duration-300'>
                            <Calendar className='h-4 w-4 sm:h-5 sm:w-5 text-red-400'/>
                            2018
                        </div>
                        
                        {/* Duration */}
                        <div className='flex items-center gap-2 text-white text-sm sm:text-base lg:text-lg bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-2xl hover:bg-white/20 transition-all duration-300'>
                            <Clock className='h-4 w-4 sm:h-5 sm:w-5 text-blue-400'/>
                            2h 8m
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className='max-w-2xl text-gray-200 text-lg sm:text-xl lg:text-2xl leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl'>
                    In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
                </p>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4'>
                    <button 
                        onClick={() => navigate('/movies')}
                        className='group relative bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/25 flex items-center justify-center gap-3 overflow-hidden'
                    >
                        <span className='relative z-10 flex items-center gap-3'>
                            Explore Movies 
                            <ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform duration-300'/>
                        </span>
                        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                    </button>

                    
                </div>

                
            </div>

            {/* Add this to your global CSS or Tailwind config for the gradient animation */}
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </div>
    )
}

export default HeroSection