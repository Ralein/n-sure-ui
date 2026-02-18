"use client";

import React from "react";
import Link from "next/link";
import {
    MdFullscreen,
    MdNotificationsNone,
    MdPerson
} from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-navy px-6 py-4 text-white shadow-md">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
                <div className="flex items-baseline text-2xl font-bold tracking-tight">
                    <span className="text-brand-orange">?</span>
                    <span className="ml-1 text-white">n-sure</span>
                    <span className="ml-1 text-xs font-normal text-gray-300">OFI</span>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Fullscreen Icon */}
                <button className="rounded-full p-2 hover:bg-navy-light text-gray-300 hover:text-white transition-colors">
                    <MdFullscreen size={24} />
                </button>

                {/* User Info */}
                <div className="flex items-center gap-3 pl-4 border-l border-navy-light">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-light text-white">
                        <BiUserCircle size={28} className="text-gray-300" />
                    </div>
                    <div className="hidden md:flex flex-col text-sm">
                        <span className="font-medium text-white">test-name@gmail.com</span>
                        <span className="text-xs text-gray-400">Admin ▾</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
