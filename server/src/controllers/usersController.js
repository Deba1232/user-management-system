import { userService } from "../services/usersService.js";

export const usersController = {
  createUser: async (req, res) => {
    await userService.createUser(req.body);
    res.status(201).json("created");
  },
  getUsers: async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
  },
  getUserById: async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    res.json(user);
  },
  updateUser: async (req, res) => {
    const user = await userService.updateUser(req.params.userId, req.body);
    res.status(200).json(user);
  },
  deleteUser: async (req, res) => {
    const user = await userService.deleteUser(req.params.userId);
    res.status(200).json(user);
  },
};
