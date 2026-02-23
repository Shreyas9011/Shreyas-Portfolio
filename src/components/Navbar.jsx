import React, { useState, useEffect } from "react";

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Track which section is currently in view using IntersectionObserver
    useEffect(() => {
        const sectionIds = navItems.map((item) => item.toLowerCase());
        const observers = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleClick = (item) => {
        setActiveSection(item.toLowerCase());
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-40 top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-slate-50 tracking-tight">Shreyas Shirsawade</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.toLowerCase();
                        return (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => handleClick(item)}
                                className={`relative py-1 transition-colors duration-200 ${isActive
                                        ? 'text-emerald-400'
                                        : 'text-slate-400 hover:text-emerald-400'
                                    }`}
                            >
                                {item}
                                {/* Animated gradient underline */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-300 ease-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                                        }`}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-400 hover:text-emerald-400 focus:outline-none transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-4">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.toLowerCase();
                        return (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => handleClick(item)}
                                className={`block text-base font-medium transition-colors ${isActive
                                        ? 'text-emerald-400 border-l-2 border-emerald-500 pl-3'
                                        : 'text-slate-300 hover:text-emerald-400 pl-0'
                                    }`}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
