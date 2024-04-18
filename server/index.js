import express from "express";
import connectDatabase from "./database/index.js";
import cors from "cors";

import dotenv from "dotenv";
import router from "./routers/index.js";
dotenv.config();
const PORT = process.env.port || 5000;
const app = express();
app.use(express.json());
app.use(cors());
connectDatabase();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
