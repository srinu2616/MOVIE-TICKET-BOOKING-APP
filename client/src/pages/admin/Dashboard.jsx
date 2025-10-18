import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, StarIcon, UserIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Title from '../../components/admin/Title'
import BlurCircle from '../../components/BlurCircle'
import { dateFormat } from '../../lib/dateFormat'

const Dashboard = () => {
    const currency=import.meta.env.VITE_CURRENCY 

    const [dashbordData, setDashboardData]=useState({
        totalBookings:0,
        totalRevenue:0,
        activeShows:[],
        totalUser:0
    })

    const [loading,setLoading]=useState(true)

    const dashboardCards=[
        {title:"Total Bookings", value:dashbordData.totalBookings || "0", icon:ChartLineIcon, color:"blue"},
        {title:"Total Revenue", value:`${currency}${dashbordData.totalRevenue || "0"}`, icon:CircleDollarSignIcon, color:"green"},
        {title:"Active Shows", value:dashbordData.activeShows.length || "0", icon:PlayCircleIcon, color:"purple"},
        {title:"Total Users", value:dashbordData.totalUser || "0",icon:UserIcon, color:"orange"}
    ]

    const fetchDashboardData=async()=>{
        setDashboardData(dummyDashboardData)
        setLoading(false)
    }

    useEffect(()=>{
        fetchDashboardData();
    },[])

    
  return !loading ?(
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-900 text-white p-6">
        <Title text1={"Admin"} text2={"Dashboard"}/>
        
        <div className="relative">
            <BlurCircle top="-100px" left="0"/>
            
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dashboardCards.map((card,index)=>(
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-gray-300 text-sm font-medium mb-2">{card.title}</h1>
                                <p className="text-3xl font-bold text-white">{card.value}</p>
                            </div>
                            <div className={`p-3 rounded-xl bg-${card.color}-500/20`}>
                                <card.icon className={`w-6 h-6 text-${card.color}-400`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Shows Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-6">Active Shows</h2>
                <div className="relative">
                    <BlurCircle top="100px" left="-10px"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {dashbordData.activeShows.map((show)=>(
                            <div key={show._id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
                                <img 
                                    src={show.movie.poster_path} 
                                    alt={show.movie.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />
                                <p className="text-lg font-semibold text-white mb-2 line-clamp-2">{show.movie.title}</p>
                                
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-2xl font-bold text-green-400">{currency}{show.showPrice}</p>
                                    <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                                        <StarIcon className="w-4 h-4 text-yellow-400"/>
                                        <span className="text-yellow-400 text-sm font-medium">{show.movie.vote_average.toFixed(1)}</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 text-sm">{dateFormat(show.showDateTime)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  ):<Loading/>
}

export default Dashboard