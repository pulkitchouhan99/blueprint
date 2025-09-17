"use client";

import NorthEastIcon from "@/app/assets/svg/NorthEastIcon";
import { StatCard } from "@/components/stat-card";
import { ReferralCard } from "@/components/referral-card";
import HealthIcon from "@/app/assets/svg/HealthIcon";
import HealthMetricesIcon from "@/app/assets/svg/HealthMetricesIcon";
import CurrencyIcon from "@/app/assets/svg/CurrencyIcon";

export default function DashboardPage() {
  const referrals = [
    {
      patientName: "John Davis",
      condition: "Lung Cancer",
      timeAgo: "60 Minutes",
      date: "Aug 05, 2025",
      time: "11:05 AM",
    },
    {
      patientName: "Darrell Steward",
      condition: "Blood Cancer",
      timeAgo: "60 Minutes",
      date: "Aug 06, 2025",
      time: "1:05 AM",
    },
    {
      patientName: "Lucas White",
      condition: "Leukemia",
      timeAgo: "60 Minutes",
      date: "Aug 06, 2025",
      time: "1:05 AM",
    },
    {
      patientName: "Maya Green",
      condition: "Ovarian Cancer",
      timeAgo: "60 Minutes",
      date: "Aug 07, 2025",
      time: "05:15 PM",
    },
    {
      patientName: "Annette Black",
      condition: "Pancreatic Cancer",
      timeAgo: "60 Minutes",
      date: "Aug 07, 2025",
      time: "05:15 PM",
    },
    {
      patientName: "Annette Black",
      condition: "Pancreatic Cancer",
      timeAgo: "60 Minutes",
      date: "Aug 07, 2025",
      time: "05:15 PM",
    },
  ];
  return (
    <div className="p-3.5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-h3 font-medium text-black">Navigator Dashboard</h1>
        <span className="text-red-primary text-body-2 flex gap-1">
          (21) Closed Cases <NorthEastIcon />
        </span>
      </div>

      {/* Stats Grid */}
      <div className="flex w-full gap-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8 flex-1">
          <StatCard
            title="New Cases"
            value="30"
            change={{ value: 25, trend: "down" }}
            icon={<HealthIcon />}
            gradientColor="linear-gradient(148.61deg, rgba(255, 255, 255, 0.9) 34.88%, rgba(248, 243, 217, 0.8) 47.59%, rgba(232, 176, 6, 0.15) 111.02%)"
            borderColor="#E8B00640"
            valueColor="text-[#FFC107]"
          />

          <StatCard
            title="Active Cases"
            value="65"
            change={{ value: 25, trend: "up" }}
            icon={<HealthMetricesIcon />}
            gradientColor="linear-gradient(118.61deg, rgba(255, 255, 255, 0.9) 34.88%, rgba(230, 248, 240, 0.8) 47.59%, rgba(40, 167, 69, 0.15) 111.02%)"
            borderColor="#28A74540"
            valueColor="text-[#28A745]"
          />

          <StatCard
            title="PIN Cases"
            value="86"
            subtitle="Total Patients"
            icon={<CurrencyIcon />}
            gradientColor="linear-gradient(118.61deg, rgba(255, 255, 255, 0.9) 34.88%, rgba(230, 248, 252, 0.8) 47.59%, rgba(15, 192, 223, 0.15) 111.02%)"
            borderColor="#0FC0DF40"
            valueColor="text-[#0FC0DF]"
          />
        </div>

        {/* Referrals Section */}
        <div className="border border-[#DFE1E4] rounded-2xl bg-white p-6 flex-1 h-[424px]">
          <div className="pb-3">
            <h2 className="text-xl font-semibold text-gray-900">New Referrals</h2>
          </div>

          <div className="divide-y divide-gray-100 overflow-y-auto max-h-84">
            {referrals.map((referral, index) => (
              <ReferralCard
                key={index}
                {...referral}
                onStartScreening={() => console.log(`Start screening for ${referral.patientName}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
