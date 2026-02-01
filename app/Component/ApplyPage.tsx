'use client';

import Link from 'next/link';
import Navbar from './Navbar';

export default function ApplyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="opacity-0 animate-fade-in-up">
                        <span className="text-xs sm:text-sm font-medium text-gray-500 tracking-widest">JOIN US</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-4 mb-6 opacity-0 animate-fade-in-up delay-100">
                        Be Part of the<br />Change
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl opacity-0 animate-fade-in-up delay-200">
                        Join our team of passionate educators and help transform mathematics education for South African students.
                    </p>
                </div>
            </section>

            {/* Roles Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-10 sm:mb-14">Open Positions</h2>

                    <div className="space-y-4 sm:space-y-6">
                        {/* Role 1 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-black transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Mathematics Tutor</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Remote</span>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Part-time / Full-time</span>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Delhi, India</span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Role 2 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-black transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Student Success Manager</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">On-site</span>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Full-time</span>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">South Africa</span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Role 3 */}
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 hover:border-black transition-all duration-300 group">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Software Engineer</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Remote</span>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Full-time</span>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1">Global</span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8">What We Look For</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">✓</div>
                                    <p className="text-sm sm:text-base text-gray-600">Strong mathematical foundation and teaching experience</p>
                                </li>
                                <li className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">✓</div>
                                    <p className="text-sm sm:text-base text-gray-600">Passion for education and student success</p>
                                </li>
                                <li className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">✓</div>
                                    <p className="text-sm sm:text-base text-gray-600">Excellent communication skills in English</p>
                                </li>
                                <li className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">✓</div>
                                    <p className="text-sm sm:text-base text-gray-600">Reliable internet connection and quiet workspace</p>
                                </li>
                                <li className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs sm:text-sm">✓</div>
                                    <p className="text-sm sm:text-base text-gray-600">Commitment to making a difference</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black text-white p-6 sm:p-8 lg:p-10">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ready to Apply?</h3>
                            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                                Send us your CV and a brief introduction about why you want to join our mission.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-1">Email us at</p>
                                    <p className="text-base sm:text-lg font-medium">careers@matricmath.com</p>
                                </div>
                                <div className="pt-4 border-t border-gray-700">
                                    <p className="text-xs sm:text-sm text-gray-400">Response time</p>
                                    <p className="text-base sm:text-lg font-medium">Within 48 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">Not ready to apply?</h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
                        Learn more about our mission and the impact we're making.
                    </p>
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300"
                    >
                        About Us
                    </Link>
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
