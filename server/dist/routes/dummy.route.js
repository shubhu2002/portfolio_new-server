import { Router } from "express";
import { dummyController } from "../controllers/dummy.controller.js";
const router = Router();
router.get("/", dummyController);
export default router;
