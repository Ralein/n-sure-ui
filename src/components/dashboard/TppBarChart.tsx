"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "TPP Client Test", generated: 370, accepted: 280 },
    { name: "TPP A", generated: 50, accepted: 20 },
    { name: "TPP B", generated: 30, accepted: 10 },
];

const TppBarChart = () => {
    return (
        <div className="h-[300px] w-full rounded-[20px] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between px-2">
                <h4 className="text-lg font-bold text-navy">TPP - Wise Consent Requests</h4>
            </div>

            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#A0AEC0" }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#A0AEC0" }} />
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                        />
                        <Bar dataKey="generated" name="Generated" fill="#6AD2FF" radius={[5, 5, 0, 0]} />
                        <Bar dataKey="accepted" name="Accepted" fill="#F56565" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TppBarChart;
