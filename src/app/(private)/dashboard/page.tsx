export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium text-gray-900 mb-4">Navigator Dashboard</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-base text-gray-700">Welcome to your Navigator Dashboard</p>
        <div className="mt-4 space-y-2">
          <div className="bg-blue-500 text-white p-2">Test Blue Background</div>
          <div className="bg-primary-500 text-white p-2">Test Primary Background</div>
          <div className="bg-[#004489] text-white p-2">Test Hex Background</div>
        </div>
      </div>
    </div>
  );
}