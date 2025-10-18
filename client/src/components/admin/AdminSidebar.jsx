import React, { useState } from 'react'
import { LayoutDashboardIcon, ListCollapseIcon, PlusSquareIcon, ListIcon, MenuIcon, XIcon } from 'lucide-react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const user={
        firstName:'Admin',
        lastName:'User',
        imageUrl:assets.profile
    }

    const adminNavLinks=[
        {name:'Dashboard',path:'/admin',icon:LayoutDashboardIcon},
        {name:'Add Shows', path:'/admin/add-shows',icon:PlusSquareIcon},
        {name:'List Shows',path:'/admin/list-shows',icon:ListIcon},
        {name:'List Bookings', path:'/admin/list-bookings',icon:ListCollapseIcon}
    ]

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-purple-600 rounded-lg text-white shadow-lg"
      >
        {isSidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 transform transition-transform duration-300 ease-in-out
        h-full bg-gradient-to-b from-gray-900 to-black border-r border-gray-700
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full p-6 flex flex-col">
          {/* User Profile */}
          <div className="flex flex-col items-center mb-8">
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-purple-500/50 shadow-lg shadow-purple-500/20 mb-4"
            />
            <p className="text-lg lg:text-xl font-bold text-white text-center">
              {user.firstName} {user.lastName}
            </p>
            <span className="text-xs lg:text-sm text-gray-400 mt-1">Administrator</span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 lg:space-y-3 flex-1">
            {adminNavLinks.map((link, index) => (
              <NavLink 
                key={index} 
                to={link.path}
                end
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 lg:gap-4 px-3 lg:px-4 py-3 lg:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white border border-transparent hover:border-gray-600'
                  }`
                }
              >
                <link.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                <p className="font-semibold text-sm lg:text-base">{link.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar