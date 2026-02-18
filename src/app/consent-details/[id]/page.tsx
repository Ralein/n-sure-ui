"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    MdChevronLeft,
    MdOutlinePauseCircle,
    MdOutlineHistory,
    MdFlightTakeoff,
    MdExpandMore,
    MdExpandLess,
    MdContentCopy
} from "react-icons/md";

const ConsentDetails = () => {
    const [expandedSections, setExpandedSections] = useState({
        policy: true,
        basic: false,
        detailed: false
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Consent Details</h1>
            </div>

            {/* Info Card Strip */}
            <div className="rounded-[20px] bg-white p-6 shadow-sm">
                <div className="grid grid-cols-1 gap-y-6 md:grid-cols-5 md:gap-x-4">
                    {/* Header Row 1 */}
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Consent ID:</span>
                        <div className="flex items-center gap-2 font-bold text-navy">
                            7164XXXXXXXX1277
                            <button className="text-blue-500"><MdContentCopy size={14} /></button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Status:</span>
                        <span className="font-bold text-navy">Authorized</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">TPP Name:</span>
                        <span className="font-bold text-navy">TPP Client Test</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Consent Type:</span>
                        <span className="font-bold text-navy">Long-Lived</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Emirates ID:</span>
                        <span className="font-bold text-navy">784-1983-3183718-1</span>
                    </div>

                    <div className="col-span-full border-t border-gray-100 my-2"></div>

                    {/* Header Row 2 */}
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Email:</span>
                        <span className="font-bold text-navy">travelopen@gmail.com</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Base Consent ID:</span>
                        <span className="font-bold text-navy">8dfbXXXXXXXXbce1</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Created Date:</span>
                        <span className="font-bold text-navy">18 Feb 2026</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Expiration Date:</span>
                        <span className="font-bold text-navy">29 Dec 2026</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 capitalize">Authorization Channel:</span>
                        <span className="font-bold text-navy">Web</span>
                    </div>
                </div>

                {/* Floating Actions */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-navy cursor-pointer hover:underline">
                        <MdOutlineHistory size={20} className="text-gray-400" />
                        List of Updates
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-2 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-500">
                            <MdOutlinePauseCircle size={20} />
                            Suspend
                        </button>
                        <Link href="/consent-management">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-2 text-sm font-bold text-navy hover:bg-gray-50">
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Left Column - Policy info */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold text-navy">Policy(s) to share with TPP Client Test</h2>
                    <div className="rounded-[20px] border border-navy border-b-4 bg-white p-6 shadow-sm">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1 text-white text-xs font-bold uppercase tracking-wider">
                            <MdFlightTakeoff size={16} />
                            TRAVEL
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-navy font-bold">
                                <span className="text-brand-orange text-lg">✈</span>
                                Travel
                            </div>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Policy Number:</span>
                                    <span className="font-medium text-navy">H1L34008957</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Plan Name:</span>
                                    <span className="font-medium text-navy">INDIVIDUAL-MEDICAL & TRAVEL ASST(M PLUS)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Passport Number:</span>
                                    <span className="font-medium text-navy">XQ3154786</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Status:</span>
                                    <span className="font-medium text-red-500 uppercase">EXPIRED</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Cover End Date:</span>
                                    <span className="font-medium text-navy">21 Sept 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Review Accordion */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-lg font-bold text-navy">Review the info you will be sharing</h2>
                    <div className="flex flex-col gap-3">
                        {/* Section 1 */}
                        <div className="rounded-xl bg-white shadow-sm">
                            <button
                                onClick={() => toggleSection('policy')}
                                className="flex w-full items-center justify-between p-5 text-left"
                            >
                                <div className="flex items-center gap-2 font-bold text-navy">
                                    <MdFlightTakeoff size={20} className="text-gray-400" />
                                    TRAVEL
                                </div>
                                {expandedSections.policy ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
                            </button>
                            {expandedSections.policy && (
                                <div className="border-t border-gray-50 p-5 pt-0">
                                    <div className="mt-4 flex flex-col gap-3">
                                        <h4 className="flex items-center justify-between text-sm font-bold text-navy">
                                            Policy Details
                                            <MdExpandLess size={18} className="text-gray-300" />
                                        </h4>
                                        <ul className="list-disc pl-5 text-sm text-gray-500 flex flex-col gap-1">
                                            <li>Your Insurance Policy Number</li>
                                            <li>The cover start date and end date, when applicable</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Section 2 */}
                        <div className="rounded-xl bg-white shadow-sm">
                            <button
                                onClick={() => toggleSection('basic')}
                                className="flex w-full items-center justify-between p-5 text-left"
                            >
                                <span className="font-bold text-navy">Your Basic Customer Details</span>
                                {expandedSections.basic ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
                            </button>
                        </div>

                        {/* Section 3 */}
                        <div className="rounded-xl bg-white shadow-sm">
                            <button
                                onClick={() => toggleSection('detailed')}
                                className="flex w-full items-center justify-between p-5 text-left"
                            >
                                <span className="font-bold text-navy">Your Detailed Customer Details</span>
                                {expandedSections.detailed ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsentDetails;
