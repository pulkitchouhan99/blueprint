import TopRightArrowIcon from "@/app/assets/svg/TopRightArrowIcon";
import TrendingDownIcon from "@/app/assets/svg/TrendingDownIcon";
import TrendingUpIcon from "@/app/assets/svg/TrendingUpIcon";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: {
    value: number;
    trend: "up" | "down";
  };
  icon?: React.ReactNode;
  backgroundColor?: string;
  gradientColor?: string;
  borderColor?: string;
  valueColor?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  change,
  icon,
  backgroundColor = "bg-gray-50",
  gradientColor,
  borderColor,
  valueColor = "text-black",
}: StatCardProps) {
  const cardStyle = gradientColor
    ? {
        background: gradientColor,
        border: borderColor ? `1px solid ${borderColor}` : undefined,
      }
    : {};

  return (
    <div
      className={`rounded-2xl p-6 flex flex-col justify-between min-h-[130px] ${!gradientColor ? backgroundColor : ""}`}
      style={cardStyle}>
      {/* Top row - Title with icon and arrow */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 pb-4">
          {icon && <span className="text-gray-700">{icon}</span>}
          <h3 className="text-2xl font-medium text-[#3B3B3B] leading-8 tracking-normal">{title}</h3>
          <TopRightArrowIcon />
        </div>
        <p className={`text-5xl font-bold text-right leading-[56px] tracking-normal ${valueColor}`}>{value}</p>
      </div>

      {/* Bottom row - Change indicator and subtitle */}
      <div className="w-full flex items-center justify-end">
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}

        {change && (
          <div className="flex items-center gap-2 text-sm font-medium leading-5 tracking-normal font-sans">
            <span className={change.trend === "up" ? "text-[#28A745]" : "text-[#DC3545]"}>
              {change.trend === "up" ? "+" : "-"}
              {change.value}%
            </span>
            {change.trend === "up" ? <TrendingUpIcon /> : <TrendingDownIcon />}
            <span className="text-[#3B3B3B]">from the last month</span>
          </div>
        )}
      </div>
    </div>
  );
}
