'use client';

import Link from 'next/link';
import Navbar from './Navbar';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center pt-16 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hiring Badge */}
                    <div className="opacity-0 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-50 text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-green-200">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>We're Hiring — Delhi Office</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-4 sm:mb-6">
                       Building Future Of Ed-Tech <br />For South Africa.
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 sm:mb-10 opacity-0 animate-fade-in-up delay-400 leading-relaxed">
                        Building Future Of Ed-Tech For South Africa.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in-up delay-500">
                        <Link
                            href="/apply"
                            className="inline-flex items-center justify-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                        >
                            Apply Now
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Learn About Us
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-700">
                        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                            <span className="text-xs sm:text-sm text-gray-400 tracking-widest">SCROLL</span>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-4">
                        Why Join Our Team
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        We're building something meaningful. Here's what you can expect as a tutor.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                01
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Modern Office</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Work from our Delhi office with a collaborative team environment and all the tools you need.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                02
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Competitive Pay</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Earn competitive rates with on-time payments. Your expertise is valued here.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 sm:p-8 border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                03
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Real Impact</h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Help students who truly need it succeed in mathematics and change their futures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
                        <div>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">50+</div>
                            <div className="text-sm sm:text-base text-gray-400">Tutors on Team</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">4.9</div>
                            <div className="text-sm sm:text-base text-gray-400">Avg Tutor Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">500+</div>
                            <div className="text-sm sm:text-base text-gray-400">Students Impacted</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Delhi</div>
                            <div className="text-sm sm:text-base text-gray-400">Office Location</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 sm:py-12 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm sm:text-base text-gray-500">
                        © 2024 MatricMath. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
