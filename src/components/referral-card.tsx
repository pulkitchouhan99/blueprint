import { ChevronRight } from "lucide-react";

interface ReferralCardProps {
  patientName: string;
  condition: string;
  timeAgo: string;
  date: string;
  time: string;
  onStartScreening?: () => void;
}

export function ReferralCard({ patientName, condition, timeAgo, date, time, onStartScreening }: ReferralCardProps) {
  return (
    <div className="flex items-center justify-between py-3 pr-3 hover:bg-gray-50 transition-colors">
      <div className="flex-1">
        <h4 className="text-body-1 font-medium text-[#3B3B3B]">
          {patientName} | {condition}
        </h4>
        <p className="text-caption-1 font-normal text-[#949494] mt-1">
          {timeAgo} | {date} | {time}
        </p>
      </div>

      <button
        onClick={onStartScreening}
        className="flex items-center gap-2 px-2 py-2 bg-[#004489] text-white rounded-lg hover:bg-[#003e7d] transition-colors">
        <span className="text-sm font-medium">Start Screening</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
