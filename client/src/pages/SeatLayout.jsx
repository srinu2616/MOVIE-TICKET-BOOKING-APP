import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRightIcon, ClockIcon, ScreenShareIcon } from 'lucide-react'
import isoTimeFormat from '../lib/isoTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

const SeatLayout = () => {
    const groupRows = [["A","B"], ["C","E"], ["D","F"], ["G","I"], ["H","J"]]
    const { id, date } = useParams()
    const [selectedSeats, setSelectedSeats] = useState([])
    const [selectedTime, setSelectedTime] = useState(null)
    const [show, setShow] = useState(null)
    const navigate = useNavigate()

    const getShow = async () => {
        const foundshow = dummyShowsData.find(show => show._id === id)
        console.log("Found show:", foundshow);
        if (foundshow) {
            setShow({
                movie: foundshow,
                dateTime: dummyDateTimeData
            })
        }
    }

    const handleSeatClick = (seatId) => {
        if (!selectedTime) {
            return toast.error("Please select the time first")
        }
        if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
            return toast.error("You can only select 5 seats")
        }
        setSelectedSeats(prev => prev.includes(seatId) 
            ? prev.filter(seat => seat !== seatId) 
            : [...prev, seatId]
        )
    }

    const renderSeats = (row, count = 9) => (
        <div key={row} className="mb-3">
            <div className="flex justify-center gap-1.5 sm:gap-2">
                {Array.from({ length: count }, (_, i) => {
                    const seatId = `${row}${i + 1}`
                    const isSelected = selectedSeats.includes(seatId)
                    const isAvailable = true
                    
                    return (
                        <button
                            key={seatId}
                            onClick={() => handleSeatClick(seatId)}
                            disabled={!isAvailable || !selectedTime}
                            className={`
                                w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm font-medium
                                border-2 rounded-lg transition-all duration-200
                                transform hover:scale-105 active:scale-95
                                ${isSelected
                                    ? "bg-gradient-to-br from-primary to-primary/80 text-white border-primary shadow-lg shadow-primary/25"
                                    : isAvailable
                                    ? "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400 hover:shadow-md"
                                    : "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed opacity-60"
                                }
                                ${!selectedTime ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                        >
                            {seatId}
                        </button>
                    )
                })}
            </div>
        </div>
    )

    // Group the seat pairs together
    const groupedSeats = [
        groupRows[0], // A & B
        [groupRows[1], groupRows[2]], // C&E and D&F together
        [groupRows[3], groupRows[4]]  // G&I and H&J together
    ]

    const renderSeatSection = (section, sectionIndex) => {
        if (sectionIndex === 0) {
            // A & B section - individual rows
            return (
                <div key={sectionIndex} className="bg-black/20 rounded-xl p-4 border border-white/10 w-full">
                    <div className="flex flex-col items-center space-y-4">
                        {section.map(row => renderSeats(row))}
                    </div>
                </div>
            )
        } else {
            // Combined sections - C&E + D&F and G&I + H&J
            return (
                <div key={sectionIndex} className="bg-black/20 rounded-xl p-4 border border-white/10 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
                        {/* Left group */}
                        <div className="flex flex-col items-center space-y-4">
                            {section[0].map(row => renderSeats(row))}
                        </div>
                        {/* Right group */}
                        <div className="flex flex-col items-center space-y-4">
                            {section[1].map(row => renderSeats(row))}
                        </div>
                    </div>
                </div>
            )
        }
    }

    useEffect(() => {
        getShow()
    }, [id])

    return show ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-dark-900 to-slate-900 text-white">
            {/* Background Effects */}
            <BlurCircle top="-100px" left="-100px" />
            <BlurCircle bottom="0px" right="0px" />
            
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Movie Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {show.movie.title}
                    </h1>
                    <p className="text-gray-300 text-lg">{date}</p>
                </div>

                {/* Available Timings */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl">
                    <h2 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
                        <ClockIcon className="w-5 h-5" />
                        Available Timings
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {show.dateTime[date]?.map((item) => (
                            <button
                                key={item.time}
                                onClick={() => setSelectedTime(item)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-xl
                                    transition-all duration-300 transform hover:scale-105
                                    border-2 font-semibold min-w-[120px]
                                    ${selectedTime?.time === item.time
                                        ? 'bg-gradient-to-r from-primary to-accent text-white border-primary shadow-lg shadow-primary/30'
                                        : 'bg-white/5 border-white/20 text-gray-200 hover:bg-white/10 hover:border-white/30'
                                    }
                                `}
                            >
                                <ClockIcon className="w-4 h-4" />
                                <span>{isoTimeFormat(item.time)}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Seat Selection Section */}
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl overflow-hidden">
                    {/* Screen Display */}
                    <div className="text-center mb-8">
                        <div className="relative inline-block max-w-2xl w-full">
                            <img 
                                src={assets.screenImage} 
                                alt="screen" 
                                className="w-full mx-auto opacity-80 rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <ScreenShareIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                                    <p className="text-sm sm:text-lg font-semibold text-primary bg-black/50 px-3 py-1 sm:px-4 sm:py-1 rounded-full">
                                        SCREEN THIS WAY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Select Your Seats
                    </h2>

                    {/* Seat Layout */}
                    <div className="w-full max-w-4xl mx-auto">
                        {/* Seat Legend */}
                        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-primary rounded"></div>
                                <span>Selected</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-gray-100 border-2 border-gray-300 rounded"></div>
                                <span>Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <span>Occupied</span>
                            </div>
                        </div>

                        {/* Seats Grid */}
                        <div className="space-y-4 w-full">
                            {groupedSeats.map((section, sectionIndex) => 
                                renderSeatSection(section, sectionIndex)
                            )}
                        </div>

                        {/* Selection Summary */}
                        {selectedSeats.length > 0 && (
                            <div className="mt-6 text-center">
                                <p className="text-lg font-semibold mb-2">
                                    Selected Seats: {selectedSeats.length}
                                </p>
                                <p className="text-gray-300 text-sm">
                                    {selectedSeats.sort().join(', ')}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Proceed Button */}
                    <div className="text-center mt-6">
                        <button 
                            onClick={() => navigate('/my-bookings')}
                            disabled={selectedSeats.length === 0}
                            className={`
                                group inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4
                                text-base sm:text-lg font-bold rounded-xl transition-all duration-300
                                transform hover:scale-105 disabled:opacity-50 
                                disabled:cursor-not-allowed disabled:scale-100
                                bg-gradient-to-r from-primary to-accent
                                hover:from-accent hover:to-primary
                                shadow-lg hover:shadow-xl
                            `}
                        >
                            Proceed to Checkout
                            <ArrowRightIcon 
                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
                                strokeWidth={3}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : <Loading />
}

export default SeatLayout
