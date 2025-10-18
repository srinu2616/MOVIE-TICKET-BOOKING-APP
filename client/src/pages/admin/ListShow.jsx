import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Title from '../../components/admin/Title'
import { dateFormat } from '../../lib/dateFormat'

const ListShow = () => {

    const currency = import.meta.env.VITE_CURRENCY

    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllShows = async () => {

        try {
            setShows([{
                movie: dummyShowsData[0],
                showDateTime: "2025-06-30T02:30:00.000Z",
                showPrice: 59,
                occupiedSeats: {
                    "A1": "user_1",
                    "B1": "user_2",
                    "C1": "user_3"
                },
            }])
            setLoading(false)
        }
        catch(error){
            console.error(error)
        }

    }

    useEffect(()=>{
        getAllShows();
    },[])


    return !loading ?(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-900 p-6">
            <Title text1={'List'} text2={'Show'}/>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Movie Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Show Time</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Total Bookings</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Earnings</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-white/10">
                        {shows.map((show,index)=>(
                            <tr key={index} className="hover:bg-white/5 transition-colors duration-200">
                                <td className="px-6 py-4 text-sm font-medium text-white">{show.movie.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-300">{dateFormat(show.showDateTime)}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                        {Object.keys(show.occupiedSeats).length}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold text-green-400">
                                    {currency}{Object.keys(show.occupiedSeats).length*show.showPrice}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ):<Loading/>
}

export default ListShow