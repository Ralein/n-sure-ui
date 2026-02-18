"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdSearch, MdHistory, MdAssignment, MdVisibility, MdHistoryEdu, MdFilterList, MdFileDownload } from "react-icons/md";

const mockConsents = [
    { id: "b121XXXXXXXX8b0e", customer: "-", tpp: "TPP Client Test", created: "2026-02-18T06:53:01.901", expires: "2026-12-29T23:00:00", status: "AwaitingAuthorization" },
    { id: "7164XXXXXXXX1277", customer: "AZIZ ELGOUZOULI", tpp: "TPP Client Test", created: "2026-02-18T06:22:05.23", expires: "2026-12-29T23:00:00", status: "Authorized" },
    { id: "599cXXXXXXXX8351", customer: "-", tpp: "TPP Client Test", created: "2026-02-18T05:48:49.781", expires: "2026-12-28T23:00:00", status: "AwaitingAuthorization" },
    { id: "91e8XXXXXXXX4291", customer: "MAJED SAIF MAJED RAS...", tpp: "TPP Client Test", created: "2026-02-18T05:45:02.181", expires: "2026-12-28T23:00:00", status: "AwaitingAuthorization" },
    { id: "c9ceXXXXXXXX8531", customer: "Martino Giovanni Picotti", tpp: "TPP Client Test", created: "2026-02-18T05:17:09.917", expires: "2026-12-28T23:00:00", status: "Authorized" },
    { id: "5797XXXXXXXXab1e", customer: "Martino Giovanni Picotti", tpp: "TPP Client Test", created: "2026-02-18T05:11:25.672", expires: "2026-12-28T23:00:00", status: "Authorized" },
];

const ConsentManagement = () => {
    const [activeTab, setActiveTab] = useState("CURRENT");

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-navy">Consent Management</h1>

            <div className="rounded-[20px] bg-white p-6 shadow-sm">
                {/* Tabs */}
                <div className="mb-6 flex border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab("CURRENT")}
                        className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-colors ${activeTab === "CURRENT"
                                ? "border-b-2 border-navy text-navy"
                                : "text-gray-400 hover:text-navy"
                            }`}
                    >
                        <MdAssignment size={18} />
                        CURRENT
                    </button>
                    <button
                        onClick={() => setActiveTab("HISTORY")}
                        className={`flex items-center gap-2 px-6 py-3 text-sm font-bold transition-colors ${activeTab === "HISTORY"
                                ? "border-b-2 border-navy text-navy"
                                : "text-gray-400 hover:text-navy"
                            }`}
                    >
                        <MdHistory size={18} />
                        HISTORY
                    </button>
                </div>

                {/* Controls */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="relative w-full max-w-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <MdSearch size={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-navy-light"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Items per page:</span>
                            <select className="rounded border border-gray-200 px-2 py-1 text-navy outline-none">
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>1 - 10 of 588</span>
                            <div className="flex gap-1 ml-4">
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50">{"<"}</button>
                                <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50">{">"}</button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 border-l pl-6">
                            <button className="text-gray-400 hover:text-navy"><MdFilterList size={22} /></button>
                            <button className="text-gray-400 hover:text-navy"><MdFileDownload size={22} /></button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">Consent ID</th>
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">Customer Name</th>
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">TPP Name</th>
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">Created On</th>
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">Expires On</th>
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">Status</th>
                                <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockConsents.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 text-sm">
                                    <td className="px-4 py-4 font-medium text-blue-500 text-nowrap cursor-pointer hover:underline">
                                        {item.id}
                                    </td>
                                    <td className="px-4 py-4 text-navy text-nowrap">{item.customer}</td>
                                    <td className="px-4 py-4 text-navy text-nowrap">{item.tpp}</td>
                                    <td className="px-4 py-4 text-gray-500 text-nowrap">{item.created}</td>
                                    <td className="px-4 py-4 text-gray-500 text-nowrap">{item.expires}</td>
                                    <td className="px-4 py-4 text-nowrap">
                                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${item.status === 'Authorized'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="text-gray-400 hover:text-navy"><MdHistoryEdu size={20} /></button>
                                            <Link href="/consent-details/1">
                                                <button className="flex h-6 w-6 items-center justify-center rounded bg-green-500 text-white hover:bg-green-600">
                                                    <MdVisibility size={14} />
                                                </button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ConsentManagement;
