"use client";

import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import ConsentPieChart from "@/components/dashboard/ConsentPieChart";
import TppBarChart from "@/components/dashboard/TppBarChart";
import MonthlyQuoteBarChart from "@/components/dashboard/MonthlyQuoteBarChart";
import LobPieChart from "@/components/dashboard/LobPieChart";
import ApiSuccessPieChart from "@/components/dashboard/ApiSuccessPieChart";
import { MdInsertChart, MdErrorOutline, MdAccessTime, MdOutlinePauseCircle, MdDescription } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Dashboard</h1>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
                <StatCard
                    title="ACTIVE CONSENTS"
                    count="527"
                    icon={MdInsertChart}
                    iconBgColor="bg-[#E0F7FA]"
                    iconColor="text-[#00BCD4]"
                />
                <StatCard
                    title="REVOKED CONSENTS"
                    count="98"
                    icon={MdErrorOutline}
                    iconBgColor="bg-[#FFF3E0]"
                    iconColor="text-[#FF9800]"
                />
                <StatCard
                    title="EXPIRED CONSENTS"
                    count="30469"
                    icon={MdAccessTime}
                    iconBgColor="bg-[#F3E5F5]"
                    iconColor="text-[#9C27B0]"
                />
                <StatCard
                    title="SUSPENED CONSENTS"
                    count="0"
                    icon={MdOutlinePauseCircle}
                    iconBgColor="bg-[#E8EAF6]"
                    iconColor="text-[#3F51B5]"
                />
                <StatCard
                    title="QUOTES GENERATED"
                    count="2642"
                    icon={MdDescription}
                    iconBgColor="bg-[#E1F5FE]"
                    iconColor="text-[#03A9F4]"
                />
            </div>

            {/* Selectors Row */}
            <div className="flex justify-end gap-4">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Select Year</label>
                    <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-navy outline-none focus:ring-2 focus:ring-navy-light">
                        <option>2026</option>
                        <option>2025</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500 mb-1">Select Month</label>
                    <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-navy outline-none focus:ring-2 focus:ring-navy-light">
                        <option>February</option>
                        <option>January</option>
                    </select>
                </div>
            </div>

            {/* First Charts Row */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <ConsentPieChart />
                <TppBarChart />
            </div>

            {/* Second Charts Row */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <MonthlyQuoteBarChart />
                </div>
                <div className="lg:col-span-1">
                    <LobPieChart />
                </div>
                <div className="lg:col-span-1">
                    <ApiSuccessPieChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
