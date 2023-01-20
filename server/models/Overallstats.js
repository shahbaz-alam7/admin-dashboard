import mongoose from "mongoose";

const OverallStatsSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [{ date: String, totalSales: Number, totalUnits: Number }],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const OverAllStats = mongoose.model("overAllStats", OverallStatsSchema);

export default OverAllStats;
