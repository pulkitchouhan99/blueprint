import NorthEastIcon from "@/app/assets/svg/NorthEastIcon";

export default function DashboardPage() {
  return (
    <div className="p-3.5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-h3 font-medium text-black">Navigator Dashboard</h1>
        <span className="text-red-primary text-body-2 flex gap-1">
          (21) Closed Cases <NorthEastIcon />
        </span>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-body-1 text-[#3B3B3B]">Welcome to your Navigator Dashboard</p>
      </div>
    </div>
  );
}
