import { model, Schema, Document } from "mongoose";

export interface ProjectConstructor extends Document {
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

const projectSchema: Schema = new Schema<ProjectConstructor>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    heading: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    description: {
      type: String,
    },
    github_link: {
      type: String,
    },
    images: {
      type: [String],
    },
    tech_used: {
      type: [String],
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export default model<ProjectConstructor>("Project", projectSchema);
