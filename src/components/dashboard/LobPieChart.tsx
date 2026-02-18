"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
    { name: "MOTOR", value: 65, color: "#6AD2FF" },
    { name: "MEDICAL", value: 5, color: "#E0E0E0" },
    { name: "TRAVEL", value: 25, color: "#05CD99" },
    { name: "HOME", value: 5, color: "#2B3674" },
];

const LobPieChart = () => {
    return (
        <div className="h-[300px] w-full rounded-[20px] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between px-2">
                <h4 className="text-lg font-bold text-navy">Consents Distribution by LOB</h4>
            </div>

            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={0}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            iconType="rect"
                            wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="text-center mt-[-10px]">
                <a href="#" className="text-xs text-blue-500 underline">View</a>
            </div>
        </div>
    );
};

export default LobPieChart;
