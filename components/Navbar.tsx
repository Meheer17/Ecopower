"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="fixed bg-white w-full h-32 font md:px-16 px-2 z-50">
            <div className="text-black md:px-8 mx-auto flex flex-row justify-between items-center h-full">
                <Link href="/">
                    <div className="text-3xl font-bold tracking-[10px]">
                        ECOPOWER <br />
                        ELECTRICALS
                    </div>
                </Link>
                <div className="md:hidden flex items-center bg-white">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {!isMenuOpen ? <Menu size={34} /> : <X size={34} />}
                    </button>
                </div>
                <div
                    className={`md:hidden bg-white w-full mt-[50vh] fixed left-0 shadow-md transition-all duration-300 ${
                        isMenuOpen
                            ? "mt-96 opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                    <div className="flex flex-col space-y-4 py-4 px-6">
                        <Link href={"/about"} onClick={toggleMenu}>
                            <div
                                className={`text-lg tracking-widest font-thin p-4 hover:text-orange-500 ${
                                    path === "/about" ? "text-orange-500" : ""
                                }`}
                            >
                                About
                            </div>
                        </Link>
                        <Link href={"/services"} onClick={toggleMenu}>
                            <div
                                className={`text-lg tracking-widest font-thin p-4 hover:text-orange-500 ${
                                    path === "/services" ? "text-orange-500" : ""
                                }`}
                            >
                                Services
                            </div>
                        </Link>
                        <Link href={"/projects"} onClick={toggleMenu}>
                            <div
                                className={`text-lg tracking-widest font-thin p-4 hover:text-orange-500 ${
                                    path === "/projects" ? "text-orange-500" : ""
                                }`}
                            >
                                Projects
                            </div>
                        </Link>
                        <Link href={"/technology"} onClick={toggleMenu}>
                            <div
                                className={`text-lg tracking-widest font-thin p-4 hover:text-orange-500 ${
                                    path === "/technology" ? "text-orange-500" : ""
                                }`}
                            >
                                Technology
                            </div>
                        </Link>
                        <Link href={"/contact"} onClick={toggleMenu}>
                            <div
                                className={`text-lg tracking-widest font-thin p-4 hover:text-orange-500 ${
                                    path === "/contact" ? "text-orange-500" : ""
                                }`}
                            >
                                Contact
                            </div>
                        </Link>
                        
                    </div>
                </div>
                <div className="hidden md:block">
                    <ul className="flex flex-row space-x-8">
                        <li className="text-lg tracking-widest font-thin p-4 hover:text-orange-500">
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li className="text-lg tracking-widest font-thin p-4 hover:text-orange-500">
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li className="text-lg tracking-widest font-thin p-4 hover:text-orange-500">
                            <Link href={"/projects"}>Projects</Link>
                        </li>
                        <li className="text-lg tracking-widest font-thin p-4 hover:text-orange-500">
                            <Link href={"/technology"}>Technology</Link>
                        </li>
                        <li className="text-lg tracking-widest font-thin p-4 hover:text-orange-500">
                            <Link href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
