import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DateSelect = ({ dateTime, id }) => {
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate()

    const onBookHandler = () => {
        if (!selected) {
            return toast("Please select a date")
        }
        navigate(`/movies/${id}/${selected}`)
        scrollTo(0, 0)
    }

    return (
        <div id='dateSelect' className="relative py-8 px-6 bg-gray-900 rounded-xl">
            <BlurCircle top="-100px" left="-100px"/>
            <BlurCircle top="100px" right="10px"/>
            
            <p className="text-2xl font-bold text-white text-center mb-6">Choose Date</p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
                <ChevronLeftIcon className="h-7 w-7 text-white cursor-pointer hover:text-red-400"/> 
                
                <div className="flex gap-3">
                    {Object.keys(dateTime).map((date) => (
                        <button 
                            onClick={() => setSelected(date)}
                            className={`
                                flex flex-col items-center p-4 rounded-lg min-w-[70px] transition-all
                                ${selected === date
                                    ? "bg-red-600 text-white shadow-lg"
                                    : "border border-gray-600 text-gray-300 hover:border-red-400"
                                }
                            `}
                            key={date}
                        >
                            <span className="text-lg font-bold">{new Date(date).getDate()}</span>
                            <span className="text-sm">{new Date(date).toLocaleDateString("en-US",{month:"short"})}</span>
                        </button>
                    ))}
                </div>
                
                <ChevronRightIcon className="h-7 w-7 text-white cursor-pointer hover:text-red-400"/>
            </div>
            
            <button 
                onClick={onBookHandler}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
                Book Now
            </button>
        </div>
    )
}

export default DateSelect