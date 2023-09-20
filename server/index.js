import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import express from "express";
const app = express();
configDotenv();
const PORT = process.env.PORT;
const CONNECTION = process.env.CONNECTION_URL;
import cors from "cors";
import router from "./router/dataModelRouter.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("welcome");
});

app.use("/", router);

mongoose
  .connect(CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
