import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  return (
    <div className="bg-dark shadow-md border-b border-gray-200 px-6 py-4">
        <Link to='/'>
            <img 
                src={assets.logo} 
                alt='Logo' 
                className="h-8 w-auto"
            />
        </Link>
    </div>
  )
}

export default AdminNavbar