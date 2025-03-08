import { model, Schema, Document } from "mongoose";
import { allowedCategories, CategoryType } from "../types/index.js";
export interface SkillsConstructor extends Document {
  id: number;
  name: string;
  category: CategoryType;
}

const skillsSchema: Schema = new Schema<SkillsConstructor>(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: allowedCategories,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<SkillsConstructor>("Skills", skillsSchema);
