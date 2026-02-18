"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="flex min-h-screen flex-col bg-brand-bg relative">
            <Header />
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            {/* Main Content Area */}
            {/* 
         pt-20:  Header is h-16 (64px) + 1rem (16px) space = 80px (5rem)
         pb-8 :  Bottom spacing
         ml-transition: Handles sidebar expansion
         overflow-visible: Default, allows body scroll
      */}
            <main
                className={`flex-1 transition-all duration-300 ease-in-out p-4 pt-24 md:p-8 md:pt-24 ${isCollapsed ? "ml-[70px]" : "ml-64"
                    }`}
            >
                {children}
            </main>
        </div>
    );
}
