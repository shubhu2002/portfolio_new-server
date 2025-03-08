import { model, Schema } from "mongoose";
const projectSchema = new Schema({
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
}, { timestamps: true });
export default model("Project", projectSchema);
