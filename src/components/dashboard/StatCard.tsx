import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
    title: string;
    count: number | string;
    icon?: IconType;
    iconBgColor?: string;
    iconColor?: string;
    extraInfo?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    count,
    icon: Icon,
    iconBgColor = "bg-gray-100",
    iconColor = "text-navy",
    extraInfo
}) => {
    return (
        <div className="flex h-[100px] items-center justify-between rounded-[20px] bg-white px-6 py-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                    {title}
                </h4>
                <div className="text-2xl font-bold text-navy">
                    {count}
                </div>
            </div>

            {extraInfo ? (
                <div className="flex items-center justify-center">
                    {extraInfo}
                </div>
            ) : Icon && (
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor} ${iconColor}`}>
                    <Icon size={24} />
                </div>
            )}
        </div>
    );
};

export default StatCard;
