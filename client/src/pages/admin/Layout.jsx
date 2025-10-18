import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-dark-900 to-gray-900">
            <AdminNavbar />
            <div className="flex h-screen">
                {/* Sidebar */}
                <div className="w-64 flex-shrink-0 bg-gray-800/80 backdrop-blur-lg shadow-2xl border-r border-gray-700">
                    <AdminSidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <main className="flex-1 overflow-auto p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                        <div className="max-w-7xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout