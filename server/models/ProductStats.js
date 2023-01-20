import mongoose from "mongoose";

const productStatsSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: {
      type: Number,
      required: true,
    },
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [{ date: String, totalSales: Number, totalUnits: Number }],
  },
  { timestamps: true }
);

const ProductStats = mongoose.model("productStats", productStatsSchema);

export default ProductStats;
