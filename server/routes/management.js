import express from "express";
import { getAdmins, getPerformace } from "../controllers/management.js";
const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getPerformace);

export default router;
