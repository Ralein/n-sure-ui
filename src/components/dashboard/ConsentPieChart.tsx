"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
    { name: "Authorized", value: 400, color: "#66CDCC" },
    { name: "Revoked", value: 300, color: "#F56565" },
    { name: "Suspended", value: 100, color: "#A0AEC0" },
    { name: "Awaiting", value: 200, color: "#2B3674" },
    { name: "Rejected", value: 200, color: "#FF4D4D" },
    { name: "Expired", value: 50, color: "#F5A623" },
];

const ConsentPieChart = () => {
    return (
        <div className="h-[300px] w-full rounded-[20px] bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between px-2">
                <h4 className="text-lg font-bold text-navy">Consent Analysis - Overview</h4>
            </div>

            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
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
        </div>
    );
};

export default ConsentPieChart;
