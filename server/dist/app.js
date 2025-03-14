import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import MongooseConnect from "./mongoose/index.js";
import projectRouter from "./routes/project.route.js";
import skillRouter from "./routes/skill.route.js";
import dummyRouter from "./routes/dummy.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Welcome to the tourice server !!");
});
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/skills", skillRouter);
app.use("/api/v1/dummy", dummyRouter);
app.listen(process.env.PORT || 5000, () => {
    MongooseConnect();
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
export default (req, res) => {
    return app(req, res);
};
