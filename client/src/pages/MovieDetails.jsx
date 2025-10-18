import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { HeartIcon, PlayCircleIcon, StarIcon } from 'lucide-react'
import timeFormat from '../lib/timeFormat'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

const MovieDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [show, setShow] = useState(null)

    const getShow = async () => {
        const foundshow = dummyShowsData.find(show => show._id === id)
        setShow({
            movie: foundshow,
            dateTime: dummyDateTimeData
        })
    }

    useEffect(() => {
        getShow()
    }, [id])

    return show ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
            {/* Hero Section */}
            <div className="relative">
                <BlurCircle top="-100px" left="-100px" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Movie Poster */}
                        <div className="lg:col-span-1">
                            <img 
                                src={show.movie.poster_path} 
                                alt={show.movie.title}
                                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* Movie Info */}
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                    ENGLISH
                                </span>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                                    {show.movie.title}
                                </h1>
                                <div className="flex items-center gap-2 text-yellow-400 mb-6">
                                    <StarIcon className="h-6 w-6 fill-current" />
                                    <span className="text-white text-lg">
                                        {show.movie.vote_average.toFixed(1)} User Rating
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                {show.movie.overview}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
                                <span>{show.movie.genres.map(genre => genre.name).join(", ")}</span>
                                <span>•</span>
                                <span>{show.movie.release_date.split("-")[0]}</span>
                                <span>•</span>
                                <span>{timeFormat(show.movie.runtime)}</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors">
                                    <PlayCircleIcon className="h-5 w-5" />
                                    Watch Trailer
                                </button>
                                <a href='#dateSelect' className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg transition-colors font-semibold">
                                    Buy Tickets
                                </a>
                                <button className="p-3 border border-gray-600 hover:border-red-500 rounded-lg transition-colors">
                                    <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cast Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Your Favourite Cast</h2>
                <div className="overflow-x-auto">
                    <div className="flex gap-4 pb-4">
                        {show.movie.casts.slice(0, 12).map((cast, index) => (
                            <div key={index} className="flex-shrink-0 w-24 text-center">
                                <img 
                                    src={cast.profile_path} 
                                    alt={cast.name}
                                    className="w-20 h-20 rounded-full object-cover mx-auto mb-2"
                                />
                                <p className="text-white text-sm truncate">{cast.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Date Selection */}
            <div id="dateSelect" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <DateSelect dateTime={show.dateTime} id={id} />
            </div>

            {/* Recommended Movies */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">You may Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dummyShowsData.slice(0, 4).map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button 
                        onClick={() => { navigate('/movies'); scrollTo(0, 0) }}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
                    >
                        Show more
                    </button>
                </div>
            </div>
        </div>
    ) : <Loading />
}

export default MovieDetails