import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import OverAllStats from "../models/Overallstats.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.log(err);
  }
};
export const getDashboardStats = async (req, res) => {
  try {
    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";
    const transaction = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    const overallStat = await OverAllStats.find({ year: currentYear });
    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
    } = overallStat[0];
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date == currentDay;
    });
    const thisMonthsStats = overallStat[0].monthlyData.find(({ month }) => {
      return month == currentMonth;
    });
    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      thisMonthsStats,
      todayStats,
      transaction,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
