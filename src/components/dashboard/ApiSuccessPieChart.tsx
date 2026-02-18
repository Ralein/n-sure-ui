"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
    { name: "Success (94.2%)", value: 94.2, color: "#05CD99" },
    { name: "Failure (5.8%)", value: 5.8, color: "#EE5D50" },
];

const ApiSuccessPieChart = () => {
    return (
        <div className="h-[300px] w-full rounded-[20px] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between px-2">
                <h4 className="text-lg font-bold text-navy">API Success Rate</h4>
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

export default ApiSuccessPieChart;
