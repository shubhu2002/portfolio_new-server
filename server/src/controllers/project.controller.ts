import type { Request, Response } from "express";

import Project from "../models/Projects.js";
import { ProjectConstructor, ProjectZodSchema } from "../types/index.js";

export const createProject = async (req: Request, res: Response) => {
  try {
    const newProject = ProjectZodSchema.parse(req.body);
    const project = new Project(newProject);
    const savedProject = await project.save();

    res.status(200).json({
      status: true,
      data: savedProject as ProjectConstructor,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

export const updateProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProject = ProjectZodSchema.parse(req.body);
    const project = await Project.findByIdAndUpdate(
      id,
      {
        $set: updatedProject,
      },
      { new: true },
    );
    res.status(200).json({
      status: true,
      data: project as ProjectConstructor,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

export const deleteProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await Project.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "statusfully Deleted",
      data: response,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    console.log(projects);

    if (!projects) {
      res.status(404).json({ status: true, message: "No data found" });
      return;
    }

    res.status(200).json({
      status: true,
      data: projects as ProjectConstructor[],
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      error: error,
    });
  }
};
