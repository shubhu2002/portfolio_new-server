import { Router } from "express";
import {
  createSkill,
  updatePSkillById,
  deleteSkillById,
  getAllSkills,
} from "../controllers/skills.controller.js";

const router = Router();

router.post("/create", createSkill);
router.put("/:id", updatePSkillById);
router.delete("/:id", deleteSkillById);
router.get("/all", getAllSkills);

export default router;
