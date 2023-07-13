import express from "express";
import cors from "cors";

import userRouter from "./src/routes/usersRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/users", userRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
