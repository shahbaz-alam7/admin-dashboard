import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: { type: [mongoose.Types.ObjectId], ref: "Transactions" },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("affiliateStat", AffiliateStatSchema);

export default AffiliateStat;
