"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Projects", href: "/projects" },
        { name: "Research", href: "/research" },
        { name: "Experience", href: "/experience" },
        { name: "Achievements", href: "/achievements" },
        { name: "Journey", href: "/journey" },
    ];

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
            <div className={`glass rounded-3xl px-6 py-3 shadow-sm transition-all duration-300 ${isOpen ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md' : ''}`}>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-outfit font-bold text-lg tracking-tight hover:opacity-70 transition-opacity z-50 relative">
                        <img src="https://simpleicons.org/icons/artifacthub.svg" alt="" className="w-5 h-5" />
                        Harsh Awasthi
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pl-4 border-l border-neutral-200 dark:border-neutral-800">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden z-50 relative">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-1 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isOpen && (
                    <div className="md:hidden pt-8 pb-4 space-y-4 animate-in slide-in-from-top-4 fade-in duration-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-medium text-foreground py-2 border-b border-dashed border-neutral-200 dark:border-neutral-800 last:border-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav >
    );
}
