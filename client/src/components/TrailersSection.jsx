import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
    const [isPlaying, setIsPlaying] = useState(false)

    // Extract YouTube video ID from URL
    const getYouTubeId = (url) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
        return match ? match[1] : null
    }

    const handleTrailerClick = (trailer) => {
        setCurrentTrailer(trailer)
        setIsPlaying(true)
    }

    const videoId = getYouTubeId(currentTrailer.videoUrl)

    return (
        <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
            {/* Background Blur Effects */}
            <BlurCircle size="lg" color="red" position={{ top: '10%', left: '-5%' }} opacity={15} animated />
            <BlurCircle size="xl" color="blue" position={{ bottom: '20%', right: '-10%' }} opacity={10} animated />
            
            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Latest <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Trailers</span>
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Watch the latest movie trailers and get excited for upcoming releases
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Main Video Player */}
                    <div className="lg:flex-1">
                        <div className="relative group rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-black">
                            <div className="relative aspect-video bg-black">
                                {isPlaying && videoId ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-2xl lg:rounded-3xl"
                                    />
                                ) : (
                                    <div className="w-full h-full relative">
                                        <img 
                                            src={currentTrailer.image} 
                                            alt="Trailer thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                        <div 
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/30 transition-all duration-300"
                                            onClick={() => setIsPlaying(true)}
                                        >
                                            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 lg:p-6 transform transition-all duration-300 hover:scale-110">
                                                <PlayCircleIcon className="h-12 w-12 lg:h-16 lg:w-16 text-white" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Trailers Thumbnails */}
                    <div className="lg:w-96">
                        <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                            <PlayCircleIcon className="h-5 w-5 text-red-500" />
                            More Trailers
                        </h3>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {dummyTrailers.map((trailer, index) => {
                                const isActive = currentTrailer.image === trailer.image
                                return (
                                    <div 
                                        key={trailer.image}
                                        onClick={() => handleTrailerClick(trailer)}
                                        className={`group relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                                            isActive
                                                ? 'ring-2 ring-red-500 scale-105 shadow-lg shadow-red-500/20' 
                                                : 'ring-1 ring-gray-700 hover:ring-red-400 hover:scale-105 hover:shadow-lg'
                                        }`}
                                    >
                                        <div className="relative aspect-video">
                                            <img 
                                                src={trailer.image} 
                                                alt="Trailer thumbnail" 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${
                                                isActive ? 'opacity-80' : 'opacity-60 group-hover:opacity-40'
                                            } transition-opacity duration-300`} />
                                            
                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className={`transform transition-all duration-300 ${
                                                    isActive 
                                                        ? 'scale-100 opacity-100' 
                                                        : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                                                }`}>
                                                    <PlayCircleIcon 
                                                        className={`h-8 w-8 ${
                                                            isActive 
                                                                ? 'text-red-500' 
                                                                : 'text-white'
                                                        } transition-colors duration-300`}
                                                        strokeWidth={1.6}
                                                    />
                                                </div>
                                            </div>
                                            
                                            {/* Trailer Number */}
                                            <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md">
                                                #{String(index + 1).padStart(2, '0')}
                                            </div>
                                            
                                            {/* Active Indicator */}
                                            {isActive && (
                                                <div className="absolute top-2 right-2">
                                                    <div className="flex space-x-1">
                                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-150"></div>
                                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-300"></div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Trailer Title Overlay */}
                                            <div className="absolute bottom-2 left-2 right-2">
                                                <p className="text-white text-sm font-medium truncate drop-shadow-lg">
                                                    Trailer {index + 1}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(239, 68, 68, 0.6);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(239, 68, 68, 0.8);
                }
            `}</style>
        </section>
    )
}

export default TrailersSection