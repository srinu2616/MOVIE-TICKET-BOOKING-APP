import React, { useEffect, useState } from 'react'
import Title from '../../components/admin/Title'
import { dummyShowsData } from '../../assets/assets'
import Loading from '../../components/Loading'
import { kConverter } from '../../lib/kConverter'
import { CheckIcon, DeleteIcon, Calendar, Clock, Plus, Ticket } from 'lucide-react'

const AddShow = () => {
    const currency = import.meta.env.VITE_CURRENCY 
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [dateTimeSelection, setDateTimeSelection] = useState({})
    const [dateTimeInput, setDateTimeInput] = useState("")
    const [showPrice, setShowPrice] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const fetchNowPlayingMovies = async () => {
        // Simulate API call delay
        setTimeout(() => {
            setNowPlayingMovies(dummyShowsData)
            setIsLoading(false)
        }, 1000)
    }

    const handleDateTimeAdd = () => {
        if (!dateTimeInput) return;

        const [date, time] = dateTimeInput.split("T");
        if (!date || !time) return;

        setDateTimeSelection((prev) => {
            const times = prev[date] || [];
            if (!times.includes(time)) {
                return { ...prev, [date]: [...times, time] };
            }
            return prev;
        });
        setDateTimeInput("")
    };

    const handleRemoveTime = (date, time) => {
        setDateTimeSelection((prev) => {
            const filteredTimes = prev[date].filter((t) => t !== time);
            if (filteredTimes.length === 0) {
                const { [date]: _, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                [date]: filteredTimes,
            }
        })
    }

    const handleAddShow = () => {
        // Add show logic here
        console.log({
            movieId: selectedMovie,
            price: showPrice,
            showTimes: dateTimeSelection
        })
    }

    useEffect(() => {
        fetchNowPlayingMovies()
    }, [])

    if (isLoading) return <Loading />

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <div className="max-w-7xl mx-auto">
                <Title text1={"Add"} text2={"Shows"} />
                
                {/* Now Playing Movies Section */}
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8 border border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Ticket className="w-6 h-6 text-blue-400" />
                        Now Playing Movies
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {nowPlayingMovies.map((movie) => (
                            <div
                                key={movie.id}
                                onClick={() => setSelectedMovie(movie.id)}
                                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                                    selectedMovie === movie.id 
                                        ? 'ring-4 ring-blue-500 ring-opacity-70' 
                                        : 'hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50'
                                } bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-600`}
                            >
                                <div className="relative">
                                    <img 
                                        src={movie.poster_path} 
                                        alt={movie.title}
                                        className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <div className="bg-black bg-opacity-80 text-white px-2 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border border-gray-600">
                                            ⭐ {movie.vote_average.toFixed(1)}
                                        </div>
                                        <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-semibold border border-blue-400">
                                            {kConverter(movie.vote_count)}
                                        </div>
                                    </div>
                                    
                                    {selectedMovie === movie.id && (
                                        <div className="absolute top-3 right-3 bg-green-500 text-white p-1.5 rounded-full shadow-lg animate-pulse border border-green-300">
                                            <CheckIcon className="w-5 h-5" strokeWidth={3} />
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-4">
                                    <h3 className="font-bold text-white text-lg line-clamp-1">{movie.title}</h3>
                                    <p className="text-gray-300 text-sm mt-1">
                                        Release: {new Date(movie.release_date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Show Configuration Section */}
                {selectedMovie && (
                    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-white mb-6">Show Configuration</h2>
                        
                        {/* Show Price Input */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-200 mb-3">
                                Show Price
                            </label>
                            <div className="relative max-w-xs">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-400 font-medium">{currency}</span>
                                </div>
                                <input
                                    min={0}
                                    type="number"
                                    value={showPrice}
                                    onChange={(e) => setShowPrice(e.target.value)}
                                    placeholder="Enter the price"
                                    className="pl-10 w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600"
                                />
                            </div>
                        </div>

                        {/* Date and Time Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-300" />
                                Select Date and Time
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
                                <input
                                    type="datetime-local"
                                    value={dateTimeInput}
                                    onChange={(e) => setDateTimeInput(e.target.value)}
                                    className="flex-1 px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600"
                                />
                                <button
                                    onClick={handleDateTimeAdd}
                                    disabled={!dateTimeInput}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-500 disabled:border-gray-600"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Time
                                </button>
                            </div>
                        </div>

                        {/* Display Selected Times */}
                        {Object.keys(dateTimeSelection).length > 0 && (
                            <div className="border-t border-gray-700 pt-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-gray-300" />
                                    Selected Show Times
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(dateTimeSelection).map(([date, times]) => (
                                        <div key={date} className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                                            <div className="font-semibold text-gray-200 mb-3 text-lg">
                                                {new Date(date).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                {times.map((time) => (
                                                    <div
                                                        key={time}
                                                        className="bg-gray-600 px-4 py-2 rounded-lg border border-gray-500 shadow-sm flex items-center gap-3 group hover:border-red-400 transition-all duration-200"
                                                    >
                                                        <span className="font-medium text-gray-200">
                                                            {new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                                hour12: true
                                                            })}
                                                        </span>
                                                        <button
                                                            onClick={() => handleRemoveTime(date, time)}
                                                            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 hover:bg-red-900 hover:bg-opacity-30 rounded"
                                                        >
                                                            <DeleteIcon className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-6 flex justify-end">
                                    <button
                                        onClick={handleAddShow}
                                        className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-green-500"
                                    >
                                        <CheckIcon className="w-5 h-5" />
                                        Add Show
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Empty State */}
                {!selectedMovie && (
                    <div className="text-center py-12 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
                        <Ticket className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">
                            No Movie Selected
                        </h3>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Please select a movie from the list above to configure show times and pricing.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddShow