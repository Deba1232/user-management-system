import express from "express";

import { usersController } from "../controllers/usersController.js";

const userRouter = express.Router();

userRouter.get("/", usersController.getUsers);

userRouter.get("/:userId", usersController.getUserById);

userRouter.post("/", usersController.createUser);

userRouter.put("/:userId", usersController.updateUser);

userRouter.delete("/:userId", usersController.deleteUser);

export default userRouter;
