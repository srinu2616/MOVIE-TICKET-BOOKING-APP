import { ArrowRight, Calendar } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { dummyShowsData} from '../assets/assets'
import MovieCard from './MovieCard'

const FeaturedSection = () => {
    const navigate = useNavigate()

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
            {/* Background Blur Circles */}
            <BlurCircle size="lg" color="red" position={{ top: '10%', right: '-10%' }} opacity={15} animated />
            <BlurCircle size="md" color="blue" position={{ bottom: '20%', left: '-5%' }} opacity={10} animated />

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 lg:mb-16 gap-6">
                    <div className="flex items-center gap-4">
                        {/* Decorative Element */}
                        <div className="hidden sm:block w-2 h-12 bg-red-500 rounded-full"></div>

                        <div>
                            <p className="text-red-400 font-semibold text-lg sm:text-xl uppercase tracking-wider mb-2">
                                Now Showing
                            </p>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Featured Movies
                            </h2>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/movies')}
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 sm:px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                    >
                        View All Movies
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Movies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 lg:mb-16">
                    {dummyShowsData.slice(0, 4).map((movie) => (
                        <MovieCard key={movie._id} movie={movie} />
                    ))}
                </div>

                {/* Show More Section */}
                <div className="text-center">
                    <div className="relative inline-block">
                        {/* Decorative Line */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-red-500/20 to-transparent rounded-full blur-sm"></div>

                        <button
                            onClick={() => { navigate('/movies'); scrollTo(0, 0) }}
                            className="relative bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/25 flex items-center gap-3 mx-auto group"
                        >
                            <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                            Show More Movies
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default FeaturedSection