import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import dummyRoutes from "./routes/dummy.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Welcome to the server !!");
});
app.use("/dummy", dummyRoutes);
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
export default app;
