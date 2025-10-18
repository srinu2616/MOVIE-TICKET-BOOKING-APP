import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()

    return (
        <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-red-500/30">
            {/* Movie Image */}
            <div className="relative overflow-hidden cursor-pointer">
                <img 
                   
                    src={movie.backdrop_path} 
                    onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }}
                    alt={movie.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-yellow-500/30">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold text-sm">
                        {movie.vote_average.toFixed(1)}
                    </span>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
                {/* Movie Title */}
                <h3 
                    onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }}
                    className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 line-clamp-2 cursor-pointer hover:text-red-400 transition-colors duration-300"
                >
                    {movie.title}
                </h3>

                {/* Movie Details */}
                <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-1">
                    {new Date(movie.release_date).getFullYear()} • 
                    {movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")} • 
                    {timeFormat(movie.runtime)}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                    <button 
                        onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center gap-2 text-sm sm:text-base"
                    >
                        Buy Tickets
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    {/* Rating for larger screens */}
                    <div className="hidden sm:flex items-center gap-1 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold text-sm">
                            {movie.vote_average.toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard