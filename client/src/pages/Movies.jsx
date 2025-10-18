import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      {/* Background Effects */}
      <BlurCircle top='150px' left="0px" opacity={10} animated />
      <BlurCircle right='100px' bottom="100px" opacity={10} animated />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Now Showing
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Explore our collection of latest movies
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {dummyShowsData.map((movie) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          No movies available
        </h1>
        <p className="text-gray-400 text-lg">
          Please check back later for new releases
        </p>
      </div>
    </div>
  )
}

export default Movies