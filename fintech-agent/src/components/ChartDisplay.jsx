import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

const ChartDisplay = () => {
  const { userData } = useContext(UserContext);

  if (!userData) {
    return (
      <div className="text-center text-gray-500 py-6">
        Loading charts... Please wait.
      </div>
    );
  }

  // ✅ Safely compute totals
  const totalIncome =
    userData.incomeSources?.reduce((sum, inc) => sum + (inc.amount || 0), 0) || 0;
  const totalExpenses =
    userData.expenses?.reduce((sum, exp) => sum + (exp.amount || 0), 0) || 0;

  const pieData = [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpenses },
  ];

  // ✅ Handle empty or invalid data gracefully
  const validPieData = pieData.filter((d) => d.value > 0);
  const lineData = [
    { month: "Jan", savings: 0 },
    { month: "Feb", savings: 500 },
    { month: "Mar", savings: 1200 },
    {
      month: "Apr",
      savings: userData.savingsGoal?.amount
        ? userData.savingsGoal.amount
        : 1500,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* 💡 Income vs Expenses Pie Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Income vs Expenses
        </h2>
        {validPieData.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={validPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {validPieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">
            Add income and expenses to view chart.
          </p>
        )}
      </div>

      {/* 💡 Savings Progress Line Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Savings Progress
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="savings"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartDisplay;