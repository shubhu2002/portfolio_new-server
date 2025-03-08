import { z } from "zod";
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
export const allowedCategories = ["WEB", "SERVER", "AI", "OTHER"];
export const SkillsZodSchem = z.object({
    id: z.number(),
    name: z.string(),
    category: z.enum(allowedCategories),
});
