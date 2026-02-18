"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
    { name: "JAN", generation: 100, acceptance: 80 },
    { name: "FEB", generation: 480, acceptance: 290 },
    { name: "MAR", generation: 0, acceptance: 0 },
    { name: "APR", generation: 0, acceptance: 0 },
    { name: "MAY", generation: 0, acceptance: 0 },
    { name: "JUN", generation: 0, acceptance: 0 },
    { name: "JUL", generation: 0, acceptance: 0 },
    { name: "AUG", generation: 0, acceptance: 0 },
    { name: "SEP", generation: 0, acceptance: 0 },
    { name: "OCT", generation: 0, acceptance: 0 },
    { name: "NOV", generation: 0, acceptance: 0 },
    { name: "DEC", generation: 0, acceptance: 0 },
];

const MonthlyQuoteBarChart = () => {
    return (
        <div className="h-[300px] w-full rounded-[20px] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between px-2">
                <h4 className="text-lg font-bold text-navy">Quote Generation - Quote Acceptance(Monthly)</h4>
            </div>

            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#A0AEC0" }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#A0AEC0" }} />
                        <Tooltip
                            cursor={{ fill: "transparent" }}
                            contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                        />
                        <Legend
                            verticalAlign="top"
                            align="center"
                            height={36}
                            iconType="rect"
                        />
                        <Bar dataKey="generation" name="Quote Generation" fill="#4318FF" radius={[5, 5, 0, 0]} />
                        <Bar dataKey="acceptance" name="Quote Acceptance" fill="#6AD2FF" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MonthlyQuoteBarChart;
