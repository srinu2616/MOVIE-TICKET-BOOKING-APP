// import React, { useEffect, useState } from 'react'
// import { dummyBookingData } from '../assets/assets'
// import Loading from '../components/Loading'
// import BlurCircle from '../components/BlurCircle'
// import timeFormat from '../lib/timeFormat'
// import { dateFormat } from '../lib/dateFormat'
// import { CalendarIcon, ClockIcon, TicketIcon, WalletIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react'

// const MyBookings = () => {
//     const currency = import.meta.env.VITE_CURRENCY 
//     const [bookings, setBookings] = useState([])
//     const [isLoading, setIsLoading] = useState(true)

//     const getMyBookings = async () => {
//         // Simulate API call
//         setTimeout(() => {
//             setBookings(dummyBookingData)
//             setIsLoading(false)
//         }, 1000)
//     }

//     useEffect(() => {
//         getMyBookings()
//     }, [])

//     return !isLoading ? (
//         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-dark-900 to-slate-900 text-white">
//             {/* Background Effects */}
//             <BlurCircle top="100px" left="100px" />
//             <BlurCircle top="0px" left="600px" />
            
//             <div className="container mx-auto px-4 py-8 max-w-6xl">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
//                         My Bookings
//                     </h1>
//                     <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//                         Manage your movie tickets and upcoming shows in one place
//                     </p>
//                 </div>

//                 {/* Bookings List */}
//                 <div className="space-y-6">
//                     {bookings.length > 0 ? (
//                         bookings.map((item, index) => (
//                             <div 
//                                 key={index}
//                                 className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]"
//                             >
//                                 <div className="p-6 sm:p-8">
//                                     <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
//                                         {/* Movie Poster */}
//                                         <div className="flex-shrink-0">
//                                             <img 
//                                                 src={item.show.movie.poster_path} 
//                                                 alt={item.show.movie.title}
//                                                 className="w-32 h-48 sm:w-40 sm:h-56 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
//                                             />
//                                         </div>

//                                         {/* Booking Details */}
//                                         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
//                                             {/* Movie Info */}
//                                             <div className="space-y-4">
//                                                 <div>
//                                                     <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
//                                                         {item.show.movie.title}
//                                                     </h2>
//                                                     <div className="flex flex-wrap gap-4 text-sm text-gray-300">
//                                                         <div className="flex items-center gap-2">
//                                                             <ClockIcon className="w-4 h-4 text-primary" />
//                                                             <span>{timeFormat(item.show.movie.runtime)}</span>
//                                                         </div>
//                                                         <div className="flex items-center gap-2">
//                                                             <CalendarIcon className="w-4 h-4 text-primary" />
                                                            
//                                                             <span>{dateFormat(item.show.showDateTime)}</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 {/* Seat Information */}
//                                                 <div className="space-y-3">
//                                                     <div className="flex items-center gap-2">
//                                                         <TicketIcon className="w-5 h-5 text-primary" />
//                                                         <span className="font-semibold text-white">Ticket Details</span>
//                                                     </div>
//                                                     <div className="space-y-2 text-sm">
//                                                         <p className="flex justify-between">
//                                                             <span className="text-gray-300">Total Tickets:</span>
//                                                             <span className="font-semibold text-white">
//                                                                 {item.bookedSeats.length}
//                                                             </span>
//                                                         </p>
//                                                         <p className="flex justify-between">
//                                                             <span className="text-gray-300">Seat Numbers:</span>
//                                                             <span className="font-semibold text-primary">
//                                                                 {item.bookedSeats.join(", ")}
//                                                             </span>
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             {/* Payment & Actions */}
//                                             <div className="space-y-6">
//                                                 {/* Amount & Status */}
//                                                 <div className="bg-black/30 rounded-xl p-4 border border-white/10">
//                                                     <div className="flex items-center justify-between mb-3">
//                                                         <div className="flex items-center gap-2">
//                                                             <WalletIcon className="w-5 h-5 text-primary" />
//                                                             <span className="font-semibold text-white">Amount</span>
//                                                         </div>
//                                                         <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
//                                                             item.isPaid 
//                                                                 ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
//                                                                 : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
//                                                         }`}>
//                                                             {item.isPaid ? (
//                                                                 <>
//                                                                     <CheckCircleIcon className="w-4 h-4" />
//                                                                     Paid
//                                                                 </>
//                                                             ) : (
//                                                                 <>
//                                                                     <XCircleIcon className="w-4 h-4" />
//                                                                     Pending
//                                                                 </>
//                                                             )}
//                                                         </div>
//                                                     </div>
//                                                     <div className="text-3xl font-bold text-white text-center">
//                                                         {currency}{item.amount}
//                                                     </div>
//                                                 </div>

//                                                 {/* Action Button */}
//                                                 <div className="text-center">
//                                                     {!item.isPaid ? (
//                                                         <button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
//                                                             Pay Now
//                                                         </button>
//                                                     ) : (
//                                                         <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                                                             Download Ticket
//                                                         </button>
//                                                     )}
//                                                 </div>

//                                                 {/* Additional Info */}
//                                                 <div className="text-center">
//                                                     <p className="text-xs text-gray-400">
//                                                         Booking ID: <span className="text-gray-300">{item._id || `BK${Date.now()}`}</span>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Status Bar */}
//                                 <div className={`px-6 py-3 border-t ${
//                                     item.isPaid 
//                                         ? 'bg-green-500/10 border-green-500/20' 
//                                         : 'bg-yellow-500/10 border-yellow-500/20'
//                                 }`}>
//                                     <div className="flex items-center justify-between text-sm">
//                                         <span className={item.isPaid ? 'text-green-300' : 'text-yellow-300'}>
//                                             {item.isPaid ? 'Payment Completed' : 'Payment Pending'}
//                                         </span>
//                                         <span className="text-gray-400">
//                                             {item.bookingDate ? `Booked on ${dateFormat(item.bookingDate)}` : 'Recent booking'}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         /* Empty State */
//                         <div className="text-center py-16">
//                             <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
//                                 <TicketIcon className="w-24 h-24 text-gray-500 mx-auto mb-6" />
//                                 <h3 className="text-2xl font-bold text-gray-300 mb-4">No Bookings Yet</h3>
//                                 <p className="text-gray-400 max-w-md mx-auto mb-6">
//                                     You haven't made any bookings yet. Start by exploring our latest movies and book your tickets!
//                                 </p>
//                                 <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
//                                     Browse Movies
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Stats Summary */}
//                 {bookings.length > 0 && (
//                     <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
//                         <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
//                             <div className="text-3xl font-bold text-primary mb-2">{bookings.length}</div>
//                             <div className="text-gray-300">Total Bookings</div>
//                         </div>
//                         <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
//                             <div className="text-3xl font-bold text-green-500 mb-2">
//                                 {bookings.filter(b => b.isPaid).length}
//                             </div>
//                             <div className="text-gray-300">Confirmed</div>
//                         </div>
//                         <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
//                             <div className="text-3xl font-bold text-yellow-500 mb-2">
//                                 {bookings.filter(b => !b.isPaid).length}
//                             </div>
//                             <div className="text-gray-300">Pending Payment</div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     ) : <Loading />
// }

// export default MyBookings




import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'
import { dateFormat } from '../lib/dateFormat'
import { CalendarIcon, ClockIcon, TicketIcon, WalletIcon, CheckCircleIcon, XCircleIcon, DownloadIcon } from 'lucide-react'
import jsPDF from 'jspdf'

const MyBookings = () => {
    const currency = import.meta.env.VITE_CURRENCY 
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [downloadingId, setDownloadingId] = useState(null)

    const getMyBookings = async () => {
        // Simulate API call
        setTimeout(() => {
            setBookings(dummyBookingData)
            setIsLoading(false)
        }, 1000)
    }

    const generateTicketPDF = (booking, index) => {
        setDownloadingId(booking._id || index)
        
        try {
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            })

            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()

            // Set background
            pdf.setFillColor(15, 23, 42) // slate-900
            pdf.rect(0, 0, pdfWidth, pdfHeight, 'F')
            
            // Title
            pdf.setFontSize(24)
            pdf.setTextColor(139, 92, 246) // primary color
            pdf.text('MOVIE TICKET', pdfWidth / 2, 30, { align: 'center' })

            pdf.setFontSize(12)
            pdf.setTextColor(156, 163, 175) // gray-400
            pdf.text('Cinema Experience', pdfWidth / 2, 40, { align: 'center' })

            // Movie Title
            pdf.setFontSize(20)
            pdf.setTextColor(255, 255, 255)
            const movieTitle = booking.show.movie.title
            // Split long titles into multiple lines
            const titleLines = pdf.splitTextToSize(movieTitle, pdfWidth - 40)
            pdf.text(titleLines, pdfWidth / 2, 60, { align: 'center' })

            // Movie Details Box
            pdf.setFillColor(255, 255, 255, 0.1)
            pdf.roundedRect(20, 80, pdfWidth - 40, 30, 3, 3, 'F')
            
            pdf.setFontSize(12)
            pdf.setTextColor(156, 163, 175)
            pdf.text('Date:', 30, 95)
            pdf.text('Duration:', 30, 110)
            
            pdf.setTextColor(255, 255, 255)
            pdf.text(dateFormat(booking.show.showDateTime || booking.show.movie.showDateTime), 60, 95)
            pdf.text(timeFormat(booking.show.movie.runtime), 60, 110)

            // Ticket Details Box
            pdf.setFillColor(255, 255, 255, 0.1)
            pdf.roundedRect(20, 125, pdfWidth - 40, 70, 3, 3, 'F')
            
            pdf.setFontSize(16)
            pdf.setTextColor(139, 92, 246)
            pdf.text('TICKET DETAILS', 30, 140)

            pdf.setFontSize(10)
            pdf.setTextColor(156, 163, 175)
            
            let yPos = 150
            const details = [
                `Seats: ${booking.bookedSeats.join(', ')}`,
                `Total Tickets: ${booking.bookedSeats.length}`,
                `Amount: ${currency}${booking.amount}`,
                `Status: ${booking.isPaid ? 'Confirmed' : 'Pending'}`,
                `Booking ID: ${booking._id || `BK${Date.now()}`}`
            ]

            details.forEach(detail => {
                pdf.text(detail, 30, yPos)
                yPos += 7
            })

            // Footer
            pdf.setFontSize(10)
            pdf.setTextColor(156, 163, 175)
            pdf.text('Thank you for choosing our cinema!', pdfWidth / 2, pdfHeight - 20, { align: 'center' })
            pdf.text('Present this ticket at the counter for entry.', pdfWidth / 2, pdfHeight - 10, { align: 'center' })

            // Save PDF
            const fileName = `ticket-${movieTitle.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`
            pdf.save(fileName)
            
        } catch (error) {
            console.error('Error generating PDF:', error)
            alert('Failed to download ticket. Please try again.')
        } finally {
            setDownloadingId(null)
        }
    }

    useEffect(() => {
        getMyBookings()
    }, [])

    return !isLoading ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-dark-900 to-slate-900 text-white">
            {/* Background Effects */}
            <BlurCircle top="100px" left="100px" />
            <BlurCircle top="0px" left="600px" />
            
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                        My Bookings
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Manage your movie tickets and upcoming shows in one place
                    </p>
                </div>

                {/* Bookings List */}
                <div className="space-y-6">
                    {bookings.length > 0 ? (
                        bookings.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                {/* Visible Booking Card */}
                                <div className="p-6 sm:p-8">
                                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                        {/* Movie Poster */}
                                        <div className="flex-shrink-0">
                                            <img 
                                                src={item.show.movie.poster_path} 
                                                alt={item.show.movie.title}
                                                className="w-32 h-48 sm:w-40 sm:h-56 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Booking Details */}
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Movie Info */}
                                            <div className="space-y-4">
                                                <div>
                                                    <h2 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                                                        {item.show.movie.title}
                                                    </h2>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                                                        <div className="flex items-center gap-2">
                                                            <ClockIcon className="w-4 h-4 text-primary" />
                                                            <span>{timeFormat(item.show.movie.runtime)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <CalendarIcon className="w-4 h-4 text-primary" />
                                                            <span>{dateFormat(item.show.showDateTime || item.show.movie.showDateTime)}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Seat Information */}
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <TicketIcon className="w-5 h-5 text-primary" />
                                                        <span className="font-semibold text-white">Ticket Details</span>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p className="flex justify-between">
                                                            <span className="text-gray-300">Total Tickets:</span>
                                                            <span className="font-semibold text-white">
                                                                {item.bookedSeats.length}
                                                            </span>
                                                        </p>
                                                        <p className="flex justify-between">
                                                            <span className="text-gray-300">Seat Numbers:</span>
                                                            <span className="font-semibold text-primary">
                                                                {item.bookedSeats.join(", ")}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment & Actions */}
                                            <div className="space-y-6">
                                                {/* Amount & Status */}
                                                <div className="bg-black/30 rounded-xl p-4 border border-white/10">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <WalletIcon className="w-5 h-5 text-primary" />
                                                            <span className="font-semibold text-white">Amount</span>
                                                        </div>
                                                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
                                                            item.isPaid 
                                                                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                                                                : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                                                        }`}>
                                                            {item.isPaid ? (
                                                                <>
                                                                    <CheckCircleIcon className="w-4 h-4" />
                                                                    Paid
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <XCircleIcon className="w-4 h-4" />
                                                                    Pending
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-white text-center">
                                                        {currency}{item.amount}
                                                    </div>
                                                </div>

                                                {/* Action Button */}
                                                <div className="text-center">
                                                    {!item.isPaid ? (
                                                        <button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
                                                            Pay Now
                                                        </button>
                                                    ) : (
                                                        <button 
                                                            onClick={() => generateTicketPDF(item, index)}
                                                            disabled={downloadingId === (item._id || index)}
                                                            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                                        >
                                                            {downloadingId === (item._id || index) ? (
                                                                <>
                                                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                                                    Generating...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <DownloadIcon className="w-4 h-4" />
                                                                    Download Ticket
                                                                </>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Additional Info */}
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-400">
                                                        Booking ID: <span className="text-gray-300">{item._id || `BK${Date.now()}`}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className={`px-6 py-3 border-t ${
                                    item.isPaid 
                                        ? 'bg-green-500/10 border-green-500/20' 
                                        : 'bg-yellow-500/10 border-yellow-500/20'
                                }`}>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className={item.isPaid ? 'text-green-300' : 'text-yellow-300'}>
                                            {item.isPaid ? 'Payment Completed' : 'Payment Pending'}
                                        </span>
                                        <span className="text-gray-400">
                                            {item.bookingDate ? `Booked on ${dateFormat(item.bookingDate)}` : 'Recent booking'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        /* Empty State */
                        <div className="text-center py-16">
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
                                <TicketIcon className="w-24 h-24 text-gray-500 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-gray-300 mb-4">No Bookings Yet</h3>
                                <p className="text-gray-400 max-w-md mx-auto mb-6">
                                    You haven't made any bookings yet. Start by exploring our latest movies and book your tickets!
                                </p>
                                <button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                                    Browse Movies
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Stats Summary */}
                {bookings.length > 0 && (
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{bookings.length}</div>
                            <div className="text-gray-300">Total Bookings</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                            <div className="text-3xl font-bold text-green-500 mb-2">
                                {bookings.filter(b => b.isPaid).length}
                            </div>
                            <div className="text-gray-300">Confirmed</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                            <div className="text-3xl font-bold text-yellow-500 mb-2">
                                {bookings.filter(b => !b.isPaid).length}
                            </div>
                            <div className="text-gray-300">Pending Payment</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    ) : <Loading />
}

export default MyBookings