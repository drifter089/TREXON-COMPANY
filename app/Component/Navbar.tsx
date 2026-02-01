'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight">
                    MATRIC<span className="text-gray-400">MATH</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/apply"
                            className="hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
                        >
                            APPLY
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 mt-4' : 'max-h-0'}`}>
                <ul className="flex flex-col space-y-4 pb-4">
                    <li>
                        <Link
                            href="/"
                            className="block hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
                            onClick={() => setIsOpen(false)}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
                            onClick={() => setIsOpen(false)}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/apply"
                            className="block hover:text-gray-300 transition-colors duration-200 font-medium text-sm tracking-wide"
                            onClick={() => setIsOpen(false)}
                        >
                            APPLY
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
