"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    MdDashboard,
    MdSupportAgent,
    MdPeople,
    MdApartment,
    MdDescription,
    MdInsertChartOutlined,
    MdAssignment,
    MdChevronLeft,
    MdChevronRight
} from "react-icons/md";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: <MdDashboard size={24} />, path: "/dashboard" },
        { name: "Customers", icon: <MdSupportAgent size={24} />, path: "/customers" },
        { name: "Users", icon: <MdPeople size={24} />, path: "/users" },
        { name: "Institutions", icon: <MdApartment size={24} />, path: "/institutions" },
        { name: "Documents", icon: <MdDescription size={24} />, path: "/documents" },
        { name: "Reports", icon: <MdInsertChartOutlined size={24} />, path: "/reports" },
        { name: "Consents", icon: <MdAssignment size={24} />, path: "/consent-management" },
    ];

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`fixed left-0 top-16 bottom-0 z-40 flex flex-col bg-white shadow-xl transition-all duration-300 ease-in-out ${isCollapsed ? "w-[70px]" : "w-64"
                }`}
        >
            {/* Collapse Toggle */}
            <div className="absolute -right-3 top-6 z-50">
                <button
                    onClick={toggleSidebar}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
                >
                    {isCollapsed ? <MdChevronRight size={16} /> : <MdChevronLeft size={16} />}
                </button>
            </div>

            <div className="flex flex-col gap-4 py-6">
                {menuItems.map((item, index) => {
                    // Check active state
                    const isActive = pathname === item.path || (item.path !== "/dashboard" && pathname.startsWith(item.path));

                    return (
                        <Link
                            key={index}
                            href={item.path}
                            className={`relative flex items-center h-10 px-4 transition-colors ${isActive
                                    ? "text-navy font-bold"
                                    : "text-gray-400 hover:text-navy"
                                }`}
                        >
                            {/* Active Indicator Line */}
                            {isActive && (
                                <div className="absolute left-0 top-0 h-full w-1 rounded-r-md bg-navy" />
                            )}

                            <div className="flex items-center justify-center min-w-[30px]">
                                {item.icon}
                            </div>

                            {!isCollapsed && (
                                <span className="ml-3 whitespace-nowrap overflow-hidden">
                                    {item.name}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
