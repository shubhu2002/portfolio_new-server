import { model, Schema } from "mongoose";
import { allowedCategories } from "../types/index.js";
const skillsSchema = new Schema({
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
}, { timestamps: true });
export default model("Skills", skillsSchema);
