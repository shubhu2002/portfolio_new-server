import { z } from "zod";

export interface ProjectConstructor {
  id: number;
  heading: string;
  src: string;
  link?: string;
  description: string;
  images: string[];
  tech_used: string[];
  github_link?: string;
  category: string[];
}

export const ProjectZodSchema = z.object({
  id: z.number(),
  heading: z.string(),
  src: z.string(),
  link: z.string().optional(),
  description: z.string(),
  images: z.string().array(),
  tech_used: z.string().array(),
  github_link: z.string().optional(),
  category: z.string().array(),
});


export const allowedCategories = ["WEB", "SERVER", "AI", "OTHER"] as const;
export type CategoryType = (typeof allowedCategories)[number];
export interface SkillsConstructor {
  id: number;
  name: string;
  category: CategoryType;
}

export const SkillsZodSchem = z.object({
  id: z.number(),
  name: z.string(),
  category: z.enum(allowedCategories),
});
