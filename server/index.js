import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// data imports
import {
  dataUser,
  dataProductStat,
  dataProduct,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat
} from "./data/data.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStats from "./models/ProductStats.js";
import Transaction from "./models/Transaction.js";
import OverAllStats from "./models/Overallstats.js";
import AffiliateStat from "./models/AffiliateStat.js";
// Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// mongoose setup

const PORT = process.env.PORT || 5001;
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Port started on ${PORT}`));

    // Add only one time
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStats.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction)
    // OverAllStats.insertMany(dataOverallStat)
    // AffiliateStat.insertMany(dataAffiliateStat)
  })
  .catch((error) => console.log(`${error} ------------did not connect.`));
mongoose.set("strictQuery", true);
