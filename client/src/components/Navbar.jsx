import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, X, User, Star, Clapperboard, Film, Home, Calendar, TicketPlus } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Movies', path: '/movies', icon: Film },
        { name: 'Theaters', path: '/theaters', icon: Clapperboard },
        { name: 'Releases', path: '/releases', icon: Calendar },
        { name: 'Favourites', path: '/favourite', icon: Star }
    ]

    const isActivePath = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname.startsWith(path)
    }

    const handleSignIn = () => {
        openSignIn()
        setIsOpen(false) // Close mobile menu after clicking sign in
    }

    return (
        <>
            {/* Background Blur Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Main Navbar */}
            <nav className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
                ${isScrolled 
                    ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-2 border-b border-gray-800/50' 
                    : 'bg-transparent py-4'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo with Glow Effect */}
                        <Link 
                            to='/' 
                            className="group relative flex-shrink-0"
                        >
                            <div className="absolute -inset-4 bg-red-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img 
                                src={assets.logo} 
                                alt="CineVerse" 
                                className="h-8 w-auto relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                            />
                        </Link>

                        {/* Desktop Navigation with Animated Underline */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = isActivePath(item.path)
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`
                                            relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 group
                                            ${isActive 
                                                ? 'text-white' 
                                                : 'text-gray-300 hover:text-white'
                                            }
                                        `}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-red-400' : 'text-gray-400 group-hover:text-red-300'}`} />
                                            <span>{item.name}</span>
                                        </div>
                                        
                                        {/* Animated Underline */}
                                        <div className={`
                                            absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full
                                            transition-all duration-500 transform origin-left
                                            ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                        `} />
                                        
                                        {/* Hover Background Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Search and Auth Section */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* Advanced Search with Expand Animation */}
                            <div className="relative group">
                                <div className={`
                                    flex items-center bg-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl
                                    transition-all duration-500 overflow-hidden
                                    ${searchQuery ? 'w-80 shadow-lg shadow-red-500/10' : 'w-12 hover:w-80'}
                                `}>
                                    <div className="p-3 text-gray-400 group-hover:text-white transition-colors">
                                        <Search className="h-4 w-4" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search movies, series..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full pr-4 py-3 transition-all duration-500"
                                    />
                                </div>
                                
                                {/* Search Suggestions Dropdown */}
                                {searchQuery && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/50 p-4 animate-in fade-in duration-300">
                                        <div className="text-gray-400 text-sm">Search results for "{searchQuery}"</div>
                                    </div>
                                )}
                            </div>

                            {!user ? (
                                /* Gradient Login Button with Pulse Effect */
                                <button onClick={openSignIn} className="
                                    relative bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 hover:from-red-600 hover:via-pink-600 hover:to-purple-700 
                                    text-white px-8 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 transform 
                                    hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center space-x-2 group
                                    before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                                ">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                                    <User className="h-4 w-4 relative z-10" />
                                    <span className="relative z-10">Login</span>
                                    
                                    {/* Animated Border */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm group-hover:blur-0" />
                                </button>
                            ) : (
                                <UserButton >
                                    <UserButton.MenuItems>
                                        <UserButton.Action 
                                            label="My Bookings" 
                                            labelIcon={<TicketPlus size={15} />}
                                            onClick={() => navigate('/my-bookings')}
                                        />
                                    </UserButton.MenuItems>
                                </UserButton>
                            )}
                        </div>

                        {/* Mobile Menu Button with Animation */}
                        <div className="lg:hidden flex items-center space-x-3">
                            <div className={`
                                p-2 rounded-xl transition-all duration-500
                                ${searchQuery ? 'bg-red-500/20 border border-red-500/30' : 'bg-gray-800/50 hover:bg-gray-700/50'}
                            `}>
                                <Search className="h-5 w-5 text-gray-300" />
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`
                                    p-2 rounded-xl border transition-all duration-500 backdrop-blur-lg
                                    ${isOpen 
                                        ? 'bg-red-500/20 border-red-500/30 text-white rotate-180' 
                                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600/50'
                                    }
                                `}
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Advanced Mobile Menu */}
                <div className={`
                    lg:hidden fixed top-0 right-0 h-full w-80 max-w-full bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50
                    transform transition-all duration-700 ease-in-out z-50
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Mobile Menu Header */}
                    <div className="p-6 border-b border-gray-800/50">
                        <div className="flex items-center justify-between">
                            <img src={assets.logo} alt="CineVerse" className="h-7 w-auto" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl bg-gray-800/50 hover:bg-red-500/20 transition-all duration-300"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Items */}
                    <div className="p-6 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = isActivePath(item.path)
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                                        flex items-center space-x-3 p-4 rounded-2xl transition-all duration-500 group
                                        ${isActive 
                                            ? 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-white' 
                                            : 'bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white'
                                        }
                                    `}
                                >
                                    <Icon className={`h-5 w-5 ${isActive ? 'text-red-400' : 'text-gray-400 group-hover:text-red-300'}`} />
                                    <span className="font-semibold">{item.name}</span>
                                    {isActive && (
                                        <div className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Mobile Search */}
                    <div className="p-6 border-t border-gray-800/50">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/30 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Mobile Auth Section */}
                    <div className="p-6">
                        {!user ? (
                            /* Mobile Login Button */
                            <button 
                                onClick={handleSignIn}
                                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 flex items-center justify-center space-x-2"
                            >
                                <User className="h-5 w-5" />
                                <span>Sign In</span>
                            </button>
                        ) : (
                            /* Mobile User Info and Actions */
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-2xl">
                                    <UserButton afterSignOutUrl="/" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white font-semibold truncate">
                                            {user.fullName || user.primaryEmailAddress?.emailAddress}
                                        </p>
                                        <p className="text-gray-400 text-sm truncate">
                                            {user.primaryEmailAddress?.emailAddress}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Mobile User Actions */}
                                <button 
                                    onClick={() => {
                                        navigate('/my-bookings')
                                        setIsOpen(false)
                                    }}
                                    className="w-full flex items-center space-x-3 p-4 bg-gray-800/30 hover:bg-gray-700/50 rounded-2xl transition-all duration-300 text-white"
                                >
                                    <TicketPlus className="h-5 w-5" />
                                    <span className="font-semibold">My Bookings</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-20" />
        </>
    )
}

export default Navbar