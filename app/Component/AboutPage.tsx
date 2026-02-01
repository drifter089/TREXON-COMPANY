'use client';

import Navbar from './Navbar';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="opacity-0 animate-fade-in-up">
                        <span className="text-xs sm:text-sm font-medium text-gray-500 tracking-widest">ABOUT US</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-4 mb-6 opacity-0 animate-fade-in-up delay-100">
                        Bridging Education<br />Across Continents
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl opacity-0 animate-fade-in-up delay-200">
                        We connect world-class mathematics tutors from India with South African matric students who deserve access to quality education.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">Our Mission</h2>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                Mathematics is the gateway to opportunity. Yet, too many South African matric students struggle without access to quality tutoring. We believe geography should not determine educational destiny.
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                By leveraging technology and India's exceptional pool of mathematics educators, we deliver affordable, high-quality tutoring to students who need it most.
                            </p>
                        </div>
                        <div className="bg-black text-white p-6 sm:p-8 lg:p-10">
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">∞</div>
                            <p className="text-lg sm:text-xl font-medium">Unlimited Potential</p>
                            <p className="text-sm sm:text-base text-gray-400 mt-2">Every student deserves a chance to excel</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-10 sm:mb-14">Our Values</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl font-bold">
                                E
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Excellence</h3>
                            <p className="text-sm text-gray-600">Nothing less than the best for our students</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl font-bold">
                                A
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Accessibility</h3>
                            <p className="text-sm text-gray-600">Quality education for every student</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl font-bold">
                                I
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Innovation</h3>
                            <p className="text-sm text-gray-600">Technology-driven learning solutions</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl font-bold">
                                I
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">Impact</h3>
                            <p className="text-sm text-gray-600">Measurable results that matter</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">Our Team</h2>
                    <p className="text-sm sm:text-base text-gray-400 text-center max-w-xl mx-auto mb-10 sm:mb-14">
                        A dedicated group of educators, technologists, and change-makers committed to transforming education.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="border border-gray-700 p-6 sm:p-8 hover:border-white transition-colors duration-300">
                            <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-xl font-bold mb-4">
                                DL
                            </div>
                            <h3 className="text-lg font-bold mb-1">Delhi Leadership</h3>
                            <p className="text-sm text-gray-400">Tutor Operations</p>
                        </div>

                        <div className="border border-gray-700 p-6 sm:p-8 hover:border-white transition-colors duration-300">
                            <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-xl font-bold mb-4">
                                SA
                            </div>
                            <h3 className="text-lg font-bold mb-1">SA Team</h3>
                            <p className="text-sm text-gray-400">Student Success</p>
                        </div>

                        <div className="border border-gray-700 p-6 sm:p-8 hover:border-white transition-colors duration-300">
                            <div className="w-16 h-16 bg-white text-black flex items-center justify-center text-xl font-bold mb-4">
                                TK
                            </div>
                            <h3 className="text-lg font-bold mb-1">Tech Team</h3>
                            <p className="text-sm text-gray-400">Platform Development</p>
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
