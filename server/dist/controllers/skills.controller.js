import Skills from "../models/Skills.js";
import { SkillsZodSchem } from "../types/index.js";
export const createSkill = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        const savedSkills = [];
        for (const s of body) {
            const newSkill = SkillsZodSchem.parse(s);
            const skill = new Skills(newSkill);
            console.log(skill);
            const savedSkill = await skill.save();
            console.log(savedSkill);
            savedSkills.push(savedSkill);
        }
        res.status(200).json({
            status: true,
            data: savedSkills,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
        });
    }
};
export const updatePSkillById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSkill = SkillsZodSchem.parse(req.body);
        const skill = await Skills.findByIdAndUpdate(id, {
            $set: updatedSkill,
        }, { new: true });
        res.status(200).json({
            status: true,
            data: skill,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
        });
    }
};
export const deleteSkillById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Skills.findByIdAndDelete(id);
        res.status(200).json({
            status: true,
            message: "statusfully Deleted",
            data: response,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
        });
    }
};
export const getAllSkills = async (req, res) => {
    try {
        const skills = await Skills.find();
        console.log(skills);
        if (!skills) {
            res.status(404).json({ status: true, message: "No data found" });
            return;
        }
        res.status(200).json({
            status: true,
            data: skills,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
        });
    }
};
