import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets'
import Loading from '../../components/Loading'
import { dateFormat } from '../../lib/dateFormat'
import Title from '../../components/admin/Title'

const ListBookings = () => {
    const currency = import.meta.env.VITE_CURRENCY 

    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllBookings = async () => {
        setBookings(dummyBookingData)
        setIsLoading(false)
    }

    useEffect(() => {
        getAllBookings();
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-900 p-6">
            <Title text1={"List"} text2={"Bookings"}/>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Movie name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Show Time</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Seats</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {bookings.map((item, index) => (
                                <tr key={index} className="hover:bg-white/5 transition-colors duration-200">
                                    <td className="px-6 py-4 text-sm font-medium text-white">{item.user.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">{item.show.movie.title}</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">{dateFormat(item.show.showDateTime)}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                            {Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(",")}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-green-400">
                                        {currency}{item.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListBookings