import OverAllStats from "../models/Overallstats.js";

export const getSales = async (req, res) => {
  try {
    const overallSales = await OverAllStats.find();
    res.status(200).json(overallSales[0]);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
